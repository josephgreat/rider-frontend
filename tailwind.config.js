/** @type {import('tailwindcss').Config} */
export default {
    content : [
        "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    darkMode : 'class',
    theme : {
        extend: {
            animation: {
                smoothdrop: 'smoothdrop .3s ease-in-out'
            }
        }
    },
    plugins : []
}