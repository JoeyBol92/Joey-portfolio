import { client } from '$lib/contentfulClient';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const methoden = await client.getEntries({
		'fields.slug': params.slug,
		content_type: 'methoden'
	});
	console.log(params.slug);

	if (!methoden.items.length) {
		throw error(404, 'Pagina niet gevonden');
	}

	return {
		methoden: methoden.items[0]
	};
}
