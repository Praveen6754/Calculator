import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Praveen'
      }
      console.log('Lifecycle A constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerviedFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycle A ComponentDidMount');
        
      }

  render() {
      console.log('LifeCycle A Render')
    return (
        <>
        <LifecycleB />
      <div>Lifecycle A</div>
      </>
    )
  }
 
}

export default LifecycleA