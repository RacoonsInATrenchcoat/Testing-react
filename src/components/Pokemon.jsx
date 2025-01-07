import React from 'react'

export default function Pokemon({ pokemonJSON, setMyFighter }) {
    // console.log(pokemonJSON);
    return (
        <>
            <div className="pokemon" onClick={() => {
                setMyFighter(pokemonJSON);
            }}>
                <img src={pokemonJSON.sprites.front_default} alt="Front_default" className="pokemon_sprite" />
                <ul  >
                         {pokemonJSON.name.toUpperCase()}

                    <li>
                        <b>HP:</b> {pokemonJSON.stats[0].base_stat}
                    </li>
                    <li>
                        <b>Attack:</b> {pokemonJSON.stats[1].base_stat}
                    </li>
                    <li>
                        <b>Defense:</b> {pokemonJSON.stats[2].base_stat}
                    </li>
                </ul>
            </div>
        </>

    )
};