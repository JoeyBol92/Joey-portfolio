import { client } from '$lib/contentfulClient';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const methoden = await client.getEntries({
		'fields.slug': params.slug,
		content_type: 'methoden'
	});

	if (!methoden.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return {
		methoden: methoden.items[0]
	};
}
