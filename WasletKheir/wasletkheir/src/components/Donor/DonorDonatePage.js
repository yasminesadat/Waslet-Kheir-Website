import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Layout, Menu, theme } from 'antd';
import FilterAll from './FilterAll';
import { DONATION_CARDS_DATA } from '../helpers/data';
import './donor.css'
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
const { Search } = Input;
export default function DonorDonatePage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(DONATION_CARDS_DATA);

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeDataBasedOnSearch = (arr, value) => {
    return arr.filter((element) => 
    element.title.toLowerCase().includes(value.toLowerCase()) ||
    element.category.toLowerCase().includes(value.toLowerCase())
  );  }

  const onChange = (event) => {
    setValue(event.target.value);
    const data = changeDataBasedOnSearch(DONATION_CARDS_DATA, event.target.value)
    setFilteredData(data)
  };

  let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

  return (
    <div>
    <div style={{ minHeight: '100vh' }}>
      <DonorNavbar />

      <div className='divider-main'>
        <Divider orientation="center" orientationMargin="0">
          <span className="divider-text">All Items</span>
        </Divider>
      </div>
      <div className='top-section'>
        <div className='breadcrumb-main'>
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
 <Breadcrumb.Item><Link to="/Home" className="filter-link" > {/* Pass BloodDonations category */}
             Home</Link></Breadcrumb.Item>            
             <Breadcrumb.Item>All Items</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className='search-donor' >
          <Search
            placeholder="Search"
            enterButton
            style={{ width: 200 }}
            value={value} // Set the value prop to the value received from the parent
            onChange={onChange} // onChange handler to update the value
          />
        </div>

      </div>
      <div className='main-content'>
      <div className='filter-blood' style={{ width: '200px', maxWidth: '200px' }} >
        <FilterAll />
      </div>
        <RequestGrid filteredData={filteredData} />
      </div>
      </div>
      <br/><br/>
      <Footer />
    </div>
  );
}
