
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '../Card';
import Card2 from '../Card2';
import Footer from '../Footer';
import DonorNavbar from './DonorNavbar';

import '../App.css';

function Home() {


  const [showNavbar, setShowNavbar] = useState(false);


  //Method below is used to make animation effect work in the image
  useEffect(() => {
    void document.body.offsetWidth;
  }, []);


  //Method below makes it so that the navbar appears when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 750;
      if (show !== showNavbar) {
        setShowNavbar(show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showNavbar]);
  let navbarClass = '';
  if (showNavbar) {
    navbarClass = 'fixed-navbar';
  }
  else {
    navbarClass = 'navbar-hidden';
  }

  // Scroll to top when refreshing
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    /* <Router>*/
    <div>
      <DonorNavbar />
      <div className="parallax-image">
        <div className="centered-text">
          <h1 className="fading-text">Waslet Kheir</h1>
          <h2 className="fading-text">Connecting the World</h2>
        </div>
      </div>
      <br/>
      <div className="our-goal-section">
        <h1 className="header">
          About Us
        </h1>
        <h2>We aim to improve lives through the generosity of our
          donors. Every donation contributes to making the world
          a better place. A myriad of donations can be made such as food, clothing, medicine, and many more.
          Through these donations, many individuals and communities are able to receive the support and resources
          they need to thrive. Our donations are classified into different categories.
        </h2>
      </div>
      <br></br>
      <div className="cardContainer">
        <Card
          image="https://i.ibb.co/dLXmffQ/dr.jpg"
          title="Health Sector"
          description="Blood donations, medicine and medical supplies, and free doctor appointments."
        />
        <Card
          image="https://i.ibb.co/kK1CB4M/teacher.jpg"
          title="Education Sector"
          description="School books, school supplies, and free teaching appointments."
        />
        <Card
          image="https://i.ibb.co/pjQ3Wnf/refugees.jpg"
          title= "Food Sector"
          description="Encourage donations of food and grocery for people living below the poverty line."
        />
        <Card
          image="https://i.ibb.co/dQDW5fC/orphanage.jpg"
          title="Orphanage Sector"
          description="Clothes, toys, school supplies, and luxury foods."
        />
      </div>
      <br></br>
      <br></br>

      <div className="gray-background">
        <center><h1 className="header">Latest Donation Requests</h1></center>
        <div className="cardContainer">
          <Card2
            image="https://i.ibb.co/dQDW5fC/orphanage.jpg"
            title="Clothes"
            description="Clothes for children aged 5-10 years old."
            donateUrl="/ClothesPage"
            detailsUrl="/ClothesPage"
          />
          <Card2
            image="https://i.ibb.co/pjQ3Wnf/refugees.jpg"
            title="Food"
            description="Fruits and Veggies for orphans."
            donateUrl="/FoodPage"
            detailsUrl="/FoodPage"
          />
          <Card2
            image="https://i.ibb.co/kK1CB4M/teacher.jpg"
            title="School Supplies"
            description="Bags and notebooks for students."
            donateUrl="/SchoolSuppliesPage"
            detailsUrl="/SchoolSuppliesPage"
          />
        </div>
        <br></br>
        <center><a href="/DonorDonatePage" className="card-link">View All Donation Requests</a></center>
        <br></br>

      </div>

      <Footer/>
    </div>
    /*</Router>*/
  );
}

export default Home;
