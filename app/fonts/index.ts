import localFont from "next/font/local";

export const sequelSans = localFont({
  src: [
    {
      path: "./sequel-sans/Sequel-Sans-Light-Body.ttf",
      weight: "300",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Light-Obl-Body.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Book-Body.ttf",
      weight: "400",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Book-Obl-Body.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Medium-Body.ttf",
      weight: "500",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Medium-Obl-Body.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Semi-Bold-Body.ttf",
      weight: "600",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Semi-Bold-Obl-Body.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Bold-Body.ttf",
      weight: "700",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Bold-Obl-Body.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Black-Body.ttf",
      weight: "800",
    },
    {
      path: "./sequel-sans/Sequel-Sans-Semi-Bold-Obl-Body.ttf",
      weight: "800",
      style: "italic",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--sequel-sans",
});
