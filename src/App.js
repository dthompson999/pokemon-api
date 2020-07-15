import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [pokelist, setPokelist] = useState([]);

  const getPokemon = e => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
          .then(response => response.json())
          .then(response => setPokelist(response.results))
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <div className="jumbotron mt-5 bg-white text-warning shadow-lg rounded">
            <h1>Pokemon API</h1>
          </div>
          <button className="btn btn-outline-warning text-dark" type="text" onClick={getPokemon} value="Fetch Pokemon">Fetch Pokemon</button>
        </div>
        <table class="table table-striped table-hover table-dark mt-5 shadow-lg rounded">
          <thead class="thead text-warning">
            <tr>
              <th>Pokemon Name</th>
            </tr>
          </thead>
          <tbody>
          {pokelist.map((poke, index) => 
            <tr key={index}>
              <td>{poke.name}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
