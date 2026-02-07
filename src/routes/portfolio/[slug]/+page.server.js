import { client } from '$lib/contentfulClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const portfolio = await client.getEntries({
		'fields.slug': params.slug,
		content_type: 'portfolioItem'
	});

	if (!portfolio.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return {
		portfolio: portfolio.items[0]
	};
}
