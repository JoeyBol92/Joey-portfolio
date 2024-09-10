import { client } from '$lib/contentfulClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const portfolio = await client.getEntries({
		'fields.slug': params.slug,
		content_type: 'portfolioItem'
	});
	console.log(params.slug);

	if (!portfolio.items.length) {
		throw error(404, 'Pagina niet gevonden');
	}

	return {
		portfolio: portfolio.items
	};
}
