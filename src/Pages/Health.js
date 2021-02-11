import React, { Component } from 'react';
import NewSingel from '../Components/Navigation/NewSingel';
import Error from '../Components/Navigation/Error';
import '../App.css';

class Health extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            error: false
        };
    }

    componentDidMount(){
        // const url = 'http://newsapi.org/v2/top-headlines?sources=google-news-is&apiKey=416ec7089a83456189a882e8a89b739f';
      
        const url = 'https://gnews.io/api/v4/top-headlines?q=health&lang=en&token=30252127d965277ab27a0f43c8067549';
        // const url = 'https://gnews.io/api/v4/top-headlines?q=world&lang=he&token=30252127d965277ab27a0f43c8067549';
      
        fetch(url)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            this.setState({
                news: data.articles
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
            return this.state.news.map((item)=>(
                <NewSingel key = {item.url} item = {item}/>
            ));
        }else{
            return <Error />
        }
    }
    render(){
        return(
            <div className ="row">
                
                    {this.renderItems()}
                
            </div>
        );
    }
}
export default Health;