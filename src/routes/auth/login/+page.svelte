<script>
	import { goto } from "$app/navigation";
    import { enhance } from "$app/forms";
    
	// import { agentLogin } from "$lib/js/marketing/api/auth";
	import { validateMobileNumber, validatePassword } from "$lib/js/utils";

    import { Toaster, toast } from 'svelte-sonner'

    import Card from "$lib/Components/form/Card.svelte";
	import AgentIdInput from "$lib/Components/form/AgentIdInput.svelte";
	import PasswordInput from "$lib/Components/form/PasswordInput.svelte";
	import FullLoading from "$lib/Components/form/FullLoading.svelte";
	import AlertModal from "$lib/Components/form/AlertModal.svelte";
	import SubmitButton from "$lib/Components/form/SubmitButton.svelte";
	import FormTitle from "$lib/Components/form/FormTitle.svelte";
	import { userStore } from "$lib/stores/store.js";

	let { data, form } = $props();

    let t_login = "Login"
    let t_register_here = "Register here!"
    let t_not_agent = "Not an Agent?"
    let t_forgotpassword = "Forgot password?"

    let loading = $state(false)
    let errorSubmit = $state('')

    $effect(()=>{
        if(form?.success){
            form.signedIn = true
            userStore.set({...form})
            toast.success('Successfully LoggedIn');
            goto('/')
        }
    })

    export const snapshot = {
        capture: () => form,
		restore: (value) => {
            return form = value
        },
        key : ({ url }) => url.pathname
    }

    let userForm = $state({
		agentMobile: null,
		agentPassword: "",
        countryCode:"+91"
	});

    const validations = $derived({
		mobile: validateMobileNumber(userForm.agentMobile),
	});

    const formErrors = $derived({
		mobile: validations.mobile ? null : "Invalid mobile number",
	})

    const formValid = $derived(
		(userForm.agentMobile && validations.mobile)
	);

 


    const closeAlert = () => errorSubmit = ''


</script>


<main class="py-20 flex items-center px-4">

    {#if loading}
        <FullLoading/>
    {/if}

    {#if errorSubmit}
        <AlertModal message={errorSubmit} msgTextColor={'red'} handleOnOk={closeAlert}/>
    {/if}

    <Card class=" max-w-lg mx-auto w-full">
        <form use:enhance method="POST" action="?/login" class="space-y-6">
            
            <FormTitle title={t_login}/>

            <AgentIdInput name="userId" bind:mobile={userForm.agentMobile} bind:countryCode={userForm.countryCode} mobileErr={formErrors.mobile} />

            <PasswordInput name={'password'} bind:password={userForm.agentPassword}  errPassword={formErrors.password}/>

            <a class="text-sm  block text-violet-500" href="/marketing/auth/forgot-password">{t_forgotpassword}</a>

            <div class="space-y-3">
                <SubmitButton btnText={t_login} disabled={!formValid}/> 

                <p class="text-sm md:text-base text-center">
                    {t_not_agent}
                    <a href="/auth/register" class="text-violet-600 hover:text-violet-800">
                        {t_register_here}
                    </a>
                </p>
            </div>

        </form>
    </Card>
    
</main>