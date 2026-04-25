import { error } from '@sveltejs/kit';
import { client } from './contentfulClient';
import type { PortfolioItem, Methode } from './types';

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
	const result = await client.getEntries({
		content_type: 'portfolioItem',
		order: ['-sys.createdAt']
	});

	if (!result.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return result.items as unknown as PortfolioItem[];
}

export async function getPortfolioItem(slug: string): Promise<PortfolioItem> {
	const result = await client.getEntries({
		content_type: 'portfolioItem',
		'fields.slug': slug
	});

	if (!result.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return result.items[0] as unknown as PortfolioItem;
}

export async function getMethode(slug: string): Promise<Methode> {
	const result = await client.getEntries({
		content_type: 'methoden',
		'fields.slug': slug
	});

	if (!result.items.length) {
		error(404, 'Pagina niet gevonden');
	}

	return result.items[0] as unknown as Methode;
}
