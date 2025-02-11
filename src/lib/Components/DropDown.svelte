<script>
    import * as DropdownMenu from "$lib/Components/ui/dropdown-menu/index.js";
	import { buttonVariants } from "./ui/button";

    let radio = $state('Gender')
    $inspect(radio)
</script>
    
<DropdownMenu.Root bind:value={radio} class="border rounded-xl border-black">
    <DropdownMenu.Trigger class={buttonVariants({ variant: "outline" })}>
        {radio}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class="w-56">
    <DropdownMenu.Group>
    <DropdownMenu.GroupHeading>Gender</DropdownMenu.GroupHeading>
    <DropdownMenu.Separator />
    <DropdownMenu.Item onclick={()=>radio = "Male"}>Male</DropdownMenu.Item>
    <DropdownMenu.Item onclick={()=>radio = "Female"}>Female</DropdownMenu.Item>
    <DropdownMenu.Item onclick={()=>radio = "Others"}>Others</DropdownMenu.Item>
    </DropdownMenu.Group>
</DropdownMenu.Content>
</DropdownMenu.Root>