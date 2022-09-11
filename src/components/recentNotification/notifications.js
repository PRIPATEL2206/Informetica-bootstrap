import React from 'react'
import agendaImage from "../image/mainAgenda.png"


export default function notifications() {
    return (
        <>
            <div className="card mb-3 " style={{ "max-width": "540px" }}>
                <div className="row g-0 p-2">
                    <div className="col-md-4">
                        <img src={agendaImage} className="img-fluid rounded-start bo-ro" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-c ps-1">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card mb-3 " style={{ "max-width": "540px" }}>
                <div className="row g-0 p-2">
                    <div className="col-md-4">
                        <img src={agendaImage} className="img-fluid rounded-start bo-ro" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-c ps-1">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 " style={{ "max-width": "540px" }}>
                <div className="row g-0 p-2">
                    <div className="col-md-4">
                        <img src={agendaImage} className="img-fluid rounded-start bo-ro" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-c ps-1">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
