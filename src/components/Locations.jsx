import React from 'react'

export default function Locations({ locations, setPage }) {
    return (
        <div>
            <h3 className="title">📍CHOSE A LOCATION 📍</h3>
            <div className='locations'>

                <ul>
                    {
                        locations
                            ?
                            locations.map(data => <li className="locationElement" key={data.name}
                                onClick={() => {
                                    setPage({ name: "choseFighter", url: data.url });
                                    }}>{data.name.toUpperCase()}</li>)
                            :
                            <li>No location</li>}
                </ul>
            </div>
        </div>

    )
}