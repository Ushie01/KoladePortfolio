import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SpaceGrotesk"', 'sans-serif'], 
      },
      colors: {
        lightGray: '#2C2C2C',
        lightPurple: '#343141'
      }
    },
  },
  plugins: [],
}
export default config
