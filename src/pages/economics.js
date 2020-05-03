import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './economics.css'

const Economics = () => (
    <Layout>
    <SEO title="Economics & Consulting"  description="Economics & Consulting 2020 Team of Strategica, Jorhat Engineering College"/>
        <div className="economics-wrapper">
            <div className="container economics d-flex justify-content-center align-items-center flex-column animated fadeIn slow">
                <div className="row">
                    <div className="row heading-row">
                        <div className="col d-flex justify-content-center align-items-start flex-column">
                            <h1 className="text-center"><u>ECONOMICS & CONSULTING WING 2020-21</u></h1>
                            <span className="mt-2"><i>"Labour was the first price, the original purchase - money that was paid for all things. It was not by gold or by silver, but by labour, that all wealth of the world was originally purchased."<br />~ Adam Smith</i></span>
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
                            <li>Bijay Verma</li>
                            <li>Debashish Talukdar</li>
                            <li>Hiya Bandana Bora</li>
                            <li>Seemanta Shome</li>
                            <li>Shreya Simanta Sarmah</li>
                            <li>Sreeya Dutta</li>
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
                            <li>Anjan Pathak</li>
                            <li>Anudit Das</li>
                            <li>Angshuman Bora</li>
                            <li>Chinmoy De Kashyap</li>
                            <li>Debaditya Sarma</li>
                            <li>Mayur Chetia</li>
                            <li>Mriganabh Bhargab Saikia</li>
                            <li>Papumoni Deka</li>
                            <li>Parikhshit Bora</li>
                            <li>Swapnil Gautam</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Economics