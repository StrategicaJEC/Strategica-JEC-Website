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
                    <h1 className="display-3">EVENTS</h1>
                </div>
                <div className="container-fluid py-4 main">
                    <div className="timeline">
                        <div className="time-container left">
                            <div className="content">
                                <h2>DD-MM-YYYY</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nulla voluptates neque eligendi officiis sequi accusamus fugit aliquid aut. Aliquid recusandae eos dolorum tempore facilis perferendis. Quis, voluptate? Voluptatum, perferendis?</p>
                            </div>
                        </div>
                        <div className="time-container right">
                            <div className="content">
                                <h2>DD-MM-YYYY</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nulla voluptates neque eligendi officiis sequi accusamus fugit aliquid aut. Aliquid recusandae eos dolorum tempore facilis perferendis. Quis, voluptate? Voluptatum, perferendis?</p>
                            </div>
                        </div>
                        <div className="time-container left">
                            <div className="content">
                                <h2>DD-MM-YYYY</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nulla voluptates neque eligendi officiis sequi accusamus fugit aliquid aut. Aliquid recusandae eos dolorum tempore facilis perferendis. Quis, voluptate? Voluptatum, perferendis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default About;