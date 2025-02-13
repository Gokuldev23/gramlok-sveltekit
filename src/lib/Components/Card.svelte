<script>
    let props = $props()

    let children  = $derived(props.children)

</script>


<main class="{props.class}  p-4 border border-slate-400 shadow-[10px_10px_0px_0px] shadow-blue-500 ">
    {@render children?.()}
</main>