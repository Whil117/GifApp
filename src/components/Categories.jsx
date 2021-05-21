import React,{useState} from 'react'


function Categories({useStateCategories}) {
    const [categories,setCategories] = useStateCategories;
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (event) =>{
        setinputValue(event.target.value.split("").join(""))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length >2) {
            setCategories([inputValue,...categories])
            setinputValue('')
        }else{
            console.log('Oye ingresa más letras')
        }
    }

    return (
                    <form action="" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    /> 
                    </form>
    )
}


export default Categories



