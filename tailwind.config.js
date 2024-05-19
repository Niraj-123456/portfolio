/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}',
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
