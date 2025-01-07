import React from 'react';
import Title from './Title';
import Pokemon from './Pokemon';

export default function EncounterCard({ enemyObject }) {
    return (
        <div id="otherPokemon">
            {
                typeof enemyObject === "string"
                    ?
                    <>
                        <Title text={"☠️ ENEMY ☠️"} size={3} />
                        <Title text={enemyObject} size={5} />
                        
                    </>
                    :
                    <>
                        <Title text={"☠️ ENEMY ☠️"} size={3} />
                        <Pokemon pokemonJSON={enemyObject} />
                        <button id="fightButton">⚡ F I G H T ! ⚡</button>
                    </>
            }
        </div>
    )
}

