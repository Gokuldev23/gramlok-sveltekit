<script>
    import Ripple from '@smui/ripple';
	import Image from './Image.svelte';
	import { userStore } from '$lib/stores/store';


    let userSignedIn = $derived($userStore.signedIn)
    let userImg = $derived($userStore.profilePic)
    let userImgSizes = $derived($userStore.profile_image_sizes)
</script>

<main class="h-20 bg-white sticky top-0 flex justify-between px-4 items-center w-full shadow z-50">
    <a class="px-4 py-1 gap-4 rounded-lg flex items-center" use:Ripple={{surface:true,color:'secondary'}} href="/">
        <img class="w-10 rounded-full" src="/favicon.ico" alt="">
        <span>Gramlok</span>
    </a>
    <div use:Ripple={{surface:true,color:'secondary'}} class="flex  gap-4 items-center cursor-default rounded-full border px-2 py-1">
        {#if !userSignedIn}
            <img class="w-10 rounded-full" src="/profile.jpg" alt="">
            <a href="/auth/login">Sign-in</a>
        {:else}
            <a href="/user-home" class="flex gap-4 items-center ">
                <Image class="w-10 rounded-full aspect-square object-cover" img={userImg} image_sizes={userImgSizes}/>
                <p class="text-xl">{$userStore.userName}</p>
            </a>
        {/if}
    </div>
</main>