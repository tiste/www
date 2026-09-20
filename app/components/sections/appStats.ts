// Sources : App Store Connect (Ventes > Unités), Google Play Console (nouveaux utilisateurs, cumul), notes des stores.
export const statsDate = "18 septembre 2026";

export const yearlyDownloads: {
  year: number;
  units: number;
  partial?: boolean;
}[] = [
  { year: 2021, units: 1700 },
  { year: 2022, units: 3050 },
  { year: 2023, units: 6170 },
  { year: 2024, units: 10300 },
  { year: 2025, units: 14200 },
  { year: 2026, units: 13200, partial: true },
];

export const appStats: {
  name: string;
  link?: string;
  ios: number;
  android?: number;
  iosRating?: { value: number; count: number };
  androidRating?: { value: number; count: number };
}[] = [
  {
    name: "1 à 10",
    link: "https://1a10.app",
    ios: 33426,
    android: 16714,
    iosRating: { value: 4.8, count: 43 },
    androidRating: { value: 4.4, count: 42 },
  },
  {
    name: "Pacevisor",
    link: "https://pacevisor.com",
    ios: 11929,
    android: 7639,
    iosRating: { value: 4.9, count: 133 },
    androidRating: { value: 4.7, count: 130 },
  },
  {
    name: "Photobooth",
    ios: 2415,
    iosRating: { value: 4.3, count: 4 },
  },
  {
    name: "Rally Call",
    link: "https://rallycall.fr",
    ios: 486,
    android: 255,
    iosRating: { value: 4.8, count: 31 },
  },
  { name: "Setlist Live", link: "https://setlist.live", ios: 265 },
];
