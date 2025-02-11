import dataUrlRoot from '$lib/js/dataUrlRoot.js'



export const load = async ({fetch}) => {

    let res = await fetch(`${dataUrlRoot}/news/posts/entity/INDIA?limit=5`)
    let data = await res.json()
    console.log("Layout server runs")
    return {
        data 
    }
}


export const actions =  {
    login : async ({request,fetch,locals}) => {
        let form = await request.formData()
        console.log(form,locals)
        let data = {
            userId : form.get('userId'),
            password : form.get('password')
        }

        try {
            let response = await fetch(`${dataUrlRoot}/auth/signin`,{
                method :"POST",
                body:JSON.stringify(data),
                headers : {
                    'Content-Type':'application/json'
                }
            })
            let result = await response.json()
            return result
        } catch (error) {
            console.error(error)
            return {success:false,message:"Fetch failed"}
        }
    }
}