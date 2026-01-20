/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090B",
          900: "#0B0F13",
          850: "#0E141A",
          800: "#111A22"
        },
        cyanA: {
          500: "#22D3EE"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(34,211,238,.15), 0 18px 50px rgba(0,0,0,.45)"
      }
    }
  },
  plugins: []
};
