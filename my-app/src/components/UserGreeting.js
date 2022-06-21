import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn :true
      }
    }
  render() {
//     if (this.state.isLogedIn){
//         return (
//       <div>Welcome Praveen</div>
//     )}
//    else{
//     return(
//         <div>
//             Welcome Yash
//         </div>
//     )
//    }
        // let message
        // if (this.state.isLogedIn){
        //     message = 'Welcome PRAVEEN'
        // }
        // else{
        //     message = 'Welcome Yash'
        // }
        // return message
        return(
            this.state.isLogedIn?
            <div>Welcome Praveen</div>:
            <div>Welcome Yash</div>
        )
  }
}

export default UserGreeting