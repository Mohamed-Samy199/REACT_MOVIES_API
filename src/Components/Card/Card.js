import React from 'react'
import "./Card.css"

const Card = (props) => {
    console.log(props.send)
    let img_path = "https://image.tmdb.org/t/p/w500"
    return (
        <div className='box'>
            <div className='poster'>
                <img src={img_path + props.send.poster_path} alt='poster' />

                <div className='title'>
                    <h4>{props.send.title}</h4>
                    <p>{props.send.vote_average}</p>
                </div>
            </div>

            <div className='overlay'>
                <h3>overview</h3>
                <p>{props.send.overview}</p>
            </div>
        </div>
    )
}
export default Card
