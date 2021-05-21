import React, { useState } from 'react'
import Categories from '../components/Categories';
import { GifGrid } from '../components/GifGrid';
import styled from 'styled-components'

const NavGifInput = styled.div`
      background-color:#E1E1E1;
      box-shadow: 0px 8px 4px rgba(79, 79, 79, 0.25);
      padding:30px;
      display:flex;
      flex-direction:column;
      h1{
        font-family: Roboto;
        font-style: normal;
      } 
      form {
                input{
                padding:10px;
                border:none;
                background: #E3E3E3;
                box-shadow: 2px 2px 11px rgba(0, 0, 0, 0.25);
                border-radius: 20px;
            }

            } 
`


const Index = () => {

  const [categories, setCategories] = useState(['Halo']);
  return (
    <div>
      <NavGifInput >
        <h1 >GifExpertApp</h1>
            <Categories useStateCategories={[categories, setCategories]} />
      </NavGifInput>
      <div >
        {
          categories.map(category =>
            <GifGrid key={category} category={category} />)
        }
      </div>
    </div>
  )
}

export default Index
