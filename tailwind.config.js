/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screen: {
                sm: "360px",
                md: "768px",
                lg: "1024px",
            },
            borderRadius: {
                DEFAULT: '10px'
            }
        },
    },
    plugins: [],
}