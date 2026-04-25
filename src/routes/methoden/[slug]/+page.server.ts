import { getMethode } from '$lib/data.remote';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		methoden: await getMethode(params.slug)
	};
};
