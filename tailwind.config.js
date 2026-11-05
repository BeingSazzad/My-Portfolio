/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'visiblo-primary': '#fff95b',
        'visiblo-secondary': '#ff930f',
        'surface-base': '#000000',
        'border-default': '#ffffff',
        'border-muted': '#ff930f',
        'text-accent': '#0d6efd',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xs': '10px',
        'sm': '14px',
        'md': '20px',
        'lg': '50px',
        'xl': '60px',
        'profile': '40px',
      },
      boxShadow: {
        'visiblo-glow': 'rgb(255, 147, 15) 0px 0px 15px 0px, rgba(255, 255, 255, 0.76) 0px 0px 4px 0px inset',
        'visiblo-glass': 'rgba(255, 255, 255, 0.1) 0px 9.94px 47.51px -2.84px inset, rgba(255, 255, 255, 0.25) 0.19px 0.19px 0.5px 0px inset',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}

