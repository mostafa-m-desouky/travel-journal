import React from 'react'
import "./card.css"

export default function Card (props)  {
  return (
    <section className='card'>
        <div className='container'>
            <div className='img-box'>
                <img src={props.imageUrl} alt={props.title} />
            </div>
            <div className='contents'>
                <div className='location'>
                    <div className='location-box'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{props.location}</span>
                    </div>
                    <p>View on Google Maps</p>
                </div>
                <div className='title'>
                    <h2>{props.title}</h2>
                </div>
                <div className='date'>
                    <span>{props.startDate} - {props.endDate}</span>
                </div>
                <div className='description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

