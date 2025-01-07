import './App.css';
import { useState, useEffect } from 'react';
import Locations from './components/Locations.jsx';
import FighterChooser from './components/FighterChooser.jsx';
import fetchData from './api/fetch.js';
import NavBar from './components/NavBar.jsx'

function App() {

  const starterNames = ['snorlax', 'poliwhirl', 'haunter'];

  const [locations, setLocations] = useState([]); //all locations 
  const [enemyObject, setEnemyObject] = useState(false); // all areas - in the chosen location [{name:"", url:""},{name:"", url:""}]
  const [page, setPage] = useState({ name: 'home', url: undefined }); //FORM-> { name:"", url:"" } 
  const [myPokemons, setMyPokemons] = useState([]); // change it to pokemons so we can use theh set method to add more to it 
  const [myFighter, setMyFighter] = useState(false);

  useEffect(() => {
    async function setBase() {
      const pokemons = await Promise.all(starterNames.map(name => fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)));
      const locations = await fetchData("https://pokeapi.co/api/v2/location");
      setMyPokemons(pokemons);
      setLocations(locations.results);
    }
    setBase();
  }, []);

  useEffect(() => {
    async function fetchURL() {
      if (page.name !== "home") {
        const location = await fetchData(page.url);
        let enemy;
        if (location.areas.length > 0) {
          const randomLocIndex = Math.floor(Math.random() * location.areas.length);
          const randomAreaURL = location.areas[randomLocIndex].url; //Random area instead 0
          //console.log("chosenURL", randomAreaURL, location.areas.length);

          const pokemonsInChosenArea = await fetchData(randomAreaURL);
          //console.log("pokemons In Random Area: ", pokemonsInChosenArea);

          const randomPokemonIndex = Math.floor(Math.random() * pokemonsInChosenArea.pokemon_encounters.length); // Math.ceil, Math.round, Math.floor
          const enemyURL = pokemonsInChosenArea.pokemon_encounters[randomPokemonIndex].pokemon.url; //Random pokemon instead 0
          //console.log("enemy", enemyURL);

          enemy = await fetchData(enemyURL);
        } else { enemy = "This location doesn't seem to have any pokémon" }
        //console.log("FINAL ENEMYOBJECT <3 ", enemy);
        setEnemyObject(enemy);
      }
    }
    fetchURL();
  }, [page]);

  return (
    <>
      <NavBar setPage={setPage} setEnemyObject={setEnemyObject} setMyFighter={setMyFighter} />
      {
        enemyObject ?
          <FighterChooser
            pageName={page.name}
            myPokemons={myPokemons}
            myFighter={myFighter}
            setMyFighter={setMyFighter}
            enemyObject={enemyObject}
          />
          :
          <Locations
            locations={locations}
            setPage={setPage} />
      }
    </>
  );
}

export default App;
