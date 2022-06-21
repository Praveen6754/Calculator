import React ,{useEffect,useState} from "react";

function UseEffectfun(){
    const [data,setData] = useState(10)
    const [count,setCount] = useState(100)

    useEffect(()=>{
        console.warn('UseEffect called')
        
    },[data])
    return(
        <div>
            <h1>Count : {count}</h1>
            <h1>Name : {data}</h1>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    )
}

export default UseEffectfun
