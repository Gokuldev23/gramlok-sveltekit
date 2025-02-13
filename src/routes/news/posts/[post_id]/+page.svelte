<script>
	import { MoveLeft } from "lucide-svelte";
	import Card from "$lib/Components/Card.svelte";
	import Image from "$lib/Components/Image.svelte";
	import PostAuthor from "$lib/Components/PostAuthor.svelte";
    import NewsFooter from "$lib/Components/news/News.Footer.svelte"
	import { getNewsComments } from "$lib/js/postApi";
	import { fly } from "svelte/transition";

    let { data } = $props()

    let post = $derived(data.data)
    let postLiked = $state(false)

    const handleLike = () => {

    }

    const handleGetComments = async (postId) => {
        let result = await getNewsComments(postId)
        console.log(result)
        if(result.success){

        }
    }

    $effect(()=>{
        handleGetComments(post.post_id)
    })
</script>


<div style="view-transition-name: news-{post.post_id};">
    <Card class="max-w-2xl mx-auto p-2 my-5">
        <button onclick={()=>history.back()}>
            <MoveLeft/>
        </button>
        <PostAuthor userUid={post.posted_by}/>
        <a href="/news/posts/{post.post_id}">
            <p class="my-4 line-clamp-3">{post.news_text}</p>
            <div class="max-w-full mx-auto bg-black">
                <Image class="mx-auto w-full" img={post.news_image} image_sizes={post.image_sizes}/>
            </div>
        </a>
    
        <NewsFooter post={post} postLiked={postLiked} handleLike={handleLike}/>
    </Card>
</div>