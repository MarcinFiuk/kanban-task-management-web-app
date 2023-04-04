/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            mainPurple: '#635FC7',
            mainPureLight: '#A8A4FF',
            red: '#EA5555',
            redLight: '#FF9898',
            black: '#000112',
            veryDarkGrey: '#20212C',
            darkGrey: '#2B2C37',
            mediumGrey: '#828FA3',
            grayLight: '#F4F7FD',
            lines: '#3E3F4E',
            linesLight: '#E4EBFA',
        },
        fontFamily: {
            body: '"Plus Jakarta Sans", Roboto, sans-serif',
        },
        fontSize: {
            headingXXL: '1.5rem',
            headingXL: '1.25rem',
            headingL: '1.125rem',
            headingM: ['0.9375rem', '1.27'],
            headingS: ['0.75rem', { letterSpacing: '0.15em' }],
            bodyL: '0.8125rem',
            bodyM: '0.75rem',
        },
        lineHeight: {
            l: '1.25',
        },
        gridTemplateColumns: {
            headerMobile: '24px 1fr 68px',
            headerTablet: '260px 1fr 193px',
            headerDesktop: '300px 1fr 193px',
        },
        extend: {
            spacing: {
                41: '164px',
            },
        },
    },
    plugins: [],
};
