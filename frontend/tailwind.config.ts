import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-border': '#D9D9D9'
      },
      boxShadow: {
        'primary-shadow': '2px 2px 3px 0px rgba(0, 0, 0, 0.25)',
        'secondary-shadow': '1px 1px 3px 0px rgba(0, 0, 0, 0.25)',
        'tertiary-shadow': '0px 1px 7px 0px rgba(149, 149, 149, 0.25)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
