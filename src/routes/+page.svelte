<svelte:head>
	<link rel="canonical" href="https://jojobee.nl" />
	<meta
		name="description"
		content="Hoi, ik ben Joey — enthousiaste webdeveloper uit Leiden. Van WordPress tot headless SvelteKit: ik bouw wat werkt."
	/>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="JojoBee: websites op maat © {new Date().getFullYear()}" />
	<meta property="og:url" content="https://jojobee.nl" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta
		property="og:description"
		content="Hoi, ik ben Joey — enthousiaste webdeveloper uit Leiden. Van WordPress tot headless SvelteKit: ik bouw wat werkt."
	/>
	<meta property="og:locale" content="nl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="JojoBee: websites op maat © {new Date().getFullYear()}" />
	<meta name="twitter:url" content="https://jojobee.nl" />
	<meta
		name="twitter:description"
		content="Hoi, ik ben Joey — enthousiaste webdeveloper uit Leiden. Van WordPress tot headless SvelteKit: ik bouw wat werkt."
	/>
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />
</svelte:head>

<!-- Hero -->
<section style="border-bottom: 1px solid var(--color-border)">
	<div class="container g-hero" style="min-height: 500px">
		<!-- Left: big display type -->
		<div class="hero-left">
			<h1 class="fade-up hero-heading">
				Welkom bij<br />
				<span style="-webkit-text-stroke: 3px var(--color-accent); color: transparent">JojoBee</span>
			</h1>
			<div class="fade-up fade-up-d2 hero-bottom" style="margin-top: 32px">
				<p>
					Hoi, ik ben Joey — enthousiaste webdeveloper uit Leiden. Van WordPress tot headless
					SvelteKit: ik bouw wat werkt.
				</p>
				<div style="display: flex; flex-direction: column; gap: 10px">
					<a href="/portfolio/" class="btn btn-primary">Bekijk mijn werk →</a>
					<a href="/methoden/" class="btn btn-secondary">Mijn methoden</a>
				</div>
			</div>
		</div>

		<!-- Right: circular hero -->
		<div class="hero-right">
			<div class="fade-up fade-up-d2 hero-circle">
				<div
					class="animate-float"
					style="position: absolute; inset: 0; border-radius: 50%; border: 2px dashed var(--color-accent); opacity: 0.3"
				></div>
				<div
					style="position: absolute; inset: 18px; border-radius: 50%; border: 2px dashed var(--color-accent-border); opacity: 0.5"
				></div>
				<div
					style="position: absolute; inset: 32px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-border)); padding: 4px; box-shadow: var(--shadow-accent)"
				>
					<div style="border-radius: 50%; overflow: hidden; width: 100%; height: 100%">
						<enhanced:img
							src="/static/Joey-and-Emilio.jpg"
							alt="Joey en Emilio"
							style="width: 100%; height: 100%; object-fit: cover; object-position: center top"
						/>
					</div>
				</div>
				<div
					class="fade-up fade-up-d4"
					style="position: absolute; top: 22%; right: -18px; background: #fff; border-radius: 12px; padding: 8px 10px; box-shadow: 0 6px 20px rgba(0,169,255,0.15)"
				>
					<img src="/img/wordpress-logo.svg" alt="WordPress" style="width: 28px; height: 28px" />
				</div>
				<div
					class="fade-up fade-up-d5"
					style="position: absolute; bottom: 22%; left: -18px; background: #fff; border-radius: 12px; padding: 8px 10px; box-shadow: 0 6px 20px rgba(255,68,0,0.1)"
				>
					<img src="/img/svelte-logo.svg" alt="SvelteKit" style="width: 28px; height: 28px" />
				</div>
			</div>
			<div style="display: flex; gap: 8px; margin-top: 18px">
				<span class="tag tag-accent">WordPress</span>
				<span class="tag">SvelteKit</span>
				<span class="tag">Headless</span>
			</div>
		</div>
	</div>
</section>

<!-- Methoden -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">01 — Methoden</span>
			<div class="rule-header__line"></div>
			<a href="/methoden/" class="rule-header__aside">Alles bekijken →</a>
		</div>
		<div class="g-3 methoden-cols">
			<div class="methoden-col methoden-col-1">
				<div class="eyebrow">01</div>
				<h3>WordPress</h3>
				<p style="margin-top: 10px">Snel en budgetvriendelijk een mooie website opzetten.</p>
				<a href="/methoden/wordpress/" class="link-arrow" style="margin-top: 16px; display: inline-flex"
					>Lees meer →</a
				>
			</div>
			<div class="methoden-col methoden-col-2">
				<div class="eyebrow">02</div>
				<h3>Static website</h3>
				<p style="margin-top: 10px">
					Geen CMS, maximale snelheid. SvelteKit voor optimale performance.
				</p>
				<a
					href="/methoden/statische-website/"
					class="link-arrow"
					style="margin-top: 16px; display: inline-flex">Lees meer →</a
				>
			</div>
			<div class="methoden-col methoden-col-3">
				<div class="eyebrow">03</div>
				<h3>Headless CMS</h3>
				<p style="margin-top: 10px">
					Front-end en back-end losgekoppeld. Ideaal voor high-traffic sites.
				</p>
				<a
					href="/methoden/headless/"
					class="link-arrow"
					style="margin-top: 16px; display: inline-flex">Lees meer →</a
				>
			</div>
		</div>
	</div>
</section>

<!-- Portfolio preview -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border); background: var(--color-bg-sub)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">02 — Bijdragen</span>
			<div class="rule-header__line"></div>
			<a href="/portfolio/" class="rule-header__aside">Alles bekijken →</a>
		</div>
		<div class="g-3" style="gap: 16px">
			<a href="/portfolio/dend/" class="portfolio-card">
				<div class="portfolio-card-image">
					<enhanced:img
						src="/static/img/portfolio/logo.png"
						alt="DitjesenDatjes logo"
						style="max-height: 50px; max-width: 180px; object-fit: contain"
					/>
					<div class="portfolio-card-overlay">
						<span style="color: #fff; font-weight: 700; font-size: 14px">Bekijk project →</span>
					</div>
				</div>
				<div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center">
					<div>
						<div class="portfolio-tag">WordPress</div>
						<div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; margin-top: 2px">
							DitjesenDatjes
						</div>
					</div>
					<span style="font-size: 17px; color: var(--color-accent)">→</span>
				</div>
			</a>
			<a href="/portfolio/bukett/" class="portfolio-card">
				<div class="portfolio-card-image">
					<enhanced:img
						src="/static/img/portfolio/Bukett_Woordmerk_RGB_Zwart_144dpi.png"
						alt="Bukett logo"
						style="max-height: 50px; max-width: 180px; object-fit: contain"
					/>
					<div class="portfolio-card-overlay">
						<span style="color: #fff; font-weight: 700; font-size: 14px">Bekijk project →</span>
					</div>
				</div>
				<div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center">
					<div>
						<div class="portfolio-tag">WordPress</div>
						<div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; margin-top: 2px">
							Bukett
						</div>
					</div>
					<span style="font-size: 17px; color: var(--color-accent)">→</span>
				</div>
			</a>
			<a href="/portfolio/ams-advocaten/" class="portfolio-card">
				<div class="portfolio-card-image">
					<enhanced:img
						src="/static/img/portfolio/logo-ams-advocaten.png"
						alt="AMS Advocaten logo"
						style="max-height: 50px; max-width: 180px; object-fit: contain"
					/>
					<div class="portfolio-card-overlay">
						<span style="color: #fff; font-weight: 700; font-size: 14px">Bekijk project →</span>
					</div>
				</div>
				<div style="padding: 14px 18px; display: flex; justify-content: space-between; align-items: center">
					<div>
						<div class="portfolio-tag">WordPress</div>
						<div style="font-family: var(--font-display); font-size: 15px; font-weight: 700; margin-top: 2px">
							AMS Advocaten
						</div>
					</div>
					<span style="font-size: 17px; color: var(--color-accent)">→</span>
				</div>
			</a>
		</div>
	</div>
</section>

