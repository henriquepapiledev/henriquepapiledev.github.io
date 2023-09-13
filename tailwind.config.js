/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}" , "index.html"],
  darkMode: 'media',
  theme: {
    screens: {
      sm: '300px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontSize: {
      s0: '0.875rem',
      s1: '1rem', 
      s2: '1.125rem', 
      s3: '1.625rem', 
      s4: '2rem', 
      s5: '3rem', 
      s6: '3.5rem', 
      icon: '1.25rem', 
      skill: '0.75rem',
    },
    colors: {
      'black': '#26232A',
      'light-black': '#918E93',
      'black-dark': '#7E8182',
      'white-bg': '#FBFBFD',
      'purple-bg': '#f3eeff',
      'white': '#F1EEF3',
      'purple-btn': '#4E41A8',
      'purple': '#6F5ED5',
      'light-purple': '#C2BAF2',
      'purple-medium': '#191523',
      'purple-semi': '#0D0E1B',    
      'purple-dark': '#120F1A',    
      'inherit': 'transparent',
    },
    borderWidth: {
      '1': '1px',
      '2': '2px',
      '18': '18px',
      '20': '20px',
    },
    borderRadius: {
      '0': '0',
      '4': '0.25rem',
      '8': '0.5rem',
      '20': '1.25rem',
      'full': '62.4375rem', 
    },
    extend: {
      flex: {
        '100': '1 1 100%',
        '200': '0 1 200px'
      },
      gridTemplateColumns: {
        'desk': '0.5fr 1.1fr 1fr',
        'mobile': '0fr 2fr 1fr',
      },
      gridTemplateRows: {
        'mobile': '1fr 1fr auto',

      },
      boxShadow: {
        'small': '0 5px 25px 0px rgba(0, 0, 0, 0.3)',
      },
      width: {
        '16': '1rem',
        '20': '1.25rem',
        '160': '10rem',
        '200': '12.5rem',
        '280': '17.5rem',
        '340': '21.25rem',
        '510': '31.875rem',
      },
      height: {
        '2': '0.125rem',
        '16': '1rem',
        '20': '1.25rem',
        '200': '12.5rem',
        '280': '17.5rem',
        '300': '18.75rem',
        '320': '20rem',
        '340': '21.25rem',
      },
      spacing: {
        '4': '0.25rem',
        '8': '0.5rem',
        '12': '0.75rem',
        '16': '1rem',
        '18': '1.125rem', 
        '24': '1.5rem', 
        '32': '2rem', 
        '40': '2.5rem', 
        '48': '3rem', 
        '60': '3.75rem',
        '80': '5rem', 
        '126': '7.875rem', 
        '180': '11.25rem', 
      },
      outlineWidth: {
        18: '1.125rem',
      },
      zIndex: {
        '1': '1',
        '100': '100',
      },
      translate: {
        '100': '-100%',
      }
    },
  },
  plugins: [],
}

