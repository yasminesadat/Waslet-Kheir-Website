import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider } from 'antd';
import { DonationCategories } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Select } from 'antd';
import { Link } from 'react-router-dom';
import './donor.css'

const bloodDonationsData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.BloodDonations)
const areaOptions = bloodDonationsData.map((card) => { return { "value": card.area, "label": card.area } })
const hospitalOptions = bloodDonationsData.map((card) => { return { "value": card.hospitalName, "label": card.hospitalName } })
const governateOptions = Array.from(new Set(bloodDonationsData.map((card) => { return { "value": card.government, "label": card.government } })))

export default function BloodDonationsPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(bloodDonationsData);
  const [nameFilter, setNameFilter] = useState([]);
  const [governateFilter, setGovernateFilter] = useState([]);
  const [areaFilter, setAreaFilter] = useState([]);

  useEffect(() => {
    let data = changeDataBasedOnSearch(bloodDonationsData, value)
    if (areaFilter.length > 0) {
      data = data.filter((element) => areaFilter.includes(element.area))

    }
    if (nameFilter.length > 0) {
      data = data.filter((element) => nameFilter.includes(element.hospitalName))

    }
    if (governateFilter.length > 0) {
      data = data.filter((element) => governateFilter.includes(element.government))

    }
    setFilteredData(data)
  }, [areaFilter, value, nameFilter, governateFilter])

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
      <div className='breadcrumb-main'>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/DonorDonatePage" className="filter-link" > {/* Pass BloodDonations category */}
              All Products  </Link></Breadcrumb.Item>
          <Breadcrumb.Item>Blood Donations</Breadcrumb.Item>
        </Breadcrumb>
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
            placeholder="Governate"
            value={governateFilter}
            onChange={(value) => {
              setGovernateFilter(value)
            }}
            options={governateOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
        </div>
        <RequestGrid filteredData={filteredData} />
      </div>
    </div >
  );
}