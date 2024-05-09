import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider } from 'antd';
import { DonationCategories } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Select } from 'antd';
import FilterAll from './FilterAll';
import { Link } from 'react-router-dom';
import './donor.css'
import { Input } from 'antd';
const { Search } = Input;
const clothesData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.Clothes)
const ageOptions = clothesData.map((card) => { return { "value": card.age, "label": card.age } })
const filteredGenderOptions = clothesData.map((card) => card.gender)
let genderOptions = [...new Set(filteredGenderOptions)].map((gender) => { return { "value": gender, "label": gender } })
const seasonOptions = Array.from(new Set(clothesData.map((card) => { return { "value": card.season, "label": card.season } })))

export default function ClothesPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(clothesData);
  const [ageFilter, setAgeFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [seasonFilter, setSeasonFilter] = useState([]);


  useEffect(() => {
    let data = changeDataBasedOnSearch(clothesData, value)
    if (ageFilter.length > 0) {
      data = data.filter((element) => ageFilter.includes(element.age))

    }
    if (genderFilter.length > 0) {
      data = data.filter((element) => genderFilter.includes(element.gender))

    }
    if (seasonFilter.length > 0) {
      data = data.filter((element) => seasonFilter.includes(element.season))

    }
    setFilteredData(data)
  }, [ageFilter, value, genderFilter, seasonFilter])

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
    const data = changeDataBasedOnSearch(clothesData, event.target.value)
    setFilteredData(data)
  };

  const changeDataBasedOnSearch = (arr, value) => {
    return arr.filter((element) => element.title.includes(value))
  }




  let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

  return (
    <div>
      <DonorNavbar className={navbarClass} value={value} onChange={onChange} />
      <div className='divider-main'>
        <Divider orientation="center" orientationMargin="0">
          <span className="divider-text">Clothes</span>
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
          <Breadcrumb.Item>Clothes</Breadcrumb.Item>
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
            placeholder="Age"
            value={ageFilter}
            onChange={(value) => {
              setAgeFilter(value)
            }}
            options={ageOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
          <Select
            mode="multiple"
            placeholder="Gender"
            value={genderFilter}
            onChange={(value) => {
              setGenderFilter(value)
            }}
            options={genderOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
          <Select
            mode="multiple"
            placeholder="Season"
            value={seasonFilter}
            onChange={(value) => {
              setSeasonFilter(value)
            }}
            options={seasonOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
        </div>
        <RequestGrid filteredData={filteredData} />
              </div>
    </div >
  );
}
