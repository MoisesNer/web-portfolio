import React from 'react'
import './contact.css'
import { pages } from '../../data/pagesData'

export default function Contact() {
    return (
        <>
        <div className='contactHero'>
                <h1>{pages[1].hero}</h1>
        </div>

            <div className="contactContainer">
                <div className="columnLeft">
                    <h1>{pages[1].title}</h1>
                    <p>{pages[1].text}</p>
                </div>
            <div className="columnRight">
                <img src={pages[1].heroImg} alt={pages[1].alt} />
            </div>
            </div>

        </>
    )
}
