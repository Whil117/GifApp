import React,{useState} from 'react'
import Categories from './components/Categories';
import { GifGrid } from './components/GifGrid';

function GiftExpertApp() {
    const [categories, setCategories] = useState(['Category']);

    return (
        <div>
            <h1>GifExpertApp</h1>
            <Categories setCategories={setCategories} categories={categories}/>
            <hr />
           <ol>
           {
                categories.map(category => 
                    <GifGrid key={category} category={category} />)
            }
           </ol>
        </div>
    )
}


export default GiftExpertApp

