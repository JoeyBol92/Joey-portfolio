<script>
	import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.methoden.fields.seoTitel} ©</title>
	<meta name="description" content={data.methoden.fields.seoMetabeschrijving} />
	<link rel="canonical" href="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="{data.methoden.fields.seoTitel} ©" />
	<meta property="og:url" content="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta property="og:image" content={data.methoden.fields.imageMethode.fields.file.url} />
	<meta property="og:image:alt" content={data.methoden.fields.imageMethode.fields.description} />
	<meta property="og:type" content="WebPage" />
	<meta property="og:description" content={data.methoden.fields.seoMetabeschrijving} />
	<meta property="og:locale" content="nl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{data.methoden.fields.seoTitel} ©" />
	<meta name="twitter:url" content="https://jojobee.nl/methoden/{data.methoden.fields.slug}/" />
	<meta name="twitter:description" content={data.methoden.fields.seoMetabeschrijving} />
	<meta name="twitter:image" content={data.methoden.fields.imageMethode.fields.file.url} />
	<meta name="twitter:image:alt" content={data.methoden.fields.imageMethode.fields.description} />
</svelte:head>

<!-- Hero / intro -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<a href="/methoden/" class="link-arrow" style="margin-bottom: 32px; display: inline-flex"
			>← Alle methoden</a
		>
		<div style="display: flex; align-items: center; gap: 16px; margin: 24px 0 16px">
			<img
				src={data.methoden.fields.imageMethode.fields.file.url}
				alt={data.methoden.fields.imageMethode.fields.description}
				style="height: 44px; width: auto"
			/>
			<div class="eyebrow" style="margin-bottom: 0">{@html data.methoden.fields.titelMethode}</div>
		</div>
		<h1 style="max-width: 680px; margin-bottom: 28px">{@html data.methoden.fields.titelMethode}</h1>
		<div class="rich-text" style="max-width: 680px">
			{@html documentToHtmlString(data.methoden.fields.beschrijving)}
		</div>
	</div>
</section>

<!-- Eigenschappen + Technieken -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container g-2" style="gap: 64px">
		<div>
			<div class="rule-header">
				<span class="rule-header__label">Eigenschappen</span>
				<div class="rule-header__line"></div>
			</div>
			<div style="display: flex; flex-direction: column; gap: 12px">
				{#each data.methoden.fields.eigenschappen as eigenschap}
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
		<div>
			<div class="rule-header">
				<span class="rule-header__label">Technieken</span>
				<div class="rule-header__line"></div>
			</div>
			<div style="display: flex; flex-wrap: wrap; gap: 8px">
				{#each data.methoden.fields.technieken as techniek}
					<span class="tag">{@html techniek}</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Het proces -->
<section
	style="padding: 60px 0; border-bottom: 1px solid var(--color-border); background: var(--color-bg-sub)"
>
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">Het proces</span>
			<div class="rule-header__line"></div>
		</div>
		{#each data.methoden.fields.proces.flow as stap}
			<div
				style="display: flex; gap: 32px; padding: 28px 0; border-bottom: 1px solid var(--color-border)"
			>
				<div
					style="font-family: var(--font-display); font-size: 11px; letter-spacing: 2.5px; color: var(--color-accent); font-weight: 700; min-width: 32px; padding-top: 4px"
				>
					{String(stap.number).padStart(2, '0')}
				</div>
				<div>
					<h3 style="margin-bottom: 8px">{@html stap.titel}</h3>
					<p style="margin: 0">{@html stap.description}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Voordelen -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">Voordelen</span>
			<div class="rule-header__line"></div>
		</div>
		<div class="g-2 voordelen-grid" style="gap: 16px 48px">
			{#each data.methoden.fields.voordelen as voordeel}
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
					<span>{@html voordeel}</span>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="contact-band">
	<div class="container g-cta" style="padding-block: 68px">
		<div>
			<div
				style="font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: var(--color-accent); font-weight: 700; margin-bottom: 20px"
			>
				Aan de slag
			</div>
			<h2
				style="color: #fff; font-size: clamp(32px, 4vw, 44px); letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 16px"
			>
				Interesse in<br />deze aanpak?
			</h2>
			<p style="color: rgba(255,255,255,0.5)">Neem contact op en ik kijk graag met je mee.</p>
		</div>
		<div style="display: flex; flex-direction: column; gap: 12px">
			<a href="mailto:jlwbol92@gmail.com" class="contact-block">
				<div
					style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 5px"
				>
					Email
				</div>
				<div style="font-size: 14px; font-weight: 500">jlwbol92@gmail.com →</div>
			</a>
			<a href="/contact/" class="contact-block contact-block--accent">
				<div
					style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 5px"
				>
					Of direct
				</div>
				<div style="font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #fff">
					Plan een gesprek →
				</div>
			</a>
		</div>
	</div>
</section>
