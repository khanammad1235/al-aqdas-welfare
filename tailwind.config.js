/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        'xl': '12px',
        'lg': '8px',
        'md': '6px',
        'sm': '4px',
      },
      boxShadow: {
        soft:    '0 4px 20px -2px rgba(0,0,0,0.05)',
        md:      '0 4px 20px rgba(0,0,0,0.08)',
        lg:      '0 8px 40px rgba(0,0,0,0.10)',
        xl:      '0 16px 60px rgba(0,0,0,0.14)',
        glow:    '0 0 40px rgba(198,156,109,0.15)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-18px) scale(1.08)', opacity: '0.7' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(198,156,109,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(198,156,109,0.4)' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
        "ticker":         "ticker 25s linear infinite",
        "float":          "float 4s ease-in-out infinite",
        "slide-up":       "slide-up 0.6s ease-out forwards",
        "fade-in":        "fade-in 0.5s ease-out forwards",
        "scale-in":       "scale-in 0.4s ease-out forwards",
        "shimmer":        "shimmer 2s infinite",
        "bounce-subtle":  "bounce-subtle 2s ease-in-out infinite",
        "spin-slow":      "spin-slow 8s linear infinite",
        "glow":           "glow-pulse 2.5s ease-in-out infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#475569',
            lineHeight: '1.75',
          }
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}