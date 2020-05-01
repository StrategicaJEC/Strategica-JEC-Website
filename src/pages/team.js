import React, {useEffect} from "react"
import Particles from "react-particles-js"
import { Link } from "gatsby"
import AOS from 'aos'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Member from "../components/member"

import './team.css'

const paraticlesOptions = {
    "particles": {
        "number": {
            "value": 50
        },
        "size": {
            "value": 3
        },
        "color": {
            "value": "#ffffff"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
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
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588277213/Strategica/teams/f1_xnw7m6.jpg"
                        />
                    </div>
                    <div className="col-sm-6 my-2 even">
                        <Member 
                            name="Pankaj Sharma" 
                            role="Assistant Professor" 
                            dep="Electrical Engineering"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588277213/Strategica/teams/f2_ogp1qy.jpg"
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
                            url="https://i.picsum.photos/id/234/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member
                            name="Sherya Simanta Sarmah" 
                            role="Club Secretary"
                            url="https://i.picsum.photos/id/137/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6  odd">
                        <Member 
                        invert={true}  
                            name="Arpita Sarkar" 
                            role="Social Media Head"
                            url="https://i.picsum.photos/id/337/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member 
                            invert={true} 
                            name="Rishparn Gogoi" 
                            role="Design head"
                            url="https://i.picsum.photos/id/265/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            name="Subhranan Bora" 
                            role="PR & Event Head"
                            url="https://i.picsum.photos/id/366/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            name="Parishmita Das" 
                            role="Content Head"
                            url="https://i.picsum.photos/id/265/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            invert={true} 
                            name="Seemanta Shome" 
                            role="Economics & Consulting Head"
                            url="https://i.picsum.photos/id/232/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            invert={true} 
                            name="Anurag Kashyap" 
                            role="Finance Head"
                            url="https://i.picsum.photos/id/637/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member  
                            name="Akangshya Pathak" 
                            role="Analytics Head"
                            url="https://i.picsum.photos/id/537/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 even">
                        <Member  
                            name="Mriganka Mandal" 
                            role="Research Head"
                            url="https://i.picsum.photos/id/437/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 odd">
                        <Member 
                            invert={true} 
                            name="Bedabrat Talukdar" 
                            role="Resource Head"
                            url="https://i.picsum.photos/id/288/250/250.jpg"
                            noImage={true}
                        />
                    </div>
                </div>
            </div>
            <div className="container alumuni sections">
                <h1 className="text-center heading-t">ALUMUNI MEMBERS</h1>
                <hr/>
                <div className="text-center mb-2">
                    <span>"Leaders instill in their people a hope for success and a belief in themselves. Positive leaders empower people to accomplish their goals."</span>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member  
                            name="Subhasmit Malakar" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276822/Strategica/teams/alumni1_btacvj.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member  
                            name="Arnab Jyoti Bordoloi" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276822/Strategica/teams/alumni2_riqmba.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Nishant Saikia"
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276823/Strategica/teams/alumni3_xie7ye.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member 
                            invert={true}  
                            name="Kharan Basumatary" 
                            role="Alumni Mentor"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276823/Strategica/teams/alumni4_ymusne.jpg"
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
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276822/Strategica/teams/sm1_kp10um.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member  
                            name="Dibyajyoti Chatterjee" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276822/Strategica/teams/sm2_qonyef.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Partha Pratim Mazumder" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276823/Strategica/teams/sm3_ygsvuu.jpg"
                        />
                    </div>
                    <div className="col-md-6 even">
                        <Member 
                            invert={true}  
                            name="Rohit Deka" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276823/Strategica/teams/sm4_ewtgy0.jpg"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 odd">
                        <Member 
                            invert={true}  
                            name="Jayant Siktia" 
                            role="Senior Member"
                            url="https://res.cloudinary.com/dmmrlohoi/image/upload/v1588276823/Strategica/teams/sm5_kemrpi.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)}

export default Team
