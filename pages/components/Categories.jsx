import React,{useState} from 'react'
import PropTypes from 'prop-types';

function Categories({setCategories,categories}) {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (event) =>{
        setinputValue(event.target.value.split("").join(""))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length >2) {
            setCategories([...categories,inputValue])
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

Categories.propTypes = {
    setCategories: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};



export default Categories



