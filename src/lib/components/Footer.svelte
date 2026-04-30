<footer style="border-top: 1px solid var(--color-border); background: var(--color-bg)">
	<div class="container g-3 footer-grid" style="padding-block: 48px 36px; gap: 40px">
		<div>
			<span
				style="font-family: var(--font-display); font-size: 12px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700; color: var(--color-fg)"
				>JojoBee</span
			>
			<p style="font-size: 13px; color: var(--color-fg-muted); margin-top: 14px; line-height: 1.7">
				Snelle, moderne websites op maat.<br />Leiden, Nederland.
			</p>
		</div>
		<div>
			<div class="eyebrow">Navigatie</div>
			{#each [['/', 'Home'], ['/methoden/', 'Methoden'], ['/portfolio/', 'Portfolio']] as [href, label]}
				<a
					{href}
					style="display: block; font-size: 14px; color: var(--color-fg-muted); padding: 3px 0"
					>{label}</a
				>
			{/each}
		</div>
		<div>
			<div class="eyebrow">Contact</div>
			<a
				href="mailto:jlwbol92@gmail.com"
				style="font-size: 14px; color: var(--color-accent); display: block; margin-bottom: 6px"
				>jlwbol92@gmail.com</a
			>
			<p style="font-size: 13px; color: var(--color-fg-muted)">Joey Bol · Leiden</p>
			<img
				src="/Emilio-contact.jpg"
				alt="Emilio"
				width="56"
				height="56"
				loading="lazy"
				style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover; margin-top: 14px"
			/>
		</div>
	</div>
	<div
		style="border-top: 1px solid var(--color-border); padding: 16px 20px; display: flex; justify-content: space-between; max-width: var(--spacing-max); margin: 0 auto"
	>
		<span style="font-size: 12px; color: var(--color-fg-muted)"
			>© {new Date().getFullYear()} Joey Bol — JojoBee</span
		>
		<span style="font-size: 12px; color: var(--color-fg-muted)">Gemaakt met SvelteKit</span>
	</div>
</footer>
