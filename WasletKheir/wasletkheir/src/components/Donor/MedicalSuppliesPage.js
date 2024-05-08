import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Input } from 'antd';
import { DonationCategories, MedicalSuppliesTypes } from '../helpers/types';
import { DONATION_CARDS_DATA } from '../helpers/data';
import { Select } from 'antd';
import { Link } from 'react-router-dom';

const medicalSuppliesData = DONATION_CARDS_DATA.filter((card) => card.category === DonationCategories.MedicalSupplies)
const typeOptions = Object.values(MedicalSuppliesTypes).map((element) => { return { "value": element, "label": element } })
const { Search } = Input;

export default function FoodPage() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState(medicalSuppliesData);
  const [typeFilter, setTypeFilter] = useState("");
  const [medicationValue, setMedicationValue] = useState("");


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
    const data = changeDataBasedOnSearch(medicalSuppliesData, event.target.value)
    setFilteredData(data)
  };

  const changeDataBasedOnSearch = (arr, value) => {
    return arr.filter((element) => element.title.includes(value))
  }
  
  useEffect(() => {
    let data = changeDataBasedOnSearch(medicalSuppliesData, value)
    if (typeFilter != "") {
      data = data.filter((element) => element.type.includes(typeFilter))
    }
    if (medicationValue != "") {
      data = data.filter((element) => element.medicationValue?.includes(medicationValue))
    }
    setFilteredData(data)
  }, [typeFilter, value, medicationValue])

  let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

  return (
    <div>
      <DonorNavbar className={navbarClass} value={value} onChange={onChange}/>
      <div className='divider-main'>
        <Divider orientation="center" orientationMargin="0">
          <span className="divider-text">Medical Supplies</span>
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
          <Breadcrumb.Item>Medical Supplies</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='main-content'>
        <div className='filter-blood' style={{ width: '200px', maxWidth: '200px' }} >
          <p style={{marginLeft:'8%'}}>Filter by</p>
          <Divider className="divider-filter" orientation="center" orientationMargin="0" style={{margin:'6%'}}/>
        <Select
          placeholder="Type of Medical Supplies"
          value={typeFilter}
          onChange={(value) => {
            setTypeFilter(value)
          }}
          options={typeOptions}
          style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
        />
        {typeFilter == MedicalSuppliesTypes.Medication &&
          <Search placeholder="Input area of use" value={medicationValue} onChange={(event) => { setMedicationValue(event.target.value) }} style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' , marginTop: '0%'}} ></Search>}
          </div>
        <RequestGrid filteredData={filteredData} />
      </div>
      </div>
  );
}
