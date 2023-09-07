import localFont from "next/font/local";

export const PlaakRegular = localFont({
  display: "block",
  preload: false,
  src: "./Plaak-RegularB.otf",
  variable: "--font--plaak-regular",
});

export const PlaakHeavy = localFont({
  display: "block",
  preload: false,
  src: "./Plaak-Heavy.otf",
  variable: "--font--plaak-heavy",
});
