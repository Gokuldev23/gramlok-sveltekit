<script>
	import InputField from "./InputField.svelte";


    let { password = $bindable() , errPassword , label = "password" , name = 'Password' } = $props()

    let showPassword = $state(false)

    const toggleSeekPassword = () => {
        showPassword = !showPassword
    }

</script>




<div id="password-input" class="relative pb-2">
    <InputField name={name} label={label} required={true} type={ !showPassword ? "password" : "text"} bind:value={password} errorMsg={errPassword}/>
    <button type="button" onclick={toggleSeekPassword} class="absolute right-6 top-3 text-xl ">
        <!-- <Icon icon={ showPassword ? "flowbite:eye-outline" : "flowbite:eye-slash-outline"}/> -->
    </button>
</div>