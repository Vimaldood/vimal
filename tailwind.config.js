/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        border: 'hsl(var(--border))',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        glow: '0 28px 90px rgba(15, 23, 42, 0.12)',
      },
      fontFamily: {
        cabin: ['"Geist Variable"', 'sans-serif'],
        instrument: ['"Newsreader Variable"', 'serif'],
        inter: ['"Geist Variable"', 'sans-serif'],
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(15,23,42,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
