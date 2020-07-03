import React from 'react'

const Card = ({picture,name}) => {
    return (
        <article className="card">
        <div className="img-container s-ratio-16-9">
           <img src={picture} alt={name} />
        </div>
        <div className="card__data">
           <h3 className="t4 center">{name}</h3>
        </div>
        </article>
    )
}

export default Card
