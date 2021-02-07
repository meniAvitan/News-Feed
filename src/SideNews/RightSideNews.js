import React, { Component } from 'react';
import SingelSide from './SingelSide';
import '../App.css';
import Error from '../Components/Navigation/Error';

class RightSideNews extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            sidenews: [],
            error: false
        };
    }

    componentDidMount(){
       const url = 'https://gnews.io/api/v4/search?q=example&token=9d45c178d3736544cca1dce8d70b2835';

        fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({
                sidenews: data.articles
            })
        })
        .catch((error)=> { 
            this.setState({
            error: true
            })
        });
    }
    renderItems() {
        if(!this.state.error){
            return this.state.sidenews.map((item)=>(
                <SingelSide key = {item.url} item = {item}/>
            ));
        }else{
            <Error />
        }
       
    }
    render(){
        return(
            <div >
                
                    {this.renderItems()}
                
            </div>
        );
    }
}
export default RightSideNews;