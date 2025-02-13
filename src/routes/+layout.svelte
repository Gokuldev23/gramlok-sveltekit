<script>
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/Components/Navbar.svelte';
	import { Toaster } from "$lib/Components/ui/sonner/index.js";


	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { children } = $props()

</script>


<main>
	<Navbar/>
	<div id="slot" class="min-h-screen bg-white py-10">
		{@render children()}
	</div>
	<Toaster richColors position="top-center"/>
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	:global(html){
		font-family:'Fredoka', Courier, monospace;
	}
</style>