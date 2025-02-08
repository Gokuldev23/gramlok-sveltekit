<script>

    let props = $props()
    let {image_sizes = {}, img = ""} = $derived(props)


    const removeJPGExtension = (filename) => filename.replace(/\.jpg$/, "");

    let image = $derived(removeJPGExtension(img))
    
</script>

<picture class="">
    <source srcset="https://blr1.vultrobjects.com/picture/{image}_{image_sizes.extra_large??image_sizes.original}.jpg" media="(min-width: 1024px)">
    <source srcset="https://blr1.vultrobjects.com/picture/{image}_{image_sizes.large??image_sizes.original}.jpg" media="(min-width: 512px)">
    <source srcset="https://blr1.vultrobjects.com/picture/{image}_{image_sizes.medium??image_sizes.original}.jpg" media="(min-width: 256px)">
    <source srcset="https://blr1.vultrobjects.com/picture/{image}_{image_sizes.small??image_sizes.original}.jpg" media="(min-width: 128px)">
    <img class="{props.class}" src="https://blr1.vultrobjects.com/picture/{image}_{image_sizes.original}.jpg" alt="Crossword Post">
</picture>