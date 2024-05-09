import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Checkbox } from 'antd'; // Import Checkbox from Ant Design
import { DonationCategories, SchoolTypes } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Link } from 'react-router-dom';
import './donor.css'
import { Input, Select } from 'antd';
const { Search } = Input;
const schoolSuppliesData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.SchoolSupplies);
const supplyOptions = [
    {
      label: 'Books',
      value: 'school_books',
    },
    {
      label: 'Stationary',
      value: 'school_stationary',
    },
   
  ];
  export default function SchoolSuppliesPage() {

    const [showNavbar, setShowNavbar] = useState(false);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(schoolSuppliesData);
    const [schoolFilter, setSchoolFilter] = useState([]);

    useEffect(() => {
        let data = changeDataBasedOnSearch(schoolSuppliesData, value);
        if (schoolFilter.length > 0) {
            data = data.filter((element) => schoolFilter.includes(element.type))
      
          }
         
        setFilteredData(data);
    }, [schoolFilter, value]);

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

    const onChange = (event) => {
        setValue(event.target.value);
        const data = changeDataBasedOnSearch(schoolSuppliesData, event.target.value);
        setFilteredData(data);
    };

    const changeDataBasedOnSearch = (arr, value) => {
        return arr.filter((element) => element.title.includes(value));
    };


    let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

    return (
        <div>
            <DonorNavbar className={navbarClass} value={value} onChange={onChange} />
            <div className='divider-main'>
                <Divider orientation="center" orientationMargin="0">
                    <span className="divider-text">School Supplies</span>
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
             Home</Link></Breadcrumb.Item>          <Breadcrumb.Item>
            <Link to="/DonorDonatePage" className="filter-link" > {/* Pass BloodDonations category */}
              All Products  </Link></Breadcrumb.Item>
          <Breadcrumb.Item>School Supplies</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='search-donor'>
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
                    <p style={{ marginLeft: '8%' }}>Filter by</p>
                    <Divider className="divider-filter" orientation="center" orientationMargin="0" style={{ margin: '6%' }} />
          <Select
            placeholder="Type of School Supply"
            value={schoolFilter}
            onChange={(value) => {
              setSchoolFilter(value)
            }}
            options={supplyOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
          
        </div>

        <RequestGrid filteredData={filteredData} />
                    </div>
        </div>
    );
}
