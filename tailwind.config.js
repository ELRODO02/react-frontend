/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes:[
      {
      'bi-corporate': {
          'primary': '#0D1B2A',   // Navy serio (botones principales)
          'primary-content': '#FFFFFF',
          'secondary': '#1B263B', // Azul profundo complementario
          'accent': '#415A77',    // Azul grisáceo para acentos
          'neutral': '#0B1220',   // Texto fuerte / navbar oscuro
          'base-100': '#F7FAFC',  // Fondo base claro
          'base-200': '#EDF2F7',
          'base-300': '#E2E8F0',
          'info': '#3ABFF8',
          'success': '#22C55E',
          'warning': '#F59E0B',
          'error': '#EF4444',
      },
     }
    ]
  }
}