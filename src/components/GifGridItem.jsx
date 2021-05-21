import React from 'react'
import styled  from 'styled-components'

const GifStyled = styled.div`
        display:flex;
        flex-wraper:wrap;
        box-shadow: 8px 8px 15px #aaaaaa;
       border-radius:10px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:10px;

        img{
                 border-radius:10px;
            width:200px;
             height:200px;
        }
`

    const GifGridItem = ({title,url}) => {
    return (
        <GifStyled >
            <img  src={url} alt={title}/>
        </GifStyled>
    )
}

export default GifGridItem