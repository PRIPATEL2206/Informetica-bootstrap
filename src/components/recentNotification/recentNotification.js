import React from 'react'
import '../comon.css'
import "./recentNotification.css"
import Notifications from './notifications'

export default function recentNotification() {
    return (
        <div className='ms-3  overflow-auto'>
            <h3 className='bg-c-gr text-light bo-ro text-center p-2'>Recent Notification</h3>
            <Notifications/>
        </div>
    )
}
