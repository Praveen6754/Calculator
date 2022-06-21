import React from 'react'

function NameList() {
    const arr = ['Praveen','Yash','Vinit','Kana']
  return (
    <div>
    {
        arr.map(name => <h2>{name}</h2>)
    }
    </div>
  )
}

export default NameList
