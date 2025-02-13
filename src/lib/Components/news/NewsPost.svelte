<script>
	import { toast } from "svelte-sonner";
	import { Share , MessageCircle} from "lucide-svelte";
	import { fly, scale, slide } from "svelte/transition";
	import { userStore } from "$lib/stores/store";

    import Ripple from "@smui/ripple";

	import Card from "../Card.svelte";
	import Image from "../Image.svelte";
	import PostAuthor from "../PostAuthor.svelte";
    import NewsFooter from  "./News.Footer.svelte"

    
    
    
    let props = $props()

    let post  = $state(props.post)
    let postLiked = $state(false);


    const handleLike = () => {
        if(!$userStore.signedIn){
            toast.error("You are not loggedIn")
            return
        }
        postLiked = !postLiked
        if(postLiked){
            post.likes = [...post.likes,'my_atoken']
        }else{
            post.likes.pop()
        }
    }
</script>


<div style="view-transition-name: news-{post.post_id};" class="bg-white z-10">
    <Card class="max-w-2xl mx-auto p-2 my-5">
        <PostAuthor userUid={post.posted_by}/>
        <a href="/news/posts/{post.post_id}">
            <p class="my-4 line-clamp-3">{post.news_text}</p>
            <div class="max-w-2xl mx-auto bg-black">
                <Image class="max-h-96 mx-auto " img={post.news_image} image_sizes={post.image_sizes}/>
            </div>
        </a>
    
        <NewsFooter post={post} postLiked={postLiked} handleLike={handleLike}/>
    </Card>
</div>