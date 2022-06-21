import React from 'react'

const FunctionClicks = () => {
    const clickHandler = () =>{
        console.log("Button Clicked")

    }
  return (
    <>
    <h2>
    FunctionClicks
    </h2>
    <button onClick={clickHandler}>Click</button>
    </>
  )
}

export default FunctionClicks