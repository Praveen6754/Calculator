import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked Button")
    }
  render() {
    return (
        <>
          <h2>ClassClick</h2>
          <button onClick={this.clickHandler}>Click me</button>
        </>
    )
  }
}

export default ClassClick