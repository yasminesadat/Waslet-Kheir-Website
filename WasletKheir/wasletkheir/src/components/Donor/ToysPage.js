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
const toysData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.Toys)
const ageOptions = toysData.map((card) => { return { "value": card.age, "label": card.age } })
const genderOptions = toysData.map((card) => { return { "value": card.gender, "label": card.gender } })
const categoryOptions = [
  {
    label: 'Board Games',
    value: 'Board Games',
  },
  {
    label: 'Cars',
    value: 'Cars',
  },
  {
    label: 'Dolls',
    value: 'Dolls',
  },
  {
    label: 'Outdoors',
    value: 'Outdoors',
  },
  {
    label: 'Sports',
    value: 'Sports',
  },
  {
    label: 'Stuffed Toys',
    value: 'Stuffed Toys',
  }
];

export default function FoodPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(toysData);
  const [ageFilter, setAgeFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);


  useEffect(() => {
    let data = changeDataBasedOnSearch(toysData, value)
    if (ageFilter.length > 0) {
      data = data.filter((element) => ageFilter.includes(element.age))

    }
    if (genderFilter.length > 0) {
      data = data.filter((element) => genderFilter.includes(element.gender))

    }
    if (categoryFilter.length > 0) {
      data = data.filter((element) => categoryFilter.includes(element.type))

    }
    setFilteredData(data)
  }, [ageFilter, value, genderFilter, categoryFilter])


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
    const data = changeDataBasedOnSearch(toysData, event.target.value)
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
          <span className="divider-text">Toys</span>
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
          <Breadcrumb.Item>Toys</Breadcrumb.Item>
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
            placeholder="Category"
            value={categoryFilter}
            onChange={(value) => {
              setCategoryFilter(value)
            }}
            options={categoryOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
        </div>
        <RequestGrid filteredData={filteredData} />
              </div>
    </div>
  );
}
