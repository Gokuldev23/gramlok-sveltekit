<script>
	import InputField from "./InputField.svelte";


    let { countryCode = $bindable() , mobile = $bindable() , mobileErr , name = "" } = $props()

</script>


<div id="mobile-input" class="flex gap-1">
    <select bind:value={countryCode} class="rounded-l-lg" name="" id="">
        <option value={countryCode}>{countryCode}</option>
    </select>
    <InputField name={name} required={true} label={"Mobile No"} type={"number"} bind:value={mobile} errorMsg={mobileErr}/>
</div>