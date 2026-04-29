<script>
	/** @type {{data: any}} */
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio - JojoBee ©</title>
	<meta
		name="description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="Portfolio - JojoBee ©" />
	<meta property="og:url" content="https://jojobee.nl/portfolio/" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta
		property="og:description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta property="og:locale" content="nl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Portfolio - JojoBee ©" />
	<meta name="twitter:url" content="https://jojobee.nl/portfolio/" />
	<meta
		name="twitter:description"
		content="Benieuwd wat ik zoal heb gedaan qua werk? Neem een kijkje in mijn portfolio!"
	/>
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />
</svelte:head>

<!-- Page header -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">Portfolio</span>
			<div class="rule-header__line"></div>
		</div>
		<div style="max-width: 600px">
			<h1 style="margin-bottom: 20px">Mijn bijdragen</h1>
			<p>
				Een overzicht van projecten waar ik aan heb gewerkt. Van WordPress websites tot moderne
				headless applicaties.
			</p>
		</div>
	</div>
</section>

<!-- Portfolio grid -->
<section
	style="padding: 60px 0; border-bottom: 1px solid var(--color-border); background: var(--color-bg-sub)"
>
	<div class="container">
		<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px">
			{#each data.portfolio as item}
				<a
					href="/portfolio/{item.fields.slug}/"
					class="portfolio-card"
					aria-label="Bekijk details {item.fields.title_portfolio}"
				>
					<div class="portfolio-card-image">
						<img
							src={item.fields.logo.fields.file.url}
							alt={item.fields.logo.fields.description}
							style="max-height: 50px; max-width: 180px; object-fit: contain"
							width={item.fields.logo.fields.file.details.image.width}
							height={item.fields.logo.fields.file.details.image.height}
						/>
						<div class="portfolio-card-overlay">
							<span style="color: #fff; font-weight: 700; font-size: 14px">Bekijk project →</span>
						</div>
					</div>
					<div
						style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center"
					>
						<div>
							<div class="portfolio-tag">{item.fields.categorie}</div>
							<div
								style="font-family: var(--font-display); font-size: 15px; font-weight: 700; margin-top: 2px"
							>
								{@html item.fields.title_portfolio}
							</div>
						</div>
						<span style="font-size: 17px; color: var(--color-accent)">→</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="contact-band">
	<div
		class="container"
		style="padding-block: 68px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center"
	>
		<div>
			<div
				style="font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: var(--color-accent); font-weight: 700; margin-bottom: 20px"
			>
				Volgende project
			</div>
			<h2
				style="color: #fff; font-size: clamp(32px, 4vw, 44px); letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 16px"
			>
				Jouw project<br />hier?
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
				<div
					style="font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #fff"
				>
					Plan een gesprek →
				</div>
			</a>
		</div>
	</div>
</section>
