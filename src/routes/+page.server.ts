import { client } from '../sanity/sanityClient';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		profile: await client.fetch(
			'*[_type == "profile"][0]{title, subtitle, "description": description[0].children[0].text, "imageUrl": image.asset->url, "resumeUrl": resume.asset->url}'
		)
	};
};
