import React, { Component } from 'react'

class Cons extends Component{
    constructor(){
        super()
        this.state = {
            name : 'Praveen'
        }
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.name}</h1>
            </div>
        )
    }
}

export default Cons