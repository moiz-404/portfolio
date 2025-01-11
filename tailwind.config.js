
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all relevant files for Tailwind CSS
  ],
  theme: {
    screens: {
      xs: "475px",       // Extra small devices (e.g., small phones)
      sm: "640px",       // Small devices (e.g., larger phones)
      md: "768px",       // Medium devices (e.g., tablets)
      lg: "1024px",      // Large devices (e.g., small laptops)
      xl: "1280px",      // Extra large devices (e.g., desktops)
      "2xl": "1536px",   // Double extra large devices (e.g., larger desktops)
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      colors: {
        // primary: "#1E3A8A",   // Custom Primary Color (Blue)
        // secondary: "#9333EA", // Custom Secondary Color (Purple)
        // neutral: "#64748B",   // Neutral Gray Tone
        // primary: "#EFFAFD",   // Pale blue 
        // secondary: "#4A8BDF", // royal blue
        // neutral: "#A0006D",   // eggplant
        primary: "#2E2E2E",   // Custom Primary Color 60% Background Dark Gray
        secondary: "#F5F5F5", // Custom Secondary Color 30% Primary Off-whit
        neutral: "#D98D46",   // Neutral 10% Highlights Muted Orange 
        neutralAccents: "#E0B862",   // Neutral 10% Highlights Soft Yellow headings, buttons, or call-to-action elements
        CardBackground: "#3A3A3A",   // Slightly lighter dark gray 
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],  // Custom small font size
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"],
      },
    },
  },
  plugins: [],
};

