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
            grayMedium: '#828FA3',
            grayLight: '#F4F7FD',
            lines: '#3E3F4E',
            linesLight: '#E4EBFA',
            transparent: 'transparent',
        },
        fontFamily: {
            body: '"Plus Jakarta Sans", Roboto, sans-serif',
        },
        fontSize: {
            headingXXL: '1.5rem',
            headingXL: '1.25rem',
            headingL: '1.125rem',
            headingM: ['0.9375rem', '1.27'],
            headingS: ['0.75rem', { letterSpacing: '0.12em' }],
            bodyL: '0.8125rem',
            bodyM: '0.75rem',
        },
        lineHeight: {
            l: '1.25',
            xl: '1.8',
        },
        backgroundPosition: {
            middleRight: 'right .7em top 50%',
        },
        extend: {
            spacing: {
                41: '164px',
                46: '11.625rem',
                50: '12.5rem',
                59: '14.75rem',
                65: '16.25rem',
                69: '17.25rem',
                75: '18.75rem',
                86: '21.5rem',
                120: '30rem',
            },
            boxShadow: {
                custom: '0 10px 20px 0 rgba(54, 78, 126, 0.25)',
            },
            content: {
                link: 'url("/src/assets/icon-chevron-down.svg")',
            },
            backgroundImage: {
                chevron: 'url("/src/assets/icon-chevron-down.svg")',
            },
        },
    },
    plugins: [],
};
