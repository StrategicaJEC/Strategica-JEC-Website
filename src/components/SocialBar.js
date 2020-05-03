import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-analytics"

import './SocialBar.css'

const SocialBar = () => {
    return (
        <div className="socialBar">
            <div className="socialItem" style={{ backgroundColor: '#4064ad' }}>
                <OutboundLink href="https://www.facebook.com/strategicajecofficial/" target="_new">
                    <i class="fab fa-facebook-f" />
                </OutboundLink>
            </div>
            <div className="socialItem" style={{ background: '#7e1094' }}>
                <OutboundLink href="https://www.instagram.com/strategica_jec/" target="_new">
            <i class="fab fa-instagram" />
            </OutboundLink>
               
            </div>
            <div className="socialItem" style={{ backgroundColor: '#0077b5' }}>
            <OutboundLink href="https://www.linkedin.com/company/strategica-jec/" target="_new">
                <i class="fab fa-linkedin-in" />
            </OutboundLink>
            </div>
        </div>
    )
}

export default SocialBar
