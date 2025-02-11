<script>
	import Card from "../Card.svelte";
	import Image from "../Image.svelte";
	import PostAuthor from "../PostAuthor.svelte";
    import Ripple from "@smui/ripple";

    let liked = $state(false);

    let { post } = $props()
</script>


<Card class="max-w-2xl mx-auto p-4 my-5">
    <PostAuthor userUid={post.posted_by}/>
    <a href="/news/posts/{post.post_id}">
        <p class="my-4 line-clamp-3">{post.news_text}</p>
        <div class="max-w-2xl mx-auto bg-black rounded-lg">
            <Image class="max-h-96 mx-auto rounded-lg" img={post.news_image} image_sizes={post.image_sizes}/>
        </div>
    </a>

    <button aria-label="like" onclick={()=>liked = !liked} use:Ripple={{surface:true,color:'primary'}} class="size-14 p-1 rounded-full">
        <span class="icon-[weui--like-{liked?'filled':'outlined'}] text-red-500 size-12"></span>
    </button>
</Card>