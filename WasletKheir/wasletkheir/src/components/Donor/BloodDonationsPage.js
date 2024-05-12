import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider } from 'antd';
import { DonationCategories } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import './donor.css'
import { Input } from 'antd';
const { Search } = Input;
const bloodDonationsData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.BloodDonations)
const areaOptions = bloodDonationsData.map((card) => { return { "value": card.area, "label": card.area } })
const hospitalOptions = bloodDonationsData.map((card) => { return { "value": card.hospitalName, "label": card.hospitalName } })
const filteredGovernorateOptions = bloodDonationsData.map((card) => card.governorate)
let governorateOptions = [...new Set(filteredGovernorateOptions)].map((governorate)  => { return { "value": governorate, "label": governorate } })

export default function BloodDonationsPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(bloodDonationsData);
  const [nameFilter, setNameFilter] = useState([]);
  const [governorateFilter, setGovernorateFilter] = useState([]);
  const [areaFilter, setAreaFilter] = useState([]);

  useEffect(() => {
    let data = changeDataBasedOnSearch(bloodDonationsData, value)
    if (areaFilter.length > 0) {
      data = data.filter((element) => areaFilter.includes(element.area))

    }
    if (nameFilter.length > 0) {
      data = data.filter((element) => nameFilter.includes(element.hospitalName))

    }
    if (governorateFilter.length > 0) {
      data = data.filter((element) => governorateFilter.includes(element.governorate))

    }
    setFilteredData(data)
  }, [areaFilter, value, nameFilter, governorateFilter])

  // when any change happens in namefilter it changes 
  // useEffect(() => {
  //   let data = changeDataBasedOnSearch(bloodDonationsData, value)
  //   if (nameFilter.length > 0) {
  //     data = data.filter((element) => nameFilter.includes(element.hospitalName))

  //   }
  //   setFilteredData(data)
  // }, [nameFilter, value])


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
    event.preventDefault();
    event.stopPropagation();
    setValue(event.target.value);
  };

  const changeDataBasedOnSearch = (arr, value) => {
    return arr.filter((element) => element.title.toLowerCase().includes(value.toLowerCase()))
  }

  let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

  return (
    <div>
      <DonorNavbar className={navbarClass} value={value} onChange={onChange} />
      <div className='divider-main'>
        <Divider orientation="center" orientationMargin="0">
          <span className="divider-text">Blood Donations</span>
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
              All Items  </Link></Breadcrumb.Item>
          <Breadcrumb.Item>Blood Donations</Breadcrumb.Item>
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
            mode="multiple"
            placeholder="Area"
            value={areaFilter}
            onChange={(value) => {
              setAreaFilter(value)
            }}
            options={areaOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
          <Select
            mode="multiple"
            placeholder="Hospital"
            value={nameFilter}
            onChange={(value) => {
              setNameFilter(value)
            }}
            options={hospitalOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
          <Select
            mode="multiple"
            placeholder="Governorate"
            value={governorateFilter}
            onChange={(value) => {
              setGovernorateFilter(value)
            }}
            options={governorateOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
        </div>
        <RequestGrid filteredData={filteredData} />
      </div>
    </div >
  );
}