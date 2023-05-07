module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background1': "url('../public/assets/background1.jpg')",
      },
      fontFamily: {
        akira: ["AKIRA", 'sans-serif'],
        
  
      }
    },
    
  },
  plugins: [],
}