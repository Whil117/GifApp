import React,{useState,useEffect} from 'react'

import { GifGridItem } from './GifGridItem'

import styled  from 'styled-components'

const ContainGif = styled.div`
        display:flex;
        flex-wrap:wrap;
`



export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])
    
    useEffect(()=>{
        getGifs()
    },[])

    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=Rick&limit=10&api_key=su1qpGt1TYRRHZ8CszJd4zVJUJfAHR9Q'
        const res = await fetch(url)
        const {data} = await res.json()

        const gifs = data.map(img => {
            return {
                id: img.id,
                title:img.title,
                url:img.images.downsized_medium.url
            }
        })
        setImages(gifs)
    }


    return (
        <>
        <h3>{category}</h3>
        <ContainGif>

                {images.map((img)=>(
                   <GifGridItem 
                   key={img.id}
                    {...img}   
                   />//dijiste que cuando se hace un map 
                ))}
        </ContainGif>
        </>
    )
}
