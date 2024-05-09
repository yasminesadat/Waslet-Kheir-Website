import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Checkbox } from 'antd'; // Import Checkbox from Ant Design
import { DonationCategories, SchoolTypes } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Link } from 'react-router-dom';
import './donor.css'
import { Input } from 'antd';
const { Search } = Input;
const schoolSuppliesData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.SchoolSupplies);

export default function FoodPage() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(schoolSuppliesData);
    const [booksFilter, setBooksFilter] = useState(false);
    const [stationaryFilter, setStationaryFilter] = useState(false);

    useEffect(() => {
        let data = changeDataBasedOnSearch(schoolSuppliesData, value);
        if (booksFilter && stationaryFilter) {
            // If both checkboxes are checked, show all data
            data = schoolSuppliesData;
        } else {
            // If only one checkbox is checked, filter based on that checkbox
            if (booksFilter) {
                data = data.filter((element) => element.type === SchoolTypes.SchoolBooks);
            }
            if (stationaryFilter) {
                data = data.filter((element) => element.type === SchoolTypes.SchoolStationary);
            }

        }
        setFilteredData(data);
    }, [booksFilter, value, stationaryFilter]);

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

    const handleBooksFilter = (checked) => {
        setBooksFilter(checked);
    };

    const handleStationaryFilter = (checked) => {
        setStationaryFilter(checked);
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
                    <div className='filter-school' style={{ marginLeft: '5%' }}>
                        <Checkbox onChange={(e) => handleBooksFilter(e.target.checked)}>
                            {/* Call handleBooksFilter to toggle books filter */}
                            Books
                        </Checkbox>
                        <br />
                        <Checkbox onChange={(e) => handleStationaryFilter(e.target.checked)}>
                            {/* Call handleSuppliesFilter to toggle supplies filter */}
                            Stationary
                        </Checkbox>
                        <br />
                    </div>
                </div>

        <RequestGrid filteredData={filteredData} />
                    </div>
        </div>
    );
}
