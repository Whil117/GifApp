import React from 'react'
import styled  from 'styled-components'




const ContainerGif = styled.div`
        display:flex;
        flex-wraper:wrap;
        width:250px;
       box-shadow: 4px 4px  grey;
       border:1px solid grey;
       border-radius:10px;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:10px;

        .Gif{
            width:200px;
             height:200px;

        }
`
export const GifGridItem = ({id,title,url}) => {
    return (
        <ContainerGif key={id}>
            <h4>{title}</h4>
            <img className="Gif" src={url} alt={title}/>
        </ContainerGif>
    )
}
