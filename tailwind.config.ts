import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0a0a0a',
          alt: '#0f0f0f',
        },
        surface: {
          DEFAULT: '#141414',
          2: '#1a1a1a',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover: 'rgba(184,245,82,0.3)',
        },
        accent: {
          DEFAULT: '#b8f552',
          dim: 'rgba(184,245,82,0.1)',
          mid: 'rgba(184,245,82,0.28)',
        },
        text: {
          DEFAULT: '#efefef',
          dim: '#8a8a8a',
          muted: '#4a4a4a',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        card: '18px',
      },
      animation: {
        'orb-float': 'orbFloat 14s ease-in-out infinite',
        'orb-float-reverse': 'orbFloat 18s ease-in-out infinite reverse',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'shimmer': 'shimmerLine 2s linear infinite',
        'winner-pulse': 'winnerPulse 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease both',
        'scroll-pulse': 'scrollPulse 2.2s ease-in-out infinite',
      },
      keyframes: {
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(24px, -18px)' },
          '66%': { transform: 'translate(-16px, 16px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.6)' },
        },
        shimmerLine: {
          '0%': { backgroundPosition: '0% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        winnerPulse: {
          '0%, 100%': { boxShadow: '0 0 12px rgba(255,215,0,0.15)' },
          '50%': { boxShadow: '0 0 22px rgba(255,215,0,0.35)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.3', transform: 'scaleY(0.6)' },
        },
      },
    },
  },
  plugins: [],
}
export default config