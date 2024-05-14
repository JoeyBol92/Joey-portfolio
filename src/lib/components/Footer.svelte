<script>
	import Container from '$lib/components/Container.svelte';
</script>

<footer class="border-[#E0E5E6 border-t-[2px]">
	<Container>
		<div class="grid grid-cols-3 justify-end bg-white py-10">
			<div class=" left-0 top-0 col-span-2 w-[180px] bg-white">
				<a href="/">
					<img
						src="./img/logo-jojobee.svg"
						alt="logo"
						class="w-auto px-4 pb-4"
						width=""
						height=""
					/>
				</a>
				<ul class="space-y-1 px-4">
					<li>Joey Bol</li>
					<li>Ergens 1</li>
					<li>1234AB Ergens</li>

					<li>&copy; {new Date().getFullYear()}</li>
				</ul>
			</div>
			<div class="grid grid-cols-2">
				<div>
					<h3 class="pb-2">Contact</h3>
					<ul class="space-y-1">
						<li>mail@mail</li>
						<li>06 123 45 678</li>
					</ul>
				</div>
				<div>
					<enhanced:img
						src="/static/Emilio-contact.jpg"
						alt="Contact opnemen"
						class="h-auto w-[150px] rounded-[100%] object-cover"
					/>
				</div>
			</div>
		</div>
	</Container>
</footer>
