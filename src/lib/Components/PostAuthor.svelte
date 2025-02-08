<script>
	import { getAuthorData } from "$lib/js/postApi";
	import Image from "./Image.svelte";


    let { userUid } = $props()

    let img = ''
    let author = $state({
        name : '',
        profilePic : '',
        picSizes : {}
    })

    const handleGetAuthorData = async (uid) => {
        let res = await getAuthorData(uid)
        if(res.success){
            let data = res.data
            author.name = data.user_name
            author.profilePic = data.profile_pic
            author.picSizes = data.profile_image_sizes
        }
    }

    $effect(()=>{
        handleGetAuthorData(userUid)
    })

</script>


<main class="flex gap-4 items-center">
    {#if !author.profilePic || !author.picSizes}
        <img class="size-14 rounded-full" src="/de_profile.jpg" alt="">
    {:else}
        <Image class="size-14 rounded-full object-cover" img={author.profilePic} image_sizes={author.picSizes}/>
    {/if}
    <p class="text-lg font-medium text-slate-700">{author.name}</p>
</main>