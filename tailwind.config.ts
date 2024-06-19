import type { Config } from 'tailwindcss'

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
        'lava-demo': "url('/static/images/projects/lava-demo.png')",
        'mydroplist-web': "url('/static/images/projects/mydroplist-web.png')",
        'mydroplist-mobile': "url('/static/images/projects/mydroplist-mobile.png')",
        'connect-four': "url('/static/images/projects/connect-four.png')",
        'cbit-marketing': "url('/static/images/projects/cbit-marketing.gif')",

      },
      colors:{
        'portfolio-orange': '#FF8551'
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
