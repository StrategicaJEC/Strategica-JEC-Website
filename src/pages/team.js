import React, {useEffect} from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import AOS from 'aos'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Member from "../components/member"

import './team.css'

const paraticlesOptions = {
    particles: {
        number: {
            value: 50
        },
        size: {
            value: 3
        },
        color: {
            value: "#FFF"
        },
        line_linked: {
            enable: true,
            color: "#FFF",
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }
};

const Team = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);
    
    return(
    <Layout>
        <SEO title="Team" />
        <div className="particle-cover">
            <Particles className="particles animated fadeIn delay-1s" params={paraticlesOptions} />
        </div>
        <div className="team animated fadeIn slow">
            <div className="container hero">
                <h1 className="text-center heading-t">THE TEAM</h1>
            </div>
            <div className="container faculty sections">
                <h1 className="text-center heading-t">FACULTY COORDINATORS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"A leader is one who knows the way, goes the way, and shows the way." ~ John C. Maxwell</span>
                </div>

                <div className="row">
                    <div className="col-sm-6 my-2 odd">
                        <Member 
                            name="Syed Ibtisam Tauhidi" 
                            role="Assistant Professor" 
                            dep="Computer Science and Engineering"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403528/Team/Syed_Ibtisam_Tauhidi_wds234.jpg"
                        />
                    </div>
                    <div className="col-sm-6 my-2 even">
                        <Member 
                            name="Pankaj Sharma" 
                            role="Assistant Professor" 
                            dep="Electrical Engineering"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403528/Team/Pankaj_Sharma_beugzx.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className="container lead-team sections">
                <h1 className="text-center heading-t">LEAD TEAM</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals."</span>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member
                            name="Ibtizam Choudhury"
                            role="Club President"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member
                            name="Shreya Simanta Sarmah" 
                            role="Club Secretary"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6  odd">
                        <Member 
                        invert={true}  
                            name="Arpita Sarkar" 
                            role="Social Media Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member 
                            invert={true} 
                            name="Rishparn Gogoi" 
                            role="Design head"
                            noImage={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            name="Subhranan Bora" 
                            role="PR & Event Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            name="Parishmita Das" 
                            role="Content Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            invert={true} 
                            name="Seemanta Shome" 
                            role="Economics & Consulting Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            invert={true} 
                            name="Anurag Kashyap" 
                            role="Finance Head"
                            noImage={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            name="Akangshya Pathak" 
                            role="Analytics Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            name="Mriganka Mandal" 
                            role="Research Head"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member 
                            invert={true} 
                            name="Bedabrat Talukdar" 
                            role="Resource Head"
                            noImage={true}
                        />
                    </div>
                </div>
            </div>
            <div className="container alumuni sections">
                <h1 className="text-center heading-t">ALUMNI MEMBERS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals."</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member  
                            name="Shubhasmit Malakar" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403593/Team/Shubhasmit_Malakar_pipenc.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member  
                            name="Arnab Kishor Bordoloi" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403592/Team/Arnab_Kishor_Bordoloi_huw0jz.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Nishant Saikia"
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403594/Team/Nishant_Saikia_rdwevk.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member 
                            invert={true}  
                            name="Kharan Basumatary" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403592/Team/Kharan_Basumatary_iqzxdw.jpg"
                        />
                    </div>
                </div>
            </div>
            <div className="container senior sections">
                <h1 className="text-center heading-t">SENIOR MEMBERS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"The very essence of leadership is that you have to have vision. You can't blow an uncertain trumpet." ~ Theodore M. Hesburgh</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member  
                            name="Trideep Kr. Batchayan" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403664/Team/Trideep_Kr._Batchayan_kkp7ge.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member  
                            name="Dibyajyoti Chatterjee" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403663/Team/Dibyajyoti_Chatterjee_nwwqcw.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Partha Pratim Mazumder" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403663/Team/Partha_Pratim_Mazumder_qsjd5b.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member 
                            invert={true}  
                            name="Rohit Deka" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403663/Team/Rohit_Deka_xfnjuq.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Jayant Siktia" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dog2bkgwo/image/upload/v1588403663/Team/Jayant_Siktia_xbfhgr.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)}

export default Team
