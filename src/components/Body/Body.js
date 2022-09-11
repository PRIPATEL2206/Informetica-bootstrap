import React from 'react'
import MainAgenda from '../MainAgenda/MainAgenda'
import RecentNotification from '../recentNotification/recentNotification'
import Schemes from '../schemes/Schemes'
import '../comon.css'

export default function Body() {
    return (
        <div className='mt-4 container'>
            <div className="d-flex flex-row f-wr">
                <MainAgenda />
                <RecentNotification />
            </div>
            <Schemes/>
        </div>
    )
}
