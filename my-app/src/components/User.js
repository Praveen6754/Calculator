import React, { Component } from 'react'

class User extends Component{
    constructor(){
        super();
        this.state = {
            name:'Praveen'
        }
    }
    componentDidUpdate(){
        console.log('Component did update')
    }
    changeName = this.changeName.bind(this)
    changeName(){
            this.setState({
                name:'Yash'
            })
    }
    render(){
        console.log('Render')
        return (
            <div>
            <h1>Hello {this.state.name}</h1>
            <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }

   
}

export default User