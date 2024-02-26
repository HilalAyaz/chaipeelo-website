/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        cursive: ['Satisfy', 'cursive']
      },
      colors: {
        primary: '#422800',
        secondary: '#b86600',
        brandDark: '#422800'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '15px',
          padding:'2rem'
        }
      }
    }
  },
  plugins: []
}
