import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          background: 'hsl(var(--background))',
          background_white: 'hsl(var(--background_white))',
          primary: 'hsl(var(--primary))',
          textStrong: 'hsl(var(--textStrong))',
          textWeak: 'hsl(var(--textWeak))',
          strokeStrong: 'hsl(var(--strokeStrong))',
          strokeWeak: 'hsl(var(--strokeWeak))',
          fill: 'hsl(var(--fill))',
          bgRaised: 'rgba(var(--bgRaised))',
          bgOverlay: 'rgba(var(--bgOverlay))',
        },

        system: {
          error: {
            primary: 'rgba(var(--errorPrimary))',
            fill: 'rgba(var(--errorFill))',
            strokeStrong: 'rgba(var(--errorStrokeStrong))',
          },
          warning: {
            primary: 'rgba(var(--warningPrimary))',
            fill: 'rgba(var(--warningFill))',
            strokeStrong: 'rgba(var(--warningStrokeStrong))',
          },
          success: {
            primary: 'rgba(var(--successPrimary))',
            fill: 'rgba(var(--successFill))',
            strokeStrong: 'rgba(var(--successStrokeStrong))',
          },
          special: {
            primary: 'rgba(var(--specialPrimary))',
            fill: 'rgba(var(--specialFill))',
            strokeStrong: 'rgba(var(--specialStrokeStrong))',
          },
        },
      },
    },

    boxShadow: {
      raised: 'var(--raised)',
      overlay: 'var(--overlay)',
    },
  },
  plugins: [],
};
export default config;
