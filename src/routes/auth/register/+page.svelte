<script>
	import { goto } from "$app/navigation";

	import { otpStore , userStore} from "$lib/stores/store";

	import { validateAddress, validateMobileNumber, validateName, validatePassword } from "$lib/js/utils";

    import Card from "$lib/Components/Card.svelte";
	import FormTitle from "$lib/Components/form/FormTitle.svelte";
	import InputField from "$lib/Components/form/InputField.svelte";
	import AlertModal from "$lib/Components/form/AlertModal.svelte";
	import FullLoading from "$lib/Components/form/FullLoading.svelte";
	import PasswordInput from "$lib/Components/form/PasswordInput.svelte";
	import AgentIdInput from "$lib/Components/form/AgentIdInput.svelte";
	import SubmitButton from "$lib/Components/form/SubmitButton.svelte";
	import DatePicker from "$lib/Components/form/DatePicker.svelte";
	import DropDown from "$lib/Components/DropDown.svelte";


    let t_register = "Register"
    let t_already_agent = "Already an Agent?"
    let t_login_here = "Login here!"
    let t_tnc = "Terms and conditions"

    let disabled = $state(false)
    let loading = $state(false)
    let errorSubmit = $state('')

    let form = $state({
		agentName: "",
		agentMobile: null,
		agentPassword: "",
		countryCode: "+91",
	});

    const validations = $derived({
		name: validateName(form.agentName),
		password: validatePassword(form.agentPassword),
		mobile: validateMobileNumber(form.agentMobile),
	});

    const formErrors = $derived({
		name: validations.name ? null : "Name should be at least 3 characters (alphabets)",
		password: validations.password ? null : "Password Should contains 1 Uppercase, 1 Lowercase , 1 Number and 1 Symbol",
		mobile: validations.mobile ? null : "Invalid mobile number"
	});

    const formValid = $derived(
		validations.name &&
		validations.password &&
		validations.mobile
	);

    export const snapshot = { // this will capture the form and restore when we coming back this page or reload the page
        capture: () => form,
		restore: (value) => {
            return form = value
        },
        key : ({ url }) => url.pathname
    }

    const closeAlert = () => errorSubmit = ""


</script>


<main class="py-20  overflow-y-auto flex items-center px-4">

    {#if loading}
        <FullLoading/>
    {/if}

    {#if errorSubmit}
        <AlertModal message={errorSubmit} handleOnOk={closeAlert}/>
    {/if}

    <Card class="max-w-lg mx-auto w-full">

        <form method="POST" action="?/register" class="space-y-6">

            <FormTitle title={t_register} />

            <InputField name={"name"} label={"Name"} required={true} bind:value={form.agentName} errorMsg={formErrors.name}/>

            <AgentIdInput name={"userId"} bind:mobile={form.agentMobile} bind:countryCode={form.countryCode} mobileErr={formErrors.mobile}/>

            <PasswordInput name={'Password'} bind:password={form.agentPassword} errPassword={formErrors.password}/>

			<div class="grid grid-cols-2 gap-x-4">
				<DatePicker/> 
				<DropDown/>
			</div>

            <SubmitButton btnText={t_register} disabled={!formValid}/>

            <p class="mt-4 text-center text-sm md:text-base"> {t_already_agent}
                <a href="/marketing/auth/login" class="text-violet-600 hover:text-violet-800">{t_login_here}</a>
            </p>

        </form>
    </Card>
</main>