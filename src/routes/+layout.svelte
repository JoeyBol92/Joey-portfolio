<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>JojoBee: websites op maat &copy; {new Date().getFullYear()}</title>
</svelte:head>
<Header />
<slot />
<Footer />
