tailwind.config = {
  theme: {
    extend: {
      fontFamily: { base: ["Manrope", "sans-serif"] },
      fontSize: { lg: ["17px", "25px"] },
      colors: {
        lightBlue: "#00ACFF",
        darkBlue: "#0A335C",
        grey: "#1742581A",
        lightGrey: "#EEF4F6",
        darkGrey: "#174258CC",
        lightYellow: "#FFEB99",
        darkYellow: "#FFCC00",
      },
      container: { padding: { DEFAULT: "20px", sm: "32px" } },
      letterSpacing: { title: "-0.6px" },
      borderRadius: { lg: "10px" },
    },
  },
};
