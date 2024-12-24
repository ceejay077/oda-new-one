import type { Config } from "tailwindcss";
import OurServices from "./app/components/home/our-services";
import Testimonials from "./app/components/home/testimonials";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bannerBlue: "#101E41",
        buttonColor: "#A69024",
        sectionTitle: "#313132",
        titleDescription: "#757576",
        OurServicesBox: "#F2F7FC",
        CTAButtons: "#27479B",
        CTAFloating: "#linear-gradient(267deg, #496CCB 2.65%, #27479B 97.47%)",
        CTRbg: "#101E41",
        CTAHeading: "#EAEAEB",
        TestimonialsBlue: "#F2F7FC",
      },
    },
  },
  plugins: [],
} satisfies Config;
