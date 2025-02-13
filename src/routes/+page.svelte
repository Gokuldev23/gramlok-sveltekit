<script>
    import { page } from '$app/state';
    import { Heart } from 'lucide-svelte';
    import IconButton , { Icon } from '@smui/icon-button';


    import Card from '$lib/Components/Card.svelte';
	import Image from '$lib/Components/Image.svelte';
	import PostAuthor from '$lib/Components/PostAuthor.svelte';
	import Ripple from '@smui/ripple';
	import NewsPost from '$lib/Components/news/NewsPost.svelte';

	let { data } = $props();
	let posts = $derived(page.data.data)
    

</script>


<main class="space-y-10">

    <div id="landing" class="relative">
        <div class="absolute left-0 top-0 w-full py-4">
            <h1 class="text-violet-500 font-medium md:text-5xl text-2xl text-center">Welcome to Gramlok!</h1>
            <p class="text-center">Connecting <span>INDIA</span></p>
        </div>
        <img class="mx-auto w-full min-h-96 max-w-5xl object-cover " src="/landing-bg-3.png" alt="">
    </div>

    {#each posts.data as post (post.post_id)}
        <div class="bg-white px-4">
            <NewsPost post={post}/>
        </div>
    {:else}
        <div class="max-w-sm  mx-auto p-4 my-10 ">
            <h1 class="text-xl font-medium">Oops! Network Error, Check Internet Connection</h1>
            <p class="mb-5">or Try again Later!</p>
            <img class="h-full" src="/not_found.svg" alt="">
        </div>
    
    {/each}
</main>



<style>
    #landing{
        animation-name: rotateAnimation;
        animation-duration: 100ms; /* Firefox requires this to apply the animation */
        animation-direction: alternate;
        animation-timeline: scroll(block nearest);
        z-index: 0;
    }
    @keyframes rotateAnimation {
    to {
        transform: scale(0);
        opacity: 0;
        filter: brightness(0),contrast(0),blur(200px);
        transform: translateY(600px);    

    }
}
</style>