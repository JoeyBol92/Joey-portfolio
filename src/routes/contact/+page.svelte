<script>
	let submitted = $state(false);
	let submitting = $state(false);

	async function handleSubmit(e) {
		e.preventDefault();
		submitting = true;

		const form = e.target;
		const data = new FormData(form);

		await fetch('/contact/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(data).toString()
		});

		submitted = true;
		submitting = false;
	}
</script>

<svelte:head>
	<title>Contact - JojoBee</title>
	<meta name="description" content="Neem contact op met Joey Bol — webdeveloper uit Leiden." />
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- Page header -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div class="container">
		<div class="rule-header">
			<span class="rule-header__label">Contact</span>
			<div class="rule-header__line"></div>
		</div>
		<div style="max-width: 600px">
			<h1 style="margin-bottom: 20px">Een project in gedachten?</h1>
			<p>Vul het formulier in en ik neem zo snel mogelijk contact met je op.</p>
		</div>
	</div>
</section>

<!-- Form + info grid -->
<section style="padding: 60px 0; border-bottom: 1px solid var(--color-border)">
	<div
		class="container g-editorial-wide"
		style="align-items: start"
	>
		{#if submitted}
			<div
				style="padding: 48px; background: var(--color-bg-sub); border: 1px solid var(--color-border); border-radius: var(--radius-card)"
			>
				<div class="eyebrow">Verstuurd</div>
				<h2 style="margin-bottom: 16px">Bericht ontvangen!</h2>
				<p>Bedankt voor je bericht. Ik neem zo snel mogelijk contact met je op.</p>
				<a href="/" class="btn btn-primary" style="margin-top: 28px">Terug naar home →</a>
			</div>
		{:else}
			<form
				name="contact"
				data-netlify="true"
				netlify-honeypot="bot-field"
				onsubmit={handleSubmit}
				style="display: flex; flex-direction: column; gap: 20px"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p style="display: none">
					<label>Laat dit leeg: <input name="bot-field" /></label>
				</p>

				<div class="g-2" style="gap: 16px">
					<div style="display: flex; flex-direction: column; gap: 8px">
						<label class="field-label" for="naam">Naam</label>
						<input
							id="naam"
							class="field-input"
							type="text"
							name="naam"
							required
							placeholder="Jan de Vries"
						/>
					</div>
					<div style="display: flex; flex-direction: column; gap: 8px">
						<label class="field-label" for="email">E-mail</label>
						<input
							id="email"
							class="field-input"
							type="email"
							name="email"
							required
							placeholder="jan@bedrijf.nl"
						/>
					</div>
				</div>

				<div style="display: flex; flex-direction: column; gap: 8px">
					<label class="field-label" for="onderwerp">Onderwerp</label>
					<input
						id="onderwerp"
						class="field-input"
						type="text"
						name="onderwerp"
						required
						placeholder="Nieuwe website voor mijn bedrijf"
					/>
				</div>

				<div style="display: flex; flex-direction: column; gap: 8px">
					<label class="field-label" for="bericht">Bericht</label>
					<textarea
						id="bericht"
						class="field-input"
						name="bericht"
						required
						rows="6"
						placeholder="Vertel me meer over je project..."
						style="resize: vertical"
					></textarea>
				</div>

				<div>
					<button type="submit" class="btn btn-primary" disabled={submitting}>
						{submitting ? 'Versturen...' : 'Verstuur bericht →'}
					</button>
				</div>
			</form>
		{/if}

		<!-- Side info -->
		<div style="display: flex; flex-direction: column; gap: 32px; padding-top: 8px">
			<div>
				<div class="eyebrow">Direct mailen</div>
				<a
					href="mailto:jlwbol92@gmail.com"
					style="font-size: 15px; color: var(--color-accent); font-weight: 600"
					>jlwbol92@gmail.com</a
				>
			</div>
			<div style="height: 1px; background: var(--color-border)"></div>
			<div>
				<div class="eyebrow">Locatie</div>
				<p style="margin: 0">Leiden, Nederland</p>
			</div>
			<div style="height: 1px; background: var(--color-border)"></div>
			<div>
				<div class="eyebrow">Reactietijd</div>
				<p style="margin: 0">Binnen 1–2 werkdagen</p>
			</div>
		</div>
	</div>
</section>

<style>
	.field-label {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 2px;
		text-transform: uppercase;
		color: var(--color-fg-muted);
	}

	.field-input {
		padding: 12px 16px;
		border: 1.5px solid var(--color-border);
		border-radius: var(--radius-btn);
		font-family: var(--font-body);
		font-size: 15px;
		background: var(--color-bg);
		color: var(--color-fg);
		outline: none;
		transition: border-color 0.15s;
		width: 100%;
	}

	.field-input:focus {
		border-color: var(--color-accent);
	}
</style>
