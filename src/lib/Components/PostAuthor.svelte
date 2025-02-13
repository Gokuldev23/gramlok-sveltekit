<script>
	import { getAuthorData } from "$lib/js/postApi";
	import { onMount } from "svelte";
	import Image from "./Image.svelte";


    let { userUid } = $props()

    let img = ''
    let author = $state({
        name : '',
        profilePic : '',
        picSizes : {}
    })

    let loading = $state(false)

    const handleGetAuthorData = async (uid) => {
        loading = true
        let res = await getAuthorData(uid)
        if(res.success){
            let data = res.data
            author.name = data.user_name
            author.profilePic = data.profile_pic
            author.picSizes = data.profile_image_sizes
        }
        loading = false
    }
    handleGetAuthorData(userUid)


</script>


<main class="flex gap-4 items-center">
    {#if loading}
        <div class="size-14 bg-gray-400 animate-pulse"></div>
    {:else if !author.profilePic || !author.picSizes }
        <img class="size-14 " src="/de_profile.jpg" alt="">
    {:else}
        <Image class="size-14  object-cover" img={author.profilePic} image_sizes={author.picSizes}/>
    {/if}
    <p class="text-lg font-medium text-slate-700">{author.name}</p>
</main>