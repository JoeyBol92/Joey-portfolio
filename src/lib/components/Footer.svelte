<script>
	import Container from '$lib/components/Container.svelte';
</script>

<footer class="border-t-2 bg-white border-[#E0E5E6]">
	<Container>
		<div class="grid grid-cols-1 justify-end bg-white py-10 md:grid-cols-3">
			<div class="left-0 top-0 col-span-2 w-[180px] bg-white">
				<a href="/">
					<img
						src="/img/logo-jojobee.svg"
						alt="logo"
						class="w-auto px-4 pb-4"
						width="148"
						height="36"
					/>
				</a>
				<ul class="space-y-1 px-4">
					<li>Joey Bol</li>
					<li>&copy; {new Date().getFullYear()}</li>
				</ul>
			</div>
			<div class="px-4 max-[768px]:pt-4 md:grid md:grid-cols-2">
				<div>
					<h3 class="pb-2">Contact</h3>
					<ul class="space-y-1">
						<li>
							<a href="mailto:jlwbol92@gmail.com" class="hover:text-[#00A9FF]">
								jlwbol92@gmail.com
							</a>
						</li>
					</ul>
				</div>
				<div>
					<enhanced:img
						src="/static/Emilio-contact.jpg"
						alt="Contact opnemen"
						class="h-auto w-[150px] rounded-full object-cover shadow-2xl max-[768px]:mt-4"
					/>
				</div>
			</div>
		</div>
	</Container>
</footer>
