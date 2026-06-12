"use client";

import { LocationMapCard } from "@/components/shared/location-map-card";
import { profileContent } from "@/content/profile";

export function AboutLocationMap() {
  const { map } = profileContent.about;

  return (
    <LocationMapCard
      city={map.city}
      region={map.region}
      latitude={map.latitude}
      longitude={map.longitude}
      zoom={map.zoom}
    />
  );
}
