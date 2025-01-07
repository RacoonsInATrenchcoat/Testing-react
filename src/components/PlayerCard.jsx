import React from 'react';
import Title from './Title';
import Pokemon from './Pokemon';

export default function PlayerCard({ myPokemons, myFighter, setMyFighter }) {
    return (
        <div id="my_pokemones">
            <Title text={"⭐ MY POKEMONS ⭐"} size={3} />
            {
                myFighter
                    ?
                    <Pokemon pokemonJSON={myFighter} />
                    :
                    myPokemons.map(pokemon => (
                        <Pokemon key={pokemon.name} pokemonJSON={pokemon} setMyFighter={setMyFighter} />
                    ))
            }
        </div>
    )
}
