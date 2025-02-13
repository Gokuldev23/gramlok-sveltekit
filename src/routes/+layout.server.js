import dataUrlRoot from '$lib/js/dataUrlRoot.js'


export const load = async ({fetch}) => {


    try {
        let res = await fetch(`${dataUrlRoot}/news/posts/entity/INDIA?limit=5&skip=1`)
        let data = await res.json()
        return {
            data 
        }
    }
     catch (error) {
        return {success:false,message:`error fetching ${error}`, data : []}
    }
  
}