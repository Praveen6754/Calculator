import React ,{useEffect,useState,useRef} from 'react';
import './App.css'
function App(){

  const [result,setResult] = useState("")
  const inputRef = useRef(null)

  useEffect(()=>inputRef.current.focus())

  function clear(){
    setResult('')
  }

  function buttonClick(e){
    console.log("e",e);
    setResult(result.concat(e.target.name))
    
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }
  function backspace(){
  setResult(result.slice(0,-1));
}

  return(
    <div className='calc-app'>
      <form>
        <input type="text"  value = {result} ref={inputRef}/>
      </form>
      <div className='Keys'>
        <button id='clear' onClick={clear}>clear</button>
        <button name='=' onClick={calculate}>=</button>
        <button name='+' onClick={buttonClick}>+</button>
        <button name='7' onClick={buttonClick}>7</button>
        <button name='8' onClick={buttonClick}>8</button>
        <button name='9' onClick={buttonClick}>9</button>
        <button name='-' onClick={buttonClick}>-</button>
        <button name='4' onClick={buttonClick}>4</button>
        <button name='5' onClick={buttonClick}>5</button>
        <button name='6' onClick={buttonClick}>6</button>
        <button name='*' onClick={buttonClick}>&times;</button>
        <button name='1' onClick={buttonClick}>1</button>
        <button name='2' onClick={buttonClick}>2</button>
        <button name='3' onClick={buttonClick}>3</button>
        <button name='/' onClick={buttonClick}>/</button>
        <button name='0' onClick={buttonClick}>0</button>
        <button name='.' onClick={buttonClick}>.</button>
        <button id='backspace' onClick={backspace}>Backspace</button>
      </div>
    </div>
  )
}

export default App