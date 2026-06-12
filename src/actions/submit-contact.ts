"use server";

import { sendContactEmail } from "@/lib/email/send-contact-email";
import {
  contactFormSchema,
  type ContactFormState,
} from "@/lib/validations/contact";

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  };

  const parsed = contactFormSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      success: false,
      message: "Please fix the errors below.",
      fieldErrors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const result = await sendContactEmail(parsed.data);

  if (!result.ok) {
    if (result.reason === "missing_api_key") {
      console.error("[contact-form] RESEND_API_KEY is not configured");
      return {
        success: false,
        message: "Email delivery is not configured yet. Please try again later.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out! I'll get back to you soon.",
  };
}
