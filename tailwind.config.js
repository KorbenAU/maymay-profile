const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: "transparent",
            black: "#001219",
            white: "#fff",
            melon: "#FEC5BB",
            pale_pink: "#FCD5CE",
            misty_rose: "#FAE1DD",
            isabelline: "#F8EDEB",
            platinum: "#E8E8E4",
            alabester: "#D8E2DC",
            linen: "#ECE4DB",
            champagne_pink: "#FFE5D9",
            peach_puff: "#FFD7BA",
            peach_crayolar: "#FEC89A"
        },
        extend: {
            backgroundImage: {
                "main-background-img": "/images/pink_panther.JPG"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
