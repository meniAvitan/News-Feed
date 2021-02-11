import React, { Component } from 'react';
import Bussines from './Pages/Bussines';
import Entertainment from './Pages/Entertainment';
import Health from './Pages/Health';
import Sports from './Pages/Sport';
import Science from './Pages/Science';
import Technology from './Pages/Technology';
import World from './Pages/World';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './Components/Navigation/MainNavigation';
import SideDrower from './Components/Navigation/SideDrower/SideDrower';
import BeackDrop from './Components/Navigation/BeackDrop/BeackDrop';
import RightSideNews from './SideNews/RightSideNews';
import About from './Components/About/About';
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

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render(){
    let beackDrop;

    if(this.state.sideDrowerOpen){
      beackDrop =  <BeackDrop click = {this.beackDropClickHandler} />
    }
    return(
      
     
      <div style= {{height: '100%' }}>
      
     
      <HashRouter>
      <React.Fragment>
      <MainNavigation drowerClickHandler = {this.drowerToggleClickHendler}/>
      <div className ="scroll-up">
        <ScrollToTop showUnder={160}>
          <span> <img alt= 'scroll' src ={scrollUp}/> </span>
        </ScrollToTop>
      </div>
     
      
      <main className ='main-content'>
      <RightSideNews />
        <Switch>
          <Redirect from ='/' to = '/bussines' exact />
          <Route path = '/bussines' component = {Bussines}/>
          <Route path = '/entertainment' component = {Entertainment}/>
          <Route path = '/health' component = {Health}/>
          <Route path = '/sports' component = {Sports}/>
          <Route path = '/science' component = {Science}/>
          <Route path = '/technology' component = {Technology}/>
          <Route path = '/world' component = {World}/>
        </Switch>
        <div className= "v1"></div>
        <About />
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
