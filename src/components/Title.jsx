import React from 'react'

export default function Title({ text, size}) {
    switch (size) {
        case 1:
            return <h1 className="title">{text}</h1>;
        case 2:
            return <h2 className="title">{text}</h2>;
        case 3:
            return <h3 className="title">{text}</h3>;
        case 4:
            return <h4 className="title">{text}</h4>;
        case 5:
            return <h5 className="title">{text}</h5>;
        case 6:
            return <h6 className="title">{text}</h6>;
        default:
            break;
    }
}
