import { getPortfolioItem } from '$lib/data.remote';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		portfolio: await getPortfolioItem(params.slug)
	};
};
