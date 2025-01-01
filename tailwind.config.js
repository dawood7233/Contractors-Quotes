module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#ffb000",
          secondary: "#1f2020",
          accent: "#9C27B0",
          neutral: "#F5F5F5",
          "base-100": "#FFFFFF",
          info: "#209CEE",
          success: "#22C55E",
          warning: "#FACC15",
          error: "#FF5733",
        },
      },
    ],
  },
};
