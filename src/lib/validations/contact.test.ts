import { describe, expect, it } from "vitest";

import { contactFormSchema } from "./contact";

const validContact = {
  name: "Recruiter",
  email: "recruiter@example.com",
  message: "I would like to discuss a software engineering opportunity.",
  website: "",
};

describe("contactFormSchema", () => {
  it("accepts a valid enquiry", () => {
    expect(contactFormSchema.safeParse(validContact).success).toBe(true);
  });

  it("rejects invalid email addresses and short messages", () => {
    const result = contactFormSchema.safeParse({
      ...validContact,
      email: "invalid",
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });

  it("rejects submissions that fill the honeypot", () => {
    const result = contactFormSchema.safeParse({
      ...validContact,
      website: "https://spam.example",
    });

    expect(result.success).toBe(false);
  });
});
