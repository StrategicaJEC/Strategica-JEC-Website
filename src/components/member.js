import React, { useEffect } from 'react'
import AOS from 'aos'

import './member.css'

const Member = ({ url, name, role, dep, invert, noImage }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <React.Fragment>
            {invert && !noImage ? (
                <div className="member-card row shadow invert" data-aos="zoom-in-up">
                    <div className="col-6 image d-flex justify-content-center align-items-center">
                        <img src={url} alt={name} />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center name">
                        <h1>{name}</h1>
                        <h3>{role}</h3>
                        {role === "Assistant Professor" ? (<h3>{dep}</h3>) : (<></>)}
                    </div>
                </div>
            ) : !invert && !noImage ? (
                <div className="member-card row shadow normal" data-aos="zoom-in-up">
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center name">
                        <h1>{name}</h1>
                        <h3>{role}</h3>
                        {role === "Assistant Professor" ? (<h3>{dep}</h3>) : (<></>)}
                    </div>
                    <div className="col-6 image d-flex justify-content-center align-items-center">
                        <img src={url} alt={name} />
                    </div>
                </div>
            ) : (
                <div className="member-card row shadow normal no-image" data-aos="zoom-in-up">
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center name">
                        <h1>{name}</h1>
                        <h3>{role}</h3>
                        {role === "Assistant Professor" ? (<h3>{dep}</h3>) : (<></>)}
                    </div>
                </div>
                    )}
        </React.Fragment>

    )
}

export default Member
