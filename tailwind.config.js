/** @type {import('tailwindcss').Config} */
export default {
  content: [],content: ["./src/**/*.{html,jsx}"], theme: {
    extend: {
      fontFamily:{
        'outfitFont' : 'outfit',
        'youngSerif' : 'young-serif'
      },
      backgroundColor:{
        'recipe' : '#FFF7FC',
        'background' : '#F3E5D8'
      },
      textColor:{
        'recipe' : '#5C2F44',
        'title' : '#7E4D43'
      }
    },
  },
  plugins: [],
}

