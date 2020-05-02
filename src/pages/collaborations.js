import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './collaborations.css'

const Collaborations = () => {
    return (
        <Layout>
            <SEO title="Events" />
            <div className="collab">
                <div className="container-fluid banner">
                    <h1>COLLABORATOINS</h1>
                </div>
                <div className="container py-4 main animated fadeIn slow">
                    <h2>Strategica-JEC takes pride in collaborating with Consulting & Analytics Club, IIT-Guwahati as our knowledge partner.</h2>
                    <div className="text-center">
                        <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403980/Logo/consulting_and_analytics_club_IITG_zskq5b.jpg" alt="Consulting & Analytics Club, IIT-G Logo" />
                    </div>
                    <h2 className="mt-2">Strategica-JEC takes pride in joining hands with our project partner, Finance & Economics Club, IIT-Guwahati.</h2>
                    <div className="text-center">
                        <img src="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403959/Logo/finance_and_economics_club_IITG_iup9we.jpg" alt="Finance and Economics Club IIT-G logo" />
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default Collaborations;