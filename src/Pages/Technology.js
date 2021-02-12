import React, { Component } from 'react';
import NewSingel from '../Components/Navigation/NewSingel';
import Error from '../Components/Navigation/Error';
import '../App.css';

class Technology extends Component{
    constructor(props){
        super(props);
        this.state = {
            news: [],
            error: false
        };
    }

    componentDidMount(){
        //const url = 'http://newsapi.org/v2/top-headlines?sources=google-news-is&apiKey=416ec7089a83456189a882e8a89b739f';

       // const url = 'https://gnews.io/api/v4/top-headlines?q=nation&lang=en&token=9d45c178d3736544cca1dce8d70b2835';
       //m054849...
       const url = 'https://gnews.io/api/v4/top-headlines?q=technology&lang=en&token=9060e09ee5db34d42bbd2f0479cd797a';
       //meni.av053
       //const url = 'https://gnews.io/api/v4/top-headlines?q=technology&lang=en&token=30252127d965277ab27a0f43c8067549';
      //const url = 'http://api.mediastack.com/v1/news?access_key=d6ffde1756e20e9c370a743854633cbb&keywords=tennis&countries=il&language=he';
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

export default Technology;
