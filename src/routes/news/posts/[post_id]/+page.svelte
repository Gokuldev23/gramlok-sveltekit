<script>
	import { MoveLeft } from "lucide-svelte";

    let { data } = $props()

    let post = $derived(data.data)
</script>


<main class="max-w-2xl mx-auto my-10">
    <div class="flex items-center gap-4 text-2xl">
        <button onclick={()=>history.back()}>
            <MoveLeft size={34}/>
        </button>
        <p>{post.news_text}</p>
    </div>
</main>