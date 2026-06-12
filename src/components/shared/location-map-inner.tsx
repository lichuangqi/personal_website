"use client";

import { useTheme } from "next-themes";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

type LocationMapInnerProps = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const VOYAGER_TILES =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";

export function LocationMapInner({
  latitude,
  longitude,
  zoom,
}: LocationMapInnerProps) {
  const { resolvedTheme } = useTheme();
  const themeKey = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <MapContainer
      key={themeKey}
      center={[latitude, longitude]}
      zoom={zoom}
      className={`h-full w-full ${themeKey === "dark" ? "map-tiles-dark" : ""}`}
      zoomControl={false}
      scrollWheelZoom={false}
      dragging={false}
      doubleClickZoom={false}
      touchZoom={false}
      boxZoom={false}
      keyboard={false}
      attributionControl={false}
    >
      <TileLayer url={VOYAGER_TILES} />
    </MapContainer>
  );
}
