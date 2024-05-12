import React , { useRef }  from 'react';
import OrgNavBar2 from './NavbarOrg';
import Footer from '../Footer';
import CountUp from 'react-countup';
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import DonationImpact from './Success';
import Testimonials from './testimonials';
import './Org.css';


function AboutBox() {
    return (
        <div id="about-box" className="about-box">
            <h2 >About Us</h2>
            <p style={{ fontFamily: 'poppins', color: 'black', fontSize: '20px' }}>We aim to improve lives through the generosity of our
                donors. Every donation contributes to making the world
                a better place. A myriad of donations can be made such as food, clothing, medicine, and many more.
                Through these donations, many individuals and communities are able to receive the support and resources
                they need to thrive. Our donations are classified into different categories.</p>
        </div>
    );
}



const OrgMain2 = () => {
    const bannerStyle = {
        position: 'relative',
        color: 'white',
        background: 'url(https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Collections/UNHCR/Embargoed%202/03-11-2022_UNICEF_Guatemala.jpg/image1170x530cropped.jpg) no-repeat center center',
        backgroundSize: 'cover',
        height: '500px', // Adjust based on your needs
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(54, 77, 121, 0.8)', // This creates the purple overlay
        zIndex: 1
    };

    const textStyle = {
        position: 'relative',
        zIndex: 2,
        fontSize: '36px',
        fontWeight: 'bold',
        padding: '0 20px'
    };

    const buttonStyle = {
        marginTop: '20px',
        fontSize: '18px',
        padding: '10px 30px',
        backgroundColor: '#ffcc00', // Bright yellow button
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    };


    const aboutBoxRef = useRef(null);

    const handleDiscoverMoreClick = () => {
        aboutBoxRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className='OrgMainAll'>
            <OrgNavBar2 />
            <div className="banner">
                <div className="overlayMineHere"></div>
                <div className="content">
                    <h1>Welcome to Waslet kheir</h1>
                    <p>Lend the helping hand, get involved</p>
                    <button onClick={handleDiscoverMoreClick}>Discover More</button>
                </div>
            </div>
            {/* <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; text-align: center;">
                <div style="margin-bottom: 20px;">
                    <FaHandsHelping alt="Funds Raised" style="width: 50px; height: auto;" />
                    <CountUp style="font-size: 48px; color: #000; margin: 10px 0;" end={34567} duration={500} />
                    <p style="font-size: 20px; color: #666;">raised by 6,388 people in 7 days</p>
                </div>
                <div>
                    <MdOutlineVolunteerActivism
                        style="width: 50px; height: auto;" />
                    <CountUp style="font-size: 48px; color: #000; margin: 10px 0;" end={34567} duration={500} />
                    <p style="font-size: 20px; color: #666;">volunteers are available to help you</p>
                </div>
              
            </div> */}


            <div style={{
                fontFamily: 'Arial, sans-serif',
                maxWidth: '300px',
                margin: '20px auto',
                textAlign: 'center',
                marginRight: '65%',

            }}>
                <div style={{ marginBottom: '20px' }}>
                    <FaHandsHelping size="50" />
                    <h2><CountUp end={8600} duration={500} style={{ fontSize: '50px', color: '#000', margin: '10px 0' }} /></h2>
                    <p style={{ fontSize: '26px', color: '#666' }}>donors are ready to lend you a hand</p>
                </div>
                <div>
                    <MdOutlineVolunteerActivism size="50" />
                    <h2><CountUp end={1500} duration={500} style={{ fontSize: '50px', color: '#000', margin: '10px 0' }} /></h2>
                    <p style={{ fontSize: '26px', color: '#666' }}>volunteers are available to help you</p>
                </div>

            </div >
            <div ref={aboutBoxRef}> 
            <AboutBox /></div>
            <DonationImpact />
            <Testimonials />
            <Footer></Footer>
        </div>
    );
};

export default OrgMain2;