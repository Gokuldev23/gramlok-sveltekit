<script>
	import Ripple from "@smui/ripple";
	import { MessageCircle, Share } from "lucide-svelte";
	import { fly, slide , scale} from "svelte/transition";


    let { post , postLiked , handleLike =()=> {}} = $props()

</script>




<footer class="mt-2">
    <div class="w-fit ml-auto flex items-center gap-4 ">
        <div id="comment">
            <a href="/news/posts/{post.post_id}"  use:Ripple={{surface:true,color:'primary'}} class="size-12 p-1 flex items-center rounded-full text-blue-600 text-center">
                <MessageCircle size={28} class="mx-auto"/>
            </a>
        </div>
        <div id="share">
            <button  use:Ripple={{surface:true,color:'primary'}} class="size-12 p-1 rounded-full text-blue-600 text-center">
                <Share size={28} class="mx-auto"/>
            </button>
        </div>
        <div id="likes" class="flex items-center gap-1">
            <button aria-label="like" onclick={handleLike} use:Ripple={{surface:true,color:'primary'}} class="size-12 p-1 rounded-full">
                {#if postLiked}
                    <span in:scale class="icon-[weui--like-filled] text-red-500 size-10"></span>
                {:else}
                    <span class="icon-[weui--like-outlined] text-red-500 size-10"></span>
                {/if}
            </button>
            <div class="w-5" >
                {#key post.likes.length}
                    <p in:slide={{axis:'y',delay:350}} out:fly={{y:5}} class="lg:text-2xl text-lg">{post.likes.length}</p>
                {/key}
            </div>
        </div>
    </div>
</footer>