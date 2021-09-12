module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				gregular: ['"GraphikRegular"'],
				gmedium: ['"GraphikMedium"'],
			},
		},
		colors: {
			white: '#FFFFFF',
			purple: {
				DEFAULT: '#7344C0',
				dark: '#592F9D',
			},
		},
		borderRadius: {
			DEFAULT: '3px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
