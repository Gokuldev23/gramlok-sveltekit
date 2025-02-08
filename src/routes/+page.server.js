import dataUrlRoot from '$lib/js/dataUrlRoot.js'


export const load = async ({fetch}) => {

    let res = await fetch(`${dataUrlRoot}/news/posts/entity/INDIA?limit=5`)
    let data = await res.json()
    return {
        data 
    }
}