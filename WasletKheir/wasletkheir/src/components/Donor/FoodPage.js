import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider } from 'antd';
import { DonationCategories, FoodTypes } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Select } from 'antd';
import FilterAll from './FilterAll';
import { Link } from 'react-router-dom';
import './donor.css';
const foodData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.Food)
const foodOptions = [
  {
    label: 'Canned Foods',
    value: 'cannedfoods',
  },
  {
    label: 'Fruits and Vegetables',
    value: 'fruits_vegetables',
  },
  {
    label: 'Fresh Meals',
    value: 'fresh_meals',
  },
  {
    label: 'Baked Goods',
    value: 'baked_goods',
  }
];

export default function FoodPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(foodData);
  const [foodFilter, setFoodFilter] = useState([]);

  useEffect(() => {
    let data = changeDataBasedOnSearch(foodData, value)
    if (foodFilter.length > 0) {
      data = data.filter((element) => foodFilter.includes(element.type))

    }
    
    setFilteredData(data)
  }, [foodFilter, value])

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
    const data = changeDataBasedOnSearch(foodData, event.target.value)
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
          <span className="divider-text">Food</span>
        </Divider>
      </div>
      <div className='breadcrumb-main'>
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item><Link to="/Home" className="filter-link" > {/* Pass BloodDonations category */}
             Home</Link></Breadcrumb.Item>

          <Breadcrumb.Item>
            <Link to="/DonorDonatePage" className="filter-link" > {/* Pass BloodDonations category */}
              All Products  </Link></Breadcrumb.Item>
          <Breadcrumb.Item>Food</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='main-content'>
      <div className='filter-blood' style={{ width: '200px', maxWidth: '200px' }} >
          <p style={{ marginLeft: '8%' }}>Filter by</p>
          <Divider className="divider-filter" orientation="center" orientationMargin="0" style={{ margin: '6%' }} />
          <Select
            mode="multiple"
            placeholder="Type of Food"
            value={foodFilter}
            onChange={(value) => {
              setFoodFilter(value)
            }}
            options={foodOptions}
            style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
          />
         
        </div>
        <RequestGrid filteredData={filteredData} />
      </div>
    </div>
  );
}
