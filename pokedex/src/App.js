import React from "react";
import axios from "axios";
import Header from "./component/Header";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movie : [],
      movieImage: [],
    };
  }

  componentDidMount() {
    const url = "https://api.themoviedb.org/3/tv/popular?api_key=d3ca35757329b1e58d8f3e823b92f650&language=en-US&page=1";
    axios(url).then((res) => {
      console.log(res.data.results)

      const serie = res.data.results

      this.setState({
        movie : serie
      })


    });
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>Bienvenue sur ma page Movie Mpy</h1>
        {this.state.movie.map(movies => {
          return <>

          <h2>{ "Titre : " + movies.name}</h2>
            <ul>
              <img src ={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}/>
              <li>{movies.overview}</li>
              <li>{movies.origin_country}</li>
              <li>{"Notes : " + movies.vote_average + "/10"} </li>
            </ul>
           
          </>
        })}
        
          
      
      </div>
    );
  }
}
export default App;
