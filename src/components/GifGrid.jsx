import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import  GifGridItem  from './GifGridItem'
import styled  from 'styled-components'

const Container = styled.div`
        display:flex;
        flex-wrap:wrap;
`

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category)
        
    return (
        <>
        <h3>{category}</h3>
        {loading && 'Cargando.....' }
        <Container>
                {images.map((img)=>(
                   <GifGridItem 
                   key={img.id}
                    {...img}   
                   /> 
                ))}
        </Container>
        </>
    )
}
