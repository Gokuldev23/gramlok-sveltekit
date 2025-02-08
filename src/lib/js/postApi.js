import dataUrlRoot from "./dataUrlRoot"


export const getAuthorData = async (userUid) => {
    let url = `${dataUrlRoot}/user/name-pic/${userUid}`

    try {
        let res = await fetch(url,{
            method:'GET'
        })
        let result = await res.json()
        return result
    } catch (error) {
        console.log(error)
        return {success:false,message:"error fetching"}
    }
}