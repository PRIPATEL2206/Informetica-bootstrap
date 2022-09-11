import React from 'react'
import agendaImage from "../image/mainAgenda.png"
import  "./mainAgenda.css"


export default function MainAgenda() {
    return (
            <div className="card text-bg-dark w-75 min-vw-50 overflow-hidden mh-50">
                <img src={agendaImage} className="card-img " alt="..."/>
                    <div className="card-img-overlay-c set-end">
                        <h2 className="card-title text-dark">Card title</h2>
                        <p className="card-text text-dark">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text text-dark"><small>Last updated 3 mins ago</small></p>
                    </div>
                    
            </div>
    )
}
