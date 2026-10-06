export type Project = {
	number: string;
	type: string;
	title: string;
	description: string;
	images: string[];
	tags: string[];
	repo: string;
	live?: string;
};

export const navigation = [
	{ href: '#home', label: 'Home' },
	{ href: '#projects', label: 'Work' },
	{ href: '#contact', label: 'Contact' }
] as const;

export const technologies = ['React', 'SvelteKit', 'Node.js', 'TypeScript', 'Tailwind'] as const;

export const projects: Project[] = [
	{
		number: '01',
		type: 'E-commerce platform',
		title: 'Fake Store',
		description:
			'A complete shopping experience with cart management, Stripe payments, and an analytics-ready admin dashboard.',
		images: [
			'/images/projects/generated/fake-store.svg',
			'/images/projects/fake-store/fake-store2.png',
			'/images/projects/fake-store/fake-store-admin1.png'
		],
		tags: ['React', 'Redux', 'Stripe'],
		repo: 'https://github.com/Niraj-123456/fake-store'
	},
	{
		number: '02',
		type: 'Mobile-first product',
		title: 'Recipe Finder',
		description:
			'A calm, mobile-first way for food lovers to discover recipes, save favorites, and get cooking faster.',
		images: ['/images/projects/generated/recipe-finder.svg', '/images/projects/foodapp.png'],
		tags: ['SvelteKit', 'MealDB API', 'Tailwind'],
		live: 'https://foodapp-mobile.vercel.app/',
		repo: 'https://github.com/Niraj-123456/foodapp'
	},
	{
		number: '03',
		type: 'Real-time communication',
		title: 'Chat Application',
		description:
			'Real-time messaging with multimedia sharing and secure user management, powered by Firebase.',
		images: ['/images/projects/generated/chat-app.svg', '/images/projects/chat-app.jpg'],
		tags: ['React', 'Firebase', 'Shadcn UI'],
		repo: 'https://github.com/Niraj-123456/messenger-app'
	}
];

export const contactEndpoint = 'https://formspree.io/f/xkodvjye';
