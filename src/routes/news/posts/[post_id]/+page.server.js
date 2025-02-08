import dataUrlRoot from '$lib/js/dataUrlRoot.js';


export const load = async ({params,fetch}) => {
    let post_id = params.post_id
    let url=`${dataUrlRoot}/news/post/${post_id}`
    
    try {
        const res = await fetch(url, {
            method: 'GET',
            mode: 'cors'
        });

        const result = await res.json();
        if(result.success){
            return {
                data : result.data
            }
        }else{
            return {
                data : []
            }
        }
    } catch (error) {
        return {
            success: false,
            message: `Network ${error}`
        }    
    }
}