import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Praveen'
      }
      console.log('Lifecycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B getDerviedFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle B ComponentDidMount');
        
      }

  render() {
      console.log('LifeCycle B Render')
    return (
      <div>Lifecycle B</div>
    )
  }
 
}

export default LifecycleB