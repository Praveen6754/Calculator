import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello'
import Message from './components/message'
import Counter from './components/Counter';
import FunctionClicks from './components/FunctionClicks';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import LifecycleA from './components/LifecycleA';
import Cons from './components/Cons';
import User from './components/User';
import Student from './components/Student'
import UseEffectfun from './components/UseEffectfun';
class App extends Component{
  render(){
    return (
      <div className="App">
       {/* <Hello name = 'Praveen' sirname = 'Patel'/>
       <Hello name = 'Yash' sirname = 'Khati' />
       <Hello name = 'Vinit' sirname = 'Choudhary'/> */}
       {/* <Message /> */}
       {/* <Counter/> */}
       {/* <FunctionClicks/> */}
       {/* <ClassClick/> */}
       {/* <EventBind /> */}
       {/* <ParentComponent /> */}
       {/* <UserGreeting /> */}
       {/* <NameList/> */}
       {/* <LifecycleA/> */}
       {/* <Cons/> */}
       {/* <User/> */}
       {/* <Student/> */}
       <UseEffectfun/>
      </div>
    );
  }
}

export default App;
