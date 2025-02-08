<script>
    import Card from '$lib/Components/Card.svelte';
	import Image from '$lib/Components/Image.svelte';
	import PostAuthor from '$lib/Components/PostAuthor.svelte';

	let { data } = $props();
	let posts = $derived(data.data)
</script>


{#each posts.data as {news_text,news_image,image_sizes,posted_by,post_id} (post_id)}
	
    <Card class="max-w-2xl mx-auto p-4 my-5">
        <PostAuthor userUid={posted_by}/>
        <a href="/news/posts/{post_id}">
            <p class="my-4 line-clamp-3">{news_text}</p>
            <div class="max-w-2xl mx-auto bg-black">
                <Image class="max-h-96 mx-auto" img={news_image} image_sizes={image_sizes}/>
            </div>
        </a>
    </Card>

{/each}