// Contentful asset types
export interface ContentfulImageDetails {
	width: number;
	height: number;
}

export interface ContentfulAssetFile {
	url: string;
	details: {
		image: ContentfulImageDetails;
	};
}

export interface ContentfulAsset {
	fields: {
		title: string;
		description: string;
		file: ContentfulAssetFile;
	};
}

// Base entry wrapper
export interface ContentfulEntry<T> {
	fields: T;
	sys: {
		id: string;
		createdAt: string;
		updatedAt: string;
	};
}

// Portfolio
export interface PortfolioItemFields {
	slug: string;
	title_portfolio: string;
	seoMetabeschrijving: string;
	logo: ContentfulAsset;
}

export type PortfolioItem = ContentfulEntry<PortfolioItemFields>;

// Methoden
export interface MethodenFields {
	slug: string;
	[key: string]: unknown;
}

export type Methode = ContentfulEntry<MethodenFields>;
