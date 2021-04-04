let makeShadow = (name, rgb) => {
    let obj = {};

    obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`;
    obj[name + '-xs'] = `0 0 0 1px rgba(${rgb}, 0.05)`;
    obj[name + '-sm'] = `0 1px 2px 0 rgba(${rgb}, 0.05)`;
    obj[name] = `0 1px 3px 0 rgba(${rgb}, 0.1), 0 1px 2px 0 rgba(${rgb}, 0.06)`;
    obj[name + '-md'] = `0 4px 6px -1px rgba(${rgb}, 0.1), 0 2px 4px -1px rgba(${rgb}, 0.06)`;
    obj[name + '-lg'] = `0 10px 15px -3px rgba(${rgb}, 0.1), 0 4px 6px -2px rgba(${rgb}, 0.05)`;
    obj[name + '-xl'] = `0 20px 25px -5px rgba(${rgb}, 0.1), 0 10px 10px -5px rgba(${rgb}, 0.04)`;
    obj[name + '-2xl'] = `0 25px 50px -12px rgba(${rgb}, 0.25)`;
    obj[name + '-inner'] = `inset 0 2px 4px 0 rgba(${rgb}, 0.06)`;
    return obj;
};

module.exports = {
    purge: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                ...makeShadow('cool-gray', '71, 85, 104'),
                ...makeShadow('gray', '75, 85, 98'),
                ...makeShadow('red', '223, 39, 44'),
                ...makeShadow('orange', '207, 57, 24'),
                ...makeShadow('yellow', '158, 88, 28'),
                ...makeShadow('green', '16, 122, 87'),
                ...makeShadow('teal', '13, 116, 128'),
                ...makeShadow('blue', '29, 100, 236'),
                ...makeShadow('indigo', '87, 81, 230'),
                ...makeShadow('purple', '125, 59, 236'),
                ...makeShadow('pink', '213, 34, 105')
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-90deg)' },
                    '50%': { transform: 'rotate(90deg)' }
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                fadeIn: 'fadeIn 2s ease-in forwards'
            },
            height: {
                '10v': '10vh',
                '20v': '20vh',
                '30v': '30vh',
                '40v': '40vh',
                '50v': '50vh',
                '60v': '60vh',
                '70v': '70vh',
                '80v': '80vh',
                '90v': '90vh',
                '100v': '100vh'
            },
            width: {
                '10v': '10vw',
                '20v': '20vw',
                '30v': '30vw',
                '40v': '40vw',
                '50v': '50vw',
                '60v': '60vw',
                '70v': '70vw',
                '80v': '80vw',
                '90v': '90vw',
                '100v': '100vw'
            }
        }
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            textDecoration: ['focus-visible'],
            textFill: ['autofill'],
            shadowFill: ['autofill'],
            opacity: ['disabled']
        }
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('tailwindcss-autofill'),
        require('tailwindcss-text-fill'),
        require('tailwindcss-shadow-fill')
    ]
};
