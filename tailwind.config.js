/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      mobile_port: "480px",
      mobile_land: "768px",
      tablet: "992px",
      desktop: "1280px",
      desktop_lg: "1440px",
    },

    container: {
      center: true,
      screens: {
        mobile_port: "100%",
        mobile_land: "100%",
        tablet: "992px",
        desktop: "1280px",
      },
    },

    maxWidth: {
      xxsmall: "20rem", // 320px
      xsmall: "25rem", // 400px
      small: "30rem", // 480px
      medium: "35rem", // 560px
      large: "48rem", // 768px
      xlarge: "64rem", // 1024px
      xxlarge: "80rem", // 1280px
      full: "100%",
    },

    boxShadow: {
      xxsmall: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      xsmall: "0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)",
      small: "0px 4px 8px -2px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.06)",
      medium: "0px 12px 16px -4px rgba(0, 0, 0, 0.08), 0px 4px 6px -2px rgba(0, 0, 0, 0.03)",
      large: "0px 20px 24px -4px rgba(0, 0, 0, 0.08), 0px 8px 8px -4px rgba(0, 0, 0, 0.03)",
      xlarge: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
      xxlarge: "0px 32px 64px -12px rgba(0, 0, 0, 0.14)",
    },

    fontFamily: {
      display: ['Playfair Display', 'serif'],
      sans: ['Roboto', 'sans-serif'],
    },

    fontSize: {
      tiny: ['0.75rem', { lineHeight: '150%' }],
      small: ['0.875rem', { lineHeight: '150%' }],
      regular: ['1rem', { lineHeight: '150%' }],
      medium: ['1.125rem', { lineHeight: '150%' }],
      large: ['1.25rem', { lineHeight: '150%' }],
      h6: ['1rem', { lineHeight: '150%' }],
      h5: ['1.25rem', { lineHeight: '140%' }],
      h4: ['1.5rem', { lineHeight: '140%' }],
      h3: ['2rem', { lineHeight: '130%' }],
      h2: ['2.5rem', { lineHeight: '120%' }],
      h1: ['3.5rem', { lineHeight: '120%' }],
    },

    extend: {
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },

      spacing: {
         tiny: '0.125rem',    // 0.125rem
         xxs: '0.25rem',  // 0.25rem
         xs: '0.5rem',    // 0.5rem
         sm: '1rem',       // 1rem
         md: '2rem',      // 2rem
         lg: '3rem',       // 3rem
         xlg: '4rem',      // 4rem
         xxlg: '5rem',     // 5rem
         huge: '6rem',        // 6rem
         xhuge: '8rem',       // 8rem
         xxhuge: '12rem',     // 12rem
         custom1: '1.5rem',   // 1.5rem
      },

      fontSize: {
        'heading-h1-mobile': ['2.5rem', { lineHeight: '120%' }],
        'heading-h2-mobile': ['2rem', { lineHeight: '120%' }],
        'heading-h3-mobile': ['1.5rem', { lineHeight: '140%' }],
        'heading-h4-mobile': ['1.25rem', { lineHeight: '140%' }],
        'heading-h5-mobile': ['1.125rem', { lineHeight: '140%' }],
        'heading-h6-mobile': ['1rem', { lineHeight: '150%' }],
      },

      colors: {
        brand: {
          black: "#000000",
          white: "#ffffff",
        },
        neutral: {
          DEFAULT: "#666666",
          black: "#000000",
          white: "#ffffff",
          lightest: "#eeeeee",
          lighter: "#cccccc",
          light: "#aaaaaa",
          dark: "#444444",
          darker: "#222222",
          darkest: "#111111",
        },
        system: {
          "success-green": "#027a48",
          "success-green-light": "#ecfdf3",
          "error-red": "#b42318",
          "error-red-light": "#fef3f2",
        },
        background: {
          DEFAULT: "#ffffff", // bg-background, text-background, border-background,
          primary: "#ffffff", // bg-background-primary, text-background-primary, border-background-primary,
          secondary: "#eeeeee",
          tertiary: "#666666",
          alternative: "#000000",
          success: "#ecfdf3",
          error: "#fef3f2",
        },
        border: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#aaaaaa",
          tertiary: "#444444",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        text: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#aaaaaa",
          alternative: "#ffffff",
          success: "#027a48",
          error: "#b42318",
        },
        link: {
          DEFAULT: "#000000",
          primary: "#000000",
          secondary: "#666666",
          alternative: "#ffffff",
        },
      },

      typography: {
        DEFAULT: {
          css: {
            color: "#000000",
            lineHeight: "1.5",
            maxWidth: "100%",
            p: {
              marginTop: "0",
              marginBottom: "1rem",
            },
          },
        },
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0px" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0px" },
      },
      "loop-horizontally": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
      "loop-testimonials": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-135rem)" },
      },
      "loop-vertically": {
        from: { transform: "translateY(0)" },
        to: { transform: "translateY(-50%)" },
      },
      "marquee-horizontally": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      "marquee-top": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-50%)" },
      },
      "marquee-right": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(100%)" },
      },
      "marquee-bottom": {
        from: { transform: "translateX(-50%)" },
        to: { transform: "translateX(0%)" },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "loop-horizontally": "loop-horizontally 20s linear infinite",
      "loop-testimonials": "loop-testimonials 30s linear infinite",
      "loop-vertically": "loop-vertically 30s linear infinite",
      "marquee-horizontally": "marquee-top 30s linear infinite",
      "marquee-top": "marquee-top 50s linear infinite",
      "marquee-right": "marquee-right 25s linear infinite",
      "marquee-bottom": "marquee-bottom 50s linear infinite",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require('tailwindcss/plugin'),
    ({ addComponents }) => {
      const newComponents = {
        ".animate-disable": {
          animationName: "none",
          animationDuration: "0s",
          "--tw-enter-opacity": "initial",
          "--tw-enter-scale": "initial",
          "--tw-enter-rotate": "initial",
          "--tw-enter-translate-x": "initial",
          "--tw-enter-translate-y": "initial",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          scrollbarWidth: "none",
        },
        // Client-First core structure classes
        ".page-wrapper": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
        ".main-wrapper": {
          flex: "1 0 auto",
        },
        ".padding-global": {
          paddingLeft: "1rem",
          paddingRight: "1rem",
        },
        ".padding-section-small": {
          paddingTop: "3rem",
          paddingBottom: "3rem",
        },
        ".padding-section-medium": {
          paddingTop: "5rem",
          paddingBottom: "5rem",
        },
        ".padding-section-large": {
          paddingTop: "8rem",
          paddingBottom: "8rem",
        },
        ".container-small": {
          width: "100%",
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".container-medium": {
          width: "100%",
          maxWidth: "1140px",
          marginLeft: "auto",
          marginRight: "auto",
        },
        ".container-large": {
          width: "100%",
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
        },
      };
      addComponents(newComponents);
    },
    ({ addUtilities }) => {
      const newUtilities = {
        '.heading-style-h1': {
          '@apply font-display font-bold': {},
          'font-size': '3.5rem',
          'line-height': '120%',
          '@screen mobile_port': {
            'font-size': '2.5rem',
            'line-height': '120%',
          },
        },
        '.heading-style-h2': {
          '@apply font-display font-bold': {},
          'font-size': '2.5rem',
          'line-height': '120%',
          '@screen mobile_port': {
            'font-size': '2rem',
            'line-height': '120%',
          },
        },
        '.heading-style-h3': {
          '@apply font-display font-bold': {},
          'font-size': '2rem',
          'line-height': '130%',
          '@screen mobile_port': {
            'font-size': '1.5rem',
            'line-height': '140%',
          },
        },
        '.heading-style-h4': {
          '@apply font-display font-bold': {},
          'font-size': '1.5rem',
          'line-height': '140%',
          '@screen mobile_port': {
            'font-size': '1.25rem',
            'line-height': '140%',
          },
        },
        '.heading-style-h5': {
          '@apply font-display font-bold': {},
          'font-size': '1.25rem',
          'line-height': '140%',
          '@screen mobile_port': {
            'font-size': '1.125rem',
            'line-height': '140%',
          },
        },
        '.heading-style-h6': {
          '@apply font-display font-bold': {},
          'font-size': '1rem',
          'line-height': '150%',
          '@screen mobile_port': {
            'font-size': '1rem',
            'line-height': '150%',
          },
        },
        '.text-style-large': {
          '@apply font-sans': {},
          'font-size': '1.25rem',
          'line-height': '150%',
        },
        '.text-style-medium': {
          '@apply font-sans': {},
          'font-size': '1.125rem',
          'line-height': '150%',
        },
        '.text-style-regular': {
          '@apply font-sans': {},
          'font-size': '1rem',
          'line-height': '150%',
        },
        '.text-style-small': {
          '@apply font-sans': {},
          'font-size': '0.875rem',
          'line-height': '150%',
        },
        '.text-style-tiny': {
          '@apply font-sans': {},
          'font-size': '0.75rem',
          'line-height': '150%',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
      // text alignment utility
    ({ addUtilities }) => {
      const newUtilities = {
        '.text-align-left': {
          'text-align': 'left',
        },
        '.text-align-center': {
          'text-align': 'center',
        },
        '.text-align-right': {
          'text-align': 'right',
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
    // simplified padding utilities
    ({ addUtilities, theme })=> {
      const paddingDirections = {
        p: ['padding'],
        pt: ['padding-top'],
        pr: ['padding-right'],
        pb: ['padding-bottom'],
        pl: ['padding-left'],
        px: ['padding-left', 'padding-right'],
        py: ['padding-top', 'padding-bottom'],
      }

      const paddingSizes = theme('spacing')

      const paddingUtilities = Object.entries(paddingDirections).flatMap(
          ([directionKey, properties]) =>
              Object.entries(paddingSizes).map(([sizeKey, size]) => ({
                [`.padding-${directionKey}-${sizeKey}`]: Object.fromEntries(
                    properties.map(property => [property, size])
                ),
              }))
      )

      addUtilities(paddingUtilities, ['responsive'])
    },
  ],
}

