import React, { useState } from "react";

const GifGrifAdd = ({setCategoria}) => {
    const [inputValues ,setInputValues] = useState("");

    const handleInputChange =(e)=>{
        setInputValues(e.target.value);
    }

    const handleInput = (e)=>{
        e.preventDefault();

        if (inputValues.trim().length> 2) {
            setCategoria((cats) => [inputValues, ...cats]);
            setInputValues("");
        }
    }
    
  return (
    <>
      <form onSubmit={handleInput} >
        <input type="text" value={inputValues} onChange={handleInputChange}  />
      </form>
    </>
  );
};

export default GifGrifAdd;
