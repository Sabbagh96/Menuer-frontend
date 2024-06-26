const { addIconSelectors } = require("@iconify/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cerise-950": "rgba(255,230,242,1)",
        "primary-cerise-850": "rgba(245,183,214,1)",
        "primary-cerise-650": "rgba(238,135,186,1)",
        "primary-cerise-500": "rgba(227,43,135,1)",
        "primary-cerise-350": "rgba(186,23,105,1)",
        "primary-cerise-150": "rgba(79,3,41,1)",
        "primary-cerise-50": "rgba(30,1,15,1)",
        "primary-cerise-50-a": "rgba(203,32,117,0.500)",
        "primary-cerise-20-a": "rgba(203,32,117,0.200)",
        "primary-cerise-10-a": "rgba(203,32,117,0.100)",
        "primary-cerise-5-a": "rgba(203,32,117,0.050)",
        "naturals-white": "rgba(255,255,255,1)",
        "naturals-white-90-a": "rgba(255,255,255,0.900)",
        "naturals-white-75-a": "rgba(255,255,255,0.750)",
        "naturals-white-50-a": "rgba(255,255,255,0.500)",
        "naturals-white-20-a": "rgba(255,255,255,0.200)",
        "naturals-white-10-a": "rgba(255,255,255,0.100)",
        "naturals-bg-light": "rgba(255,255,255,1)",
        "naturals-gray-980": "rgba(249,250,251,1)",
        "naturals-gray-950": "rgba(243,245,246,1)",
        "naturals-gray-850": "rgba(233,235,236,1)",
        "naturals-gray-750": "rgba(180,184,187,1)",
        "naturals-gray-600": "rgba(145,150,156,1)",
        "naturals-gray-500": "rgba(114,120,126,1)",
        "naturals-gray-350": "rgba(80,84,88,1)",
        "naturals-gray-200": "rgba(44,46,48,1)",
        "naturals-gray-100": "rgba(22,23,24,1)",
        "naturals-gray-50-a": "rgba(127,138,148,0.500)",
        "naturals-gray-20-a": "rgba(127,138,148,0.200)",
        "naturals-gray-10-a": "rgba(127,135,144,0.100)",
        "naturals-black": "rgba(15,15,15,1)",
        "naturals-black-75-a": "rgba(0,0,0,0.750)",
        "naturals-black-50-a": "rgba(0,0,0,0.500)",
        "naturals-black-20-a": "rgba(0,0,0,0.200)",
        "naturals-black-10-a": "rgba(0,0,0,0.100)",
        "success-green-950": "rgba(214,255,235,1)",
        "success-green-850": "rgba(156,226,191,1)",
        "success-green-650": "rgba(71,225,148,1)",
        "success-green-500": "rgba(33,166,99,1)",
        "success-green-350": "rgba(6,111,59,1)",
        "success-green-150": "rgba(2,64,33,1)",
        "success-green-50": "rgba(11,25,18,1)",
        "success-green-50-a": "rgba(32,203,117,0.500)",
        "success-green-20-a": "rgba(27,161,94,0.200)",
        "success-green-10-a": "rgba(19,190,105,0.110)",
        "success-green-5-a": "rgba(32,203,117,0.050)",
        "attention-yellow-950": "rgba(255,248,214,1)",
        "attention-yellow-850": "rgba(255,232,163,1)",
        "attention-yellow-650": "rgba(255,219,112,1)",
        "attention-yellow-500": "rgba(215,162,4,1)",
        "attention-yellow-350": "rgba(167,131,22,1)",
        "attention-yellow-150": "rgba(79,60,3,1)",
        "attention-yellow-50": "rgba(30,22,1,1)",
        "attention-yellow-50-a": "rgba(203,160,32,0.500)",
        "attention-yellow-20-a": "rgba(203,160,32,0.200)",
        "attention-yellow-10-a": "rgba(203,160,32,0.100)",
        "attention-yellow-5-a": "rgba(203,160,32,0.050)",
        "danger-red-950": "rgba(255,221,214,1)",
        "danger-red-850": "rgba(250,156,137,1)",
        "danger-red-650": "rgba(225,96,71,1)",
        "danger-red-500": "rgba(203,60,32,1)",
        "danger-red-350": "rgba(150,32,8,1)",
        "danger-red-150": "rgba(79,16,3,1)",
        "danger-red-50": "rgba(30,6,1,1)",
        "danger-red-50-a": "rgba(203,60,32,0.500)",
        "danger-red-20-a": "rgba(203,60,32,0.200)",
        "danger-red-10-a": "rgba(203,60,32,0.090)",
        "danger-red-5-a": "rgba(203,60,32,0.050)",
        "informational-blue-950": "rgba(241,247,254,1)",
        "informational-blue-850": "rgba(147,194,240,1)",
        "informational-blue-650": "rgba(71,148,225,1)",
        "informational-blue-500": "rgba(24,122,220,1)",
        "informational-blue-350": "rgba(8,79,150,1)",
        "informational-blue-150": "rgba(3,41,79,1)",
        "informational-blue-50": "rgba(1,15,30,1)",
        "informational-blue-50-a": "rgba(32,117,203,0.500)",
        "informational-blue-20-a": "rgba(32,117,203,0.200)",
        "informational-blue-10-a": "rgba(32,117,203,0.100)",
        "informational-blue-5-a": "rgba(32,117,203,0.050)",
        "accents-green": "rgba(45,169,132,1)",
        "accents-green-10-a": "rgba(45,169,132,0.100)",
        "accents-orange": "rgba(169,66,45,1)",
        "accents-orange-10-a": "rgba(169,66,45,0.100)",
        "accents-purple": "rgba(78,45,169,1)",
        "accents-purple-10-a": "rgba(78,45,169,0.100)",
        "menuer-logo-menuer-logo-dark":
          "linear-gradient(to bottom, rgba(46,45,45,0.179) 0%,rgba(46,45,45,0.180) 100%)",
        "menuer-logo-menuer-logo-light":
          "linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)",
        "menuer-logo-menuer-logo-primary":
          "linear-gradient(to bottom, rgba(237,41,139,0.931) 0%,rgba(238,51,144,0.933) 100%)",
      },
      boxShadow: {
        sm: "0px 6px 12px rgba(159,76,118,0.060)",
        default: "0px 4px 40px rgba(143,96,119,0.100)",
        md: "0px 10px 40px 10px rgba(132,103,118,0.060)",
        "drop-shadow-sm": "0px 2px 2px rgba(0,0,0,0.050)",
        "drop-shadow-default":
          "0px 1px 2px rgba(0,0,0,0.100), 0px 1px 1px rgba(0,0,0,0.060)",
        "drop-shadow-md":
          "0px4px 3px rgba(0,0,0,0.070), 0px 2px 2px rgba(0,0,0,0.060)",
        "drop-shadow-lg":
          "0px 10px 8px rgba(0,0,0,0.040), 0px 4px 3px rgba(0,0,0,0.100)",
        "drop-shadow-xl":
          "0px 20px 13px rgba(0,0,0,0.030), 0px 8px 5px rgba(0,0,0,0.080)",
        "drop-shadow-2-xl": "0px 25px 25px rgba(0,0,0,0.150)",
      },
      fontFamily: {
        alexandria: ["Alexandria", "serif"],
      },
      fontSize: {
        h1: "56px",
        h2: "48px",
        h3: "40px",
        h4: "32px",
        h5: "24px",
        "h1-mobile": "36px",
        "h2-mobile": "36px",
        "h3-mobile": "32px",
        "h4-mobile": "24px",
        "h5-mobile": "20px",
        "text-large": "22px",
        "text-medium": "20px",
        "text-regular": "18px",
        "text-small": "16px",
        "text-tiny": "14px",
        "text-extra-tiny": "12px",
      },
      lineHeight: {
        h1: "170%",
        h2: "180%",
        h3: "120%",
        h4: "130%",
        h5: "140%",
        "text-large": "150%",
        "text-medium": "150%",
        "text-regular": "150%",
        "text-small": "150%",
        "text-tiny": "150%",
        "text-extra-tiny": "150%",
      },
      textTransform: {
        none: "none",
      },
      textDecoration: {
        none: "none",
        underline: "underline",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
      backgroundImage: {
        hero_section: "url('/src/assets/background.jpeg')",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
