<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.portfolio.fields.seoTitel} ©</title>
	<meta name="description" content={data.portfolio.fields.seoMetabeschrijving} />
	<link rel="canonical" href="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="{data.portfolio.fields.seoTitel} ©" />
	<meta property="og:url" content="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta
		property="og:image"
		content={data.portfolio.fields.featuredImagePortfolio.fields.file.url}
	/>
	<meta
		property="og:image:alt"
		content={data.portfolio.fields.featuredImagePortfolio.fields.description}
	/>
	<meta property="og:type" content="WebPage" />
	<meta property="og:description" content={data.portfolio.fields.seoMetabeschrijving} />
	<meta property="og:locale" content="nl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.portfolio.fields.seoTitel} ©" />
	<meta name="twitter:url" content="https://jojobee.nl/portfolio/{data.portfolio.fields.slug}/" />
	<meta name="twitter:description" content={data.portfolio.fields.seoMetabeschrijving} />
	<meta
		name="twitter:image"
		content={data.portfolio.fields.featuredImagePortfolio.fields.file.url}
	/>
	<meta
		name="twitter:image:alt"
		content={data.portfolio.fields.featuredImagePortfolio.fields.description}
	/>
</svelte:head>

<!-- Hero header -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<a href="/portfolio/" class="link-arrow" style="margin-bottom: 32px; display: inline-flex"
			>← Terug naar portfolio</a
		>
		<div class="g-editorial" style="align-items: start; margin-top: 32px">
			<!-- Left: category badge + title + description + eigenschappen -->
			<div style="display: flex; flex-direction: column; gap: 32px">
				<div>
					<span class="badge" style="margin-bottom: 20px">{@html data.portfolio.fields.categorie}</span>
					<h1>{@html data.portfolio.fields.title_portfolio}</h1>
				</div>
				<div>
					<div class="rule-header">
						<span class="rule-header__label">Projectomschrijving</span>
						<div class="rule-header__line"></div>
					</div>
					<div class="rich-text">
						{@html documentToHtmlString(data.portfolio.fields.projectBeschrijving)}
					</div>
				</div>
				<div>
					<div class="rule-header">
						<span class="rule-header__label">Eigenschappen</span>
						<div class="rule-header__line"></div>
					</div>
					<div style="display: flex; flex-direction: column; gap: 12px">
						{#each data.portfolio.fields.projectOverview as eigenschap}
							<div class="check-item">
								<div class="check-item__dot">
									<svg
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										stroke="white"
										stroke-width="3"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path d="M20 6 9 17l-5-5" />
									</svg>
								</div>
								<span>{@html eigenschap}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Right: info card -->
			<div class="info-card" style="display: flex; flex-direction: column; gap: 12px">
				<div style="background: var(--color-bg-sub); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 28px">
					{#if data.portfolio.fields.logo}
						<div style="background: var(--color-bg); border-radius: 10px; padding: 28px; display: flex; align-items: center; justify-content: center; margin-bottom: 4px; min-height: 120px">
							<img
								src={data.portfolio.fields.logo.fields.file.url}
								alt={data.portfolio.fields.logo.fields.description}
								style="max-height: 52px; max-width: 200px; object-fit: contain"
								fetchpriority="high"
							/>
						</div>
					{/if}
					<div class="info-row">
						<span class="info-row__label">Klant</span>
						<span class="info-row__value">{@html data.portfolio.fields.client}</span>
					</div>
					<div class="info-row">
						<span class="info-row__label">Datum</span>
						<span class="info-row__value">{@html data.portfolio.fields.date}</span>
					</div>
					<div class="info-row">
						<span class="info-row__label">Type</span>
						<span class="info-row__value">{@html data.portfolio.fields.categorie}</span>
					</div>
					{#if data.portfolio.fields.technieken?.length}
						<div class="info-row" style="align-items: flex-start">
							<span class="info-row__label" style="padding-top: 3px">Stack</span>
							<div style="display: flex; flex-wrap: wrap; gap: 6px; justify-content: flex-end; max-width: 200px">
								{#each data.portfolio.fields.technieken as techniek}
									<span class="tag">{@html techniek}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
				<a
					href={data.portfolio.fields.websiteKlant}
					target="_blank"
					rel="nofollow"
					class="btn btn-primary"
				>
					Bekijk live website →
				</a>
				<a href="/contact/" class="btn btn-secondary">
					Vergelijkbaar project? →
				</a>
			</div>
		</div>
	</div>
</section>


<!-- Media gallery -->
{#if data.portfolio.fields.media}
	<section
		style="padding: 60px 0; border-bottom: 1px solid var(--color-border); background: var(--color-bg-sub)"
	>
		<div class="container">
			<div class="rule-header">
				<span class="rule-header__label">Afbeeldingen</span>
				<div class="rule-header__line"></div>
			</div>
			<div class="g-2" style="gap: 24px">
				{#each data.portfolio.fields.media as media}
					<img
						src={media.fields.file.url}
						alt={media.fields.description || media.fields.title}
						width={media.fields.file.details?.image?.width}
						height={media.fields.file.details?.image?.height}
						loading="lazy"
						style="width: 100%; border-radius: var(--radius-card); aspect-ratio: 16/9; object-fit: cover; object-position: top"
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- CTA -->
<section class="contact-band">
	<div class="g-cta container" style="padding-block: 68px">
		<div>
			<div
				style="font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: var(--color-accent); font-weight: 700; margin-bottom: 20px"
			>
				Live resultaat
			</div>
			<h2
				style="color: #fff; font-size: clamp(32px, 4vw, 44px); letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 16px"
			>
				Bekijk het<br />eindresultaat
			</h2>
			<p style="color: rgba(255,255,255,0.5)">
				Neem een kijkje op de live website van dit project.
			</p>
		</div>
		<div style="display: flex; flex-direction: column; gap: 12px">
			<a
				href={data.portfolio.fields.websiteKlant}
				target="_blank"
				rel="nofollow"
				class="contact-block contact-block--accent"
			>
				<div
					style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 5px"
				>
					Website
				</div>
				<div
					style="font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #fff"
				>
					Bezoek {@html data.portfolio.fields.websiteKlant} →
				</div>
			</a>
			<a href="/portfolio/" class="contact-block">
				<div
					style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 5px"
				>
					Meer projecten
				</div>
				<div style="font-size: 14px; font-weight: 500">Terug naar portfolio →</div>
			</a>
		</div>
	</div>
</section>
