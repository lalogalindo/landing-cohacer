import preset from "@cohacer/tailwind-config/preset";
import type { Config } from "tailwindcss";

export default {
  presets: [preset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
} satisfies Config;