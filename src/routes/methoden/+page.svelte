<svelte:head>
	<title>Methoden - JojoBee ©</title>
	<meta
		name="description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta name="robots" content="noindex" />
	<meta property="og:title" content="Methoden - JojoBee ©" />
	<meta property="og:url" content="https://jojobee.nl/methoden/" />
	<meta property="og:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta property="og:image:alt" content="Logo JojoBee" />
	<meta property="og:type" content="WebPage" />
	<meta
		property="og:description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta property="og:locale" content="nl" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Methoden - JojoBee ©" />
	<meta name="twitter:url" content="https://jojobee.nl/methoden/" />
	<meta
		name="twitter:description"
		content="Welk soort website past het best bij jou? Een standaard WordPress website? Of wellicht een statische website of zelfs een Headless CMS? Ik leg je de verschillen graag uit."
	/>
	<meta name="twitter:image" content="https://jojobee.nl/img/logo-jojobee.svg" />
	<meta name="twitter:image:alt" content="Logo JojoBee" />
</svelte:head>

<!-- Page header -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">Methoden</span>
			<div class="rule-header__line"></div>
		</div>
		<div style="max-width: 600px">
			<h1 style="margin-bottom: 20px">Welke aanpak past bij jou?</h1>
			<p>
				Van WordPress tot headless: ik leg je de verschillen graag uit zodat jij de beste keuze kunt
				maken voor jouw project.
			</p>
		</div>
	</div>
</section>

<!-- Methoden columns -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div style="display: grid; grid-template-columns: repeat(3, 1fr)">
			<div style="padding-right: 44px; border-right: 1px solid var(--color-border)">
				<div class="eyebrow">01</div>
				<div style="margin-bottom: 16px">
					<img
						src="/img/wordpress-logo.svg"
						alt="WordPress"
						style="width: 40px; height: 40px; margin-bottom: 12px"
					/>
				</div>
				<h3>WordPress</h3>
				<p style="margin-top: 12px">
					De manier om snel en budgetvriendelijk een website op te zetten is WordPress. Met weinig
					budget kun je een mooie, professionele website bouwen.
				</p>
				<a
					href="/methoden/wordpress/"
					class="link-arrow"
					style="margin-top: 20px; display: inline-flex">Lees meer →</a
				>
			</div>
			<div style="padding: 0 44px; border-right: 1px solid var(--color-border)">
				<div class="eyebrow">02</div>
				<div style="margin-bottom: 16px">
					<img
						src="/img/svelte-logo.svg"
						alt="SvelteKit"
						style="width: 40px; height: 40px; margin-bottom: 12px"
					/>
				</div>
				<h3>Static website</h3>
				<p style="margin-top: 12px">
					Een statische website is een website zonder CMS zoals WordPress. Ideaal voor websites
					zonder dagelijks onderhoud — maximale snelheid.
				</p>
				<a
					href="/methoden/statische-website/"
					class="link-arrow"
					style="margin-top: 20px; display: inline-flex">Lees meer →</a
				>
			</div>
			<div style="padding-left: 44px">
				<div class="eyebrow">03</div>
				<div style="display: flex; gap: 8px; margin-bottom: 16px">
					<img
						src="/img/wordpress-logo.svg"
						alt="WordPress"
						style="width: 40px; height: 40px; margin-bottom: 12px"
					/>
					<img
						src="/img/svelte-logo.svg"
						alt="SvelteKit"
						style="width: 40px; height: 40px; margin-bottom: 12px"
					/>
				</div>
				<h3>Headless CMS</h3>
				<p style="margin-top: 12px">
					Headless betekent dat de front-end en back-end losgekoppeld zijn. Ideaal voor websites met
					veel bezoek en dagelijks intensief gebruik.
				</p>
				<a
					href="/methoden/headless/"
					class="link-arrow"
					style="margin-top: 20px; display: inline-flex">Lees meer →</a
				>
			</div>
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
				Vraag een offerte aan
			</div>
			<h2
				style="color: #fff; font-size: clamp(32px, 4vw, 44px); letter-spacing: -1.5px; line-height: 1.05; margin-bottom: 16px"
			>
				Niet zeker welke<br />methode past?
			</h2>
			<p style="color: rgba(255,255,255,0.5)">Neem contact op en ik adviseer je graag gratis.</p>
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
