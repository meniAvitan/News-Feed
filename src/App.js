import React, { Component } from 'react'
import MainNews from './Pages/MainNews';
import Technology from './Pages/Technology';
import Booking from './Pages/Booking';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './Components/Navigation/MainNavigation';
import SideDrower from './Components/Navigation/SideDrower/SideDrower';
import BeackDrop from './Components/Navigation/BeackDrop/BeackDrop';
import RightSideNews from './SideNews/RightSideNews';
import { HashRouter } from "react-router-dom";
import ScrollToTop from 'react-scroll-up';
import scrollUp from './Components/Navigation/scroll_up.png';





class App extends Component{
  state = {
    sideDrowerOpen: false
  };
  
  drowerToggleClickHendler =() =>{
    this.setState((prevState)=>{
      return{sideDrowerOpen: !prevState.sideDrowerOpen};
    });
  };

  beackDropClickHandler = () =>{
    this.setState({sideDrowerOpen: false})
  };

  
  render(){
    let beackDrop;

    if(this.state.sideDrowerOpen){
      beackDrop =  <BeackDrop click = {this.beackDropClickHandler} />
    }
    return(
      
     
      <div style= {{height: '100%'}}>
      
     
      <HashRouter>
      <React.Fragment>
      <MainNavigation drowerClickHandler = {this.drowerToggleClickHendler}/>
      <div className ="scroll-up">
        <ScrollToTop showUnder={160}>
          <span> <img alt= 'scroll' src ={scrollUp}/> </span>
        </ScrollToTop>
      </div>
     
      {/* <RightSideNews /> */}
      <main className ='main-content'>
        <Switch>
          <Redirect from ='/' to = '/mainNews' exact />
          <Route path = '/mainNews' component = {MainNews}/>
          <Route path = '/technology' component = {Technology}/>
          <Route path = '/booking' component = {Booking}/>
        </Switch>
      </main>
      <SideDrower  show = {this.state.sideDrowerOpen}/>
      {beackDrop}
      </React.Fragment>
      </HashRouter>
     
     
      </div>
    
    );
  
  }
 
}

export default App;
