import { client } from '$lib/contentfulClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const portfolio = await client.getEntries({
		content_type: 'portfolioItem',
		order: ['-sys.createdAt']
	});

	if (!portfolio.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return {
		portfolio: portfolio.items
	};
}
