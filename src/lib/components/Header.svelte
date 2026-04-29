<script>
	import { page } from '$app/stores';

	let open = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const fn = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', fn, { passive: true });
		return () => window.removeEventListener('scroll', fn);
	});

	const links = [
		{ href: '/methoden/', label: 'Methoden' },
		{ href: '/portfolio/', label: 'Portfolio' }
	];
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
	class:nav-glass={scrolled}
	style="border-bottom: 1px solid {scrolled ? 'var(--color-border)' : 'transparent'}"
>
	<div class="container flex items-center justify-between" style="height: var(--spacing-nav-h)">
		<a
			href="/"
			aria-label="JojoBee home"
			style="font-family: var(--font-display); font-size: 12px; letter-spacing: 3.5px; text-transform: uppercase; font-weight: 700; color: var(--color-fg)"
		>
			JojoBee
		</a>

		<nav class="hidden items-center gap-10 md:flex">
			{#each links as l}
				<a
					href={l.href}
					style="font-size: 14px; font-weight: 400; color: {$page.url.pathname.startsWith(l.href)
						? 'var(--color-accent)'
						: 'var(--color-fg-muted)'}; border-bottom: 2px solid {$page.url.pathname.startsWith(
						l.href
					)
						? 'var(--color-accent)'
						: 'transparent'}; padding-bottom: 2px; transition: color 0.15s"
				>
					{l.label}
				</a>
			{/each}
			<a href="/contact/" class="btn btn-primary" style="padding: 9px 22px; font-size: 13px"
				>Contact</a
			>
		</nav>

		<button class="md:hidden" onclick={() => (open = !open)} aria-label="Open menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</button>
	</div>
</header>

<!-- Mobile overlay -->
<div
	class="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden"
	class:opacity-0={!open}
	class:pointer-events-none={!open}
	onclick={() => (open = false)}
	role="button"
	tabindex="-1"
	aria-label="Sluit menu"
	onkeydown={(e) => e.key === 'Escape' && (open = false)}
></div>

<!-- Mobile panel -->
<div
	class="fixed top-0 right-0 z-[70] h-full w-80 max-w-[calc(100%-3rem)] translate-x-full shadow-2xl transition-transform duration-300 md:hidden"
	class:!translate-x-0={open}
	style="background: var(--color-bg)"
>
	<div
		class="flex items-center justify-between border-b p-4"
		style="border-color: var(--color-border)"
	>
		<span
			style="font-family: var(--font-display); font-size: 12px; letter-spacing: 3px; text-transform: uppercase; font-weight: 700"
			>Menu</span
		>
		<button
			onclick={() => (open = false)}
			aria-label="Sluit menu"
			class="flex h-10 w-10 items-center justify-center"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				class="h-5 w-5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
	<ul class="space-y-4 p-6">
		{#each links as l}
			<li>
				<a
					href={l.href}
					onclick={() => (open = false)}
					style="display: block; padding: 8px 0; font-weight: 700; color: var(--color-fg); font-size: 16px"
				>
					{l.label}
				</a>
			</li>
		{/each}
		<li>
			<a
				href="/contact/"
				onclick={() => (open = false)}
				class="btn btn-primary mt-4 w-full justify-center">Contact</a
			>
		</li>
	</ul>
</div>

<!-- Spacer -->
<div style="height: var(--spacing-nav-h)"></div>
