import { getPortfolioItems } from '$lib/data.remote';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		portfolio: await getPortfolioItems()
	};
};
