export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
      },
      colors: {
        accent: {
          50: '#eef5ff',
          100: '#dbe7ff',
          500: '#2563eb'
        }
      }
    }
  },
  plugins: [],
};