<!-- Over mij -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container g-2 about-grid" style="gap: 80px; align-items: center">
		<div>
			<div class="rule-header" style="margin-bottom: 28px">
				<span class="rule-header__label">03 — Over mij</span>
			</div>
			<h2 style="font-size: clamp(32px, 4vw, 46px); letter-spacing: -1.5px; line-height: 1.02; margin-bottom: 20px">
				Ik ben Joey,<br />uit Leiden.
			</h2>
			<p style="margin-bottom: 28px">
				Rasechte Leidenaar, positief ingesteld en altijd enthousiast. Leergierig en pas tevreden als
				anderen dat ook zijn.
			</p>
			<div style="display: flex; gap: 36px; padding-top: 24px; border-top: 1px solid var(--color-border)">
				<div>
					<div style="font-family: var(--font-display); font-size: 36px; font-weight: 800; color: var(--color-fg); line-height: 1">3+</div>
					<div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--color-fg-muted); margin-top: 6px">Jaar ervaring</div>
				</div>
				<div>
					<div style="font-family: var(--font-display); font-size: 36px; font-weight: 800; color: var(--color-fg); line-height: 1">10+</div>
					<div style="font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--color-fg-muted); margin-top: 6px">Projecten</div>
				</div>
			</div>
		</div>
		<div class="about-photo" style="border-radius: 14px; overflow: hidden; aspect-ratio: 3/4; border: 1px solid var(--color-border)">
			<enhanced:img
				src="/static/img/Joey-standing.jpg"
				alt="Joey Bol"
				style="width: 100%; height: 100%; object-fit: cover; object-position: center top"
			/>
		</div>
	</div>
</section>

<!-- Contact CTA -->
<section class="contact-band">
	<div class="container g-cta" style="padding-block: 68px">
		<div>
			<div style="font-size: 10px; letter-spacing: 3.5px; text-transform: uppercase; color: var(--color-accent); font-weight: 700; margin-bottom: 20px">
				04 — Contact
			</div>
			<h2 style="color: #fff; font-size: clamp(32px, 4vw, 44px); letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 16px">
				Een project<br />in gedachten?
			</h2>
			<p style="color: rgba(255,255,255,0.5)">Neem contact op en ik kijk graag met je mee.</p>
		</div>
		<div style="display: flex; flex-direction: column; gap: 12px">
			<a href="mailto:jlwbol92@gmail.com" class="contact-block">
				<div style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-bottom: 5px">Email</div>
				<div style="font-size: 14px; font-weight: 500">jlwbol92@gmail.com →</div>
			</a>
			<a href="/contact/" class="contact-block contact-block--accent">
				<div style="font-size: 10px; letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.6); margin-bottom: 5px">Of direct</div>
				<div style="font-family: var(--font-display); font-size: 14px; font-weight: 700; color: #fff">Plan een gesprek →</div>
			</a>
		</div>
	</div>
</section>

<style>
	/* Hero left column */
	.hero-left {
		padding: 60px 44px 60px 0;
		border-right: 1px solid var(--color-border);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	/* Hero heading */
	.hero-heading {
		font-size: clamp(64px, 8vw, 88px);
		letter-spacing: -4px;
		line-height: 0.9;
	}

	/* Hero bottom split (text + buttons) */
	.hero-bottom {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		padding-top: 32px;
		border-top: 1px solid var(--color-border);
	}

	/* Hero right column */
	.hero-right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40px 0 40px 48px;
	}

	/* Circular photo */
	.hero-circle {
		position: relative;
		width: 320px;
		height: 320px;
	}

	/* Methoden column borders */
	.methoden-col-1 {
		padding-right: 44px;
		border-right: 1px solid var(--color-border);
	}
	.methoden-col-2 {
		padding: 0 44px;
		border-right: 1px solid var(--color-border);
	}
	.methoden-col-3 {
		padding-left: 44px;
	}

	/* Mobile overrides */
	@media (max-width: 767px) {
		.hero-heading {
			font-size: clamp(44px, 12vw, 64px);
			letter-spacing: -2px;
		}

		.hero-left {
			padding: 40px 0;
			border-right: none;
			border-bottom: 1px solid var(--color-border);
		}

		.hero-right {
			padding: 40px 0;
		}

		.hero-circle {
			width: 220px;
			height: 220px;
		}

		.hero-bottom {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		/* Methoden: stack with bottom borders */
		.methoden-col-1 {
			padding-right: 0;
			padding-bottom: 32px;
			border-right: none;
			border-bottom: 1px solid var(--color-border);
		}
		.methoden-col-2 {
			padding: 32px 0;
			border-right: none;
			border-bottom: 1px solid var(--color-border);
		}
		.methoden-col-3 {
			padding-left: 0;
			padding-top: 32px;
		}

		/* About: photo first on mobile */
		.about-photo {
			order: -1;
			aspect-ratio: 4/3;
		}
	}
</style>
