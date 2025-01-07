import React from 'react';
import Title from './Title';
import PlayerCard from './PlayerCard';
import EncounterCard from './EncounterCard';

export default function FighterChooser(
    { pageName, myPokemons, myFighter, setMyFighter, enemyObject }) {

    return (
        <>
            <Title text={pageName.toUpperCase()} size={2} />
            <div id="fight">
                <PlayerCard myPokemons={myPokemons} myFighter={myFighter} setMyFighter={setMyFighter} />
                <EncounterCard enemyObject={enemyObject} />
            </div>
        </>
    )
}