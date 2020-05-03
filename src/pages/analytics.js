import React from 'react'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './analytics.css'

const Analytics = () => (
    <Layout>
        <SEO title="Analytics" description="Analytics 2020 Team of Strategica, Jorhat Engineering College"/>
        <div className="analytics-wrapper">
            <div className="container analytics d-flex justify-content-center align-items-center flex-column animated fadeIn slow">
                <div className="row">
                    <div className="row heading-row">
                        <div className="col d-flex justify-content-center align-items-start flex-column">
                            <h1 className="text-center"><u>ANALYTICS WING 2020-21</u></h1>
                            <span className="mt-2"><i>"Information is the oil of the 21st century and analytics is the combustion engine."<br />~ Peter Sondergaard</i></span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start align-items-start details flex-column text-left">
                        {/* <img src={TeamImg} alt="" className="team-image" /> */}
                        <h2>
                            Executive Members
                    </h2>
                        <hr
                            style={{
                                zIndex: "1",
                                width: "100%",
                                margin: "0",
                                marginBottom: '1rem'
                            }}
                        />
                        <ul>
                            <li>Akangshya Pathak</li>
                            <li>Apeksha Modi</li>
                            <li>Parishmita Das</li>
                            <li>Priyanka Banik</li>
                            <li>Priyanka Nandy</li>
                            <li>Souvik Baruah</li>
                            <li>Sreeya Dutta</li>
                            <li>Subhranan Bora</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start align-items-start form-col flex-column text-left">
                        <h2>
                            Assistant Core Members
                        </h2>
                        <hr
                            style={{
                                zIndex: "1",
                                width: "100%",
                                margin: "0",
                                marginBottom: '1rem'
                            }}
                        />
                        <ul>
                            <li>Arnavjyoti Kalita</li>
                            <li>Dhritimoy Majumdar</li>
                            <li>Harsh Bordhan Singh</li>
                            <li>Himraj Gogoi</li>
                            <li>Kobal Dip Das</li>
                            <li>Pranjit Goswami</li>
                            <li>Pritom Deka</li>
                            <li>Rishparn Gogoi</li>
                            <li>Tanmoy Saikia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Analytics
