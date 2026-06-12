"use client";

import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const LocationMapInner = dynamic(
  () =>
    import("@/components/shared/location-map-inner").then(
      (module) => module.LocationMapInner,
    ),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-muted" />,
  },
);

type LocationMapCardProps = {
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  zoom?: number;
};

export function LocationMapCard({
  city,
  region,
  latitude,
  longitude,
  zoom = 11,
}: LocationMapCardProps) {
  return (
    <div className="location-map overflow-hidden rounded-lg border border-border bg-card">
      <div className="relative aspect-[16/10] w-full">
        <LocationMapInner
          latitude={latitude}
          longitude={longitude}
          zoom={zoom}
        />
      </div>

      <div className="border-t border-border px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          <div>
            <p className="font-medium text-foreground">{city}</p>
            <p className="text-small text-muted-foreground">{region}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
