import { useEffect, useState } from "react"

const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=12&api_key=su1qpGt1TYRRHZ8CszJd4zVJUJfAHR9Q`
    const res = await fetch(url)
    const {data} = await res.json()
    
    const gifs = data.map(img => {
        return {
            id: img.id,
            title:img.title,
            url:img.images.downsized_medium.url
        }
    })
    return gifs
}

export const useFetchGifs = (category) =>{
        const [state, setstate] = useState({
            data:[],
            loading:true,
            error:'',
        })

        //El curso decia que useEffect se usa para que la peticion no se dispare cuando se ingrese un dato en el input
        useEffect(()=>{
            getGifs(category)
                .then(imgs =>{
                        setstate({
                            data:imgs,
                            loading:false
                        })
                })
        },[category])
        
        return state
}
//:v NOUP elcurso