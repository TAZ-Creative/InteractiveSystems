
import {useState, useEffect} from 'react';
import './App.css';
import APIKey from './config';
import Movie from './components/Movie';

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';

function App() {

  const [movieResults, setmovieResults] = useState([]);
 

  useEffect( () => {
      fetch(APIURL + APIKey)
      .then( (resp) => resp.json() )
      .then( (data) => setmovieResults(data.results))//console.log(data))
  },[])

  return (
    <>
    {movieResults.map(
       (element, index) => (<Movie key={index}/>)

    )}
    </>
    
  );
}

export default App;
