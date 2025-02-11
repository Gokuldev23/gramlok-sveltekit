



export const actions =  {
    register : async ({request}) => {
        let form = await request.formData()
        console.log(form)
    }
}