import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from "./components/Results";
import ListItem from "./components/Results/ListItem";
import { Container, Row, Col } from "./components/Main";
import Search from "./components/Search";
import helpers from "./utils/helpers";




class App extends Component {

  state = { 
    term: '' ,
    datestart: '',
    dateend: '',
    articles: []
  }
  
  setQuery = (term, datestart, dateend) => {
    //When the form is submitted, prevent its default behavior, 
    //get articles update the articles state
    console.log('Inside setQuery')
    helpers.runQuery(term, datestart, dateend)
      .then(res => {
        console.log(res);
        this.setState({ articles: res.docs })

      })
      .catch(err => console.log(err));
  };



  render() {
    console.log(!this.state.articles);
    return (
        <div>
        <Container> 
          <Container className="searchformdiv"> 
            <Search updateSearch={this.setQuery.bind(this)}/> 
          </Container>
          
          <Container>
                {!this.state.articles ? (
                  <h1 className="emptyalert">Search for Articles</h1>
                  ) : (
                  <List>
                    {this.state.articles.map((article, index) => {
                      return (
                        <ListItem
                          key={index}
                          headline={article.headline.main}
                          url={article.web_url}
                          pub_date={article.pub_date}
                        />
                      );
                    })}
                  </List>
                )}
          </Container>
          
          <Container> 


          </Container>
        </Container>
        </div>
    );
  }
}

export default App;
