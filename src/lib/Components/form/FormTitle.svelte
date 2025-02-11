<script>
    import { ArrowLeft } from 'lucide-svelte';


    let props = $props()

    let { title = "Title" ,txtColor = "#334155" , hideBackBtn = false , onBack = () => history.back() } = $derived(props)


</script>


<div class="relative md:text-3xl text-2xl mb-6 font-bold grid grid-cols-[30px_auto_30px] items-center w-full" style="color: {txtColor};">
    {#if !hideBackBtn}
        <button type="button"  onclick={onBack} class=" left-0 top-1 {props.class}">
            <ArrowLeft/>
        </button>
    {/if}
     <h1 class="text-center uppercase {props.class}">{title}</h1>
</div>