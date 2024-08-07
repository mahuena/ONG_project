/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'opacity': 'opacity'
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'group-hover'],
      scale: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [],
}