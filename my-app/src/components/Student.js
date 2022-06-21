import React ,{useState}from 'react';

function Student(){
    const [data,setData] = useState('Praveen')
    
    return(
        <div>
            <h1>Hello {data}</h1>
            <button onClick={()=>setData('Yash')}>Change Name</button>
        </div>
    )
}

export default Student