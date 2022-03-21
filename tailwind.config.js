module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
          paper: '#f7f6ee',
          pen: '#263238'
        },
        container: {
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
          screens: {
            sm: "100%",
            md: "100%",
            lg: "1024px",
            xl: "1180px"
          },
        },
    },
  },
  variants: {

  },
  plugins: [],
}
