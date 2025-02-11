import { writable } from "svelte/store"

export const otpStore = writable({
    otp : '',
    otpToken : '',
    userUid : '',
})

export const userStore = writable({
    signedIn : false,
    a_token : ''
})