import { client } from '../sanity/sanityClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [profile, featuredProject, projects, techStack] = await Promise.all([
		client.fetch(
			'*[_type == "profile"][0]{title, subtitle, "description": description[0].children[0].text, "imageUrl": image.asset->url, "resumeUrl": resume.asset->url}'
		),
		client.fetch(
			'*[_type == "projects" && featured][0]{title, subtitle, "description": description[0].children[0].text, "images": images[]{"imageUrl": asset->url, "name":alt}, features, technologies, githubRepo, websiteUrl, featured, _createdAt, _updatedAt}'
		),
		client.fetch(
			'*[_type == "projects" && !featured]{title, subtitle, "description": description[0].children[0].text, "images": images[]{"imageUrl": asset->url, "name":alt}, features, technologies, githubRepo, websiteUrl, featured, _createdAt, _updatedAt}'
		),
		client.fetch(`*[_type == "techStack"][0]{
    images[]{
      "imageUrl": asset->url,
      "name": alt
    }
  }`)
	]);
	return {
		profile,
		featuredProject,
		projects,
		techStack
	};
};
