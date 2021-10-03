module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite"
      },
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#E2E2D5",
          100: "#888883"
        }
      },
      fontFamily: {
        body: ["Ephesis"]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
