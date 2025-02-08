<script>
    let props = $props()

    let children  = $derived(props.children)

</script>


<main class="{props.class} rounded-xl p-4 border border-slate-400 shadow-md shadow-slate-700">
    {@render children?.()}
</main>