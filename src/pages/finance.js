import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import './finance.css'

const Finance = () => (
    <Layout>
    <SEO title="Finance"/>
        <div className="finance-wrapper">
            <div className="container finance d-flex justify-content-center align-items-center flex-column animated fadeIn slow">
                <div className="row">
                    <div className="row heading-row">
                        <div className="col d-flex justify-content-center align-items-start flex-column">
                            <h1 className="text-center"><u>FINANCE WING</u></h1>
                            <span className="mt-2"><i>"Price is what you pay. Value is what you get."<br/>~ Warren Buffet</i></span>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-start align-items-start details flex-column text-left">
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
                            <li>Anurag Kashyap</li>
                            <li>Akangshya Pathak</li>
                            <li>Aritra Kaushik</li>
                            <li>Bedabrat Talukdar</li>
                            <li>Prasanta Jyoti Malakar</li>
                            <li>Rimon Dutta</li>
                            <li>Seemanta Shome</li>
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
                            <li>Abinash Barman</li>
                            <li>Anusikha Goswami</li>
                            <li>Chirantan Bhuyan</li>
                            <li>Debadeep Dutta</li>
                            <li>Gunjan Pratim Buragohain</li>
                            <li>Kritartha Gautam</li>
                            <li>Meghna Goswami</li>
                            <li>Tamzid Ahmed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Finance