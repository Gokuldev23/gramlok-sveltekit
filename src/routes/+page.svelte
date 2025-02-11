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


{#each posts.data as post (post.post_id)}
   <NewsPost post={post}/>
{:else}
    <div class="max-w-sm  mx-auto p-4 my-10">
        <h1 class="text-xl font-medium">Oops! Network Error, Check Internet Connection</h1>
        <p class="mb-5">or Try again Later!</p>
        <img class="h-full" src="/not_found.svg" alt="">
    </div>

{/each}

<style>
    /* .icon{
        mask-image: ;
    } */
</style>