import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
        ubuntu: ['var(--font-ubuntu)', ...fontFamily.sans],
      },
      minWidth: {
        '40': '40rem',
      },
      colors: {
        'primary': '#34CB79',
        'secondary': '#2FB86E',
        'tertiary': '#E1FAEC',
        'title': '#322153',
        'text': '#6C6C80',
      },
      animation: {
        fade: 'fadeIn 0.3s ease-in',
      },
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '0.95' },
        },
      }),
    },
  },
  plugins: [],
}
export default config
