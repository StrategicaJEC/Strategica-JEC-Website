import React from 'react';

import Layout from "../components/Layout"
import SEO from "../components/seo"

import "./events.css";
const About = () => {
    return (
        <Layout>
        <SEO title="Events"/>
            <div className="events animated fadeIn">
                <div className="container banner">
                    <h1 className="display-3">EVENTS AND ACTIVITIES</h1>
                </div>
                <div className="container-fluid py-4 main">
                    <div className="timeline">
                        <div className="time-container left">
                            <div className="content">
                                <h2>30 April 2020</h2>
                                <p>
                                    A moment of pride arrived for us as we got the opportunity to hear to retired IAS officer, <strong>Mr. Anil Swarup</strong>, former Coal and School Education Secretary on <strong>'Digital India:What COVID-19 has to offer in this regard'</strong> in our club's webinar session.
                                </p>
                            </div>
                        </div>
                        <div className="time-container right">
                            <div className="content">
                                <h2>22 April 2020</h2>
                                <p>
                                    On the occasion of World Earth Day, Strategica organised a webinar on <strong>'Sustainable Waste Management: How emerging technologies can help mitigate and respond to epidemic outbreak risks with special reference to COVID-19'</strong> by <strong>Mr. Moharana Choudhury</strong>. Our guest speaker has been a ex-research fellow of ISRO and a recipient of India's Great Leaders Award.
                                </p>
                            </div>
                        </div>
                        <div className="time-container left">
                            <div className="content">
                                <h2>Club members are doing a study:</h2>
                                <ul>
                                    <li>Impact analysis of COVID19 on Indian economy </li>
                                    <li>Prediction analysis of Assam's agricultural sector post lockdown and Bordoisila, with a special focus on Assam floods and the resulting food inflation in the market.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default About;