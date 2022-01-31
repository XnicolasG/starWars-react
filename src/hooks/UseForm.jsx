import { useState } from "react";


const UseForm = (initialState = {}) => {
    const[busq, setBusq] = useState(initialState)

    const handleInput = ({target}) =>{
        setBusq({
            ...busq,
            [target.name]: target.value
        })
    }
    const resetForm = () =>{
        setBusq(initialState)
    }
  return [busq, handleInput, resetForm]
};

export default UseForm;
