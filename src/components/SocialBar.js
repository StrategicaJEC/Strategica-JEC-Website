import React from 'react'

import './SocialBar.css'

const SocialBar = () => {
    return (
        <div className="socialBar">
            <div className="socialItem" style={{backgroundColor: '#4064ad'}}>
                <i class="fab fa-facebook-f"/>
            </div>
            <div className="socialItem" style={{background: '#7e1094'}}>
                <i class="fab fa-instagram" />
            </div>
            <div className="socialItem" style={{backgroundColor: '#0077b5'}}>
                <i class="fab fa-linkedin-in"/>
            </div>
        </div>
    )
}

export default SocialBar
