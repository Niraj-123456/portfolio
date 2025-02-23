export interface Project {
	features: Feature[];
	technologies: Technology[];
	githubRepo: string;
	websiteUrl: string;
	title: string;
	description: string;
	images: Image[];
	_createdAt: string;
	_updatedAt: string;
	subtitle: string;
}

export interface Feature {
	_type: string;
	description: string;
	_key: string;
	title: string;
}

export interface Technology {
	_type: string;
	description: string;
	_key: string;
	title: string;
}

export interface Image {
	imageUrl: string;
	name: string;
}
