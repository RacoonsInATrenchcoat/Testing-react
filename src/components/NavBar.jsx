import React from 'react'

export default function NavBar({ setPage, setEnemyObject, setMyFighter }) {
    return (
        <button onClick={() => {
            setPage({ name: "home", url: undefined });
            setEnemyObject(false);
            setMyFighter(false);
        }}>Reset</button>
    )
}
