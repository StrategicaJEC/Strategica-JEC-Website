import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './research.css'

const Research = () => (
    <Layout>
    <SEO title="Research" description="Research 2020 Team of Strategica, Jorhat Engineering College"/>
        <div className="research-wrapper">
            <div className="container research d-flex justify-content-center align-items-center flex-column animated fadeIn slow">
                <div className="row">
                    <div className="row heading-row">
                        <div className="col d-flex justify-content-center align-items-start flex-column">
                            <h1 className="text-center"><u>RESEARCH WING 2020-21</u></h1>
                            <span className="mt-2"><i>"The true laboratory is the mind, where behind illusions we uncover the laws of truth"<br/>~ Jagadish Chandra Bose</i></span>
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
                            <li>Arpita Sarkar</li>
                            <li>Bedabrat Talukdar</li>
                            <li>Bishal Das</li>
                            <li>Lakshmishree Saikia</li>
                            <li>Manas Pratim Goswami</li>
                            <li>Mriganka Mandal</li>
                            <li>Rahul Sharma</li>
                            <li>Rajdeep Das</li>
                            <li>Shreya Simanta Sarmah</li>
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
                            <li>Anupam Bharati</li>
                            <li>Arantara Choudhury</li>
                            <li>Chinmoy De Kashyap</li>
                            <li>Diya Karmakar</li>
                            <li>Hrithik Pradhan</li>
                            <li>Manish Tapan Deka</li>
                            <li>Syed Arshadul Haque</li>
                            <li>Tanmoy Sarma</li>
                            <li>Tanmoy Saikia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Research