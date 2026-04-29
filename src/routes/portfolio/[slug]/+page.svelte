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
		<div
			style="display: grid; grid-template-columns: 7fr 5fr; gap: 64px; align-items: start; margin-top: 32px"
		>
			<div>
				<div class="eyebrow">{@html data.portfolio.fields.categorie}</div>
				<h1 style="margin-bottom: 24px">{@html data.portfolio.fields.title_portfolio}</h1>
				<div
					style="display: flex; gap: 36px; padding-top: 24px; border-top: 1px solid var(--color-border)"
				>
					<div>
						<div
							style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--color-fg-muted); font-weight: 700; margin-bottom: 6px"
						>
							Klant
						</div>
						<div style="font-size: 15px; color: var(--color-fg); font-weight: 600">
							{@html data.portfolio.fields.client}
						</div>
					</div>
					<div>
						<div
							style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--color-fg-muted); font-weight: 700; margin-bottom: 6px"
						>
							Datum
						</div>
						<div style="font-size: 15px; color: var(--color-fg); font-weight: 600">
							{@html data.portfolio.fields.date}
						</div>
					</div>
				</div>
			</div>
			<div style="display: flex; flex-direction: column; gap: 24px; padding-top: 8px">
				{#if data.portfolio.fields.logo}
					<div
						style="background: var(--color-bg-sub); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: 40px; display: flex; align-items: center; justify-content: center; aspect-ratio: 16/9"
					>
						<img
							src={data.portfolio.fields.logo.fields.file.url}
							alt={data.portfolio.fields.logo.fields.description}
							style="max-height: 64px; max-width: 220px; object-fit: contain"
						/>
					</div>
				{/if}
				<div>
					<div
						style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: var(--color-fg-muted); font-weight: 700; margin-bottom: 10px"
					>
						Technieken
					</div>
					<div style="display: flex; flex-wrap: wrap; gap: 8px">
						{#each data.portfolio.fields.technieken as techniek}
							<span class="tag">{@html techniek}</span>
						{/each}
					</div>
				</div>
				<a
					href={data.portfolio.fields.websiteKlant}
					target="_blank"
					rel="nofollow"
					class="btn btn-primary"
					style="align-self: flex-start"
				>
					Bekijk live website →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Projectomschrijving + Eigenschappen -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container" style="display: grid; grid-template-columns: 7fr 5fr; gap: 80px">
		<div>
			<div class="rule-header">
				<span class="rule-header__label">Projectomschrijving</span>
				<div class="rule-header__line"></div>
			</div>
			<div style="line-height: 1.8; color: var(--color-fg-muted); font-size: 15px">
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
			<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px">
				{#each data.portfolio.fields.media as media}
					<img
						src={media.fields.file.url}
						alt={media.fields.description || media.fields.title}
						style="width: 100%; border-radius: var(--radius-card); aspect-ratio: 16/9; object-fit: cover; object-position: top"
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- CTA -->
<section class="contact-band">
	<div
		class="container"
		style="padding-block: 68px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center"
	>
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
