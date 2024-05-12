import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Select, Input } from 'antd';
import { MEDICAL_CASES_DATA } from '../helpers/services';
import { Link } from 'react-router-dom';
import './donor.css';

const { Search } = Input;

export default function MedicalCasesPage() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(MEDICAL_CASES_DATA);
    const [organizationFilter, setOrganizationFilter] = useState([]);
    const [governorateFilter, setGovernorateFilter] = useState([]);
    const [areaFilter, setAreaFilter] = useState([]);
    const [specialtyFilter, setSpecialtyFilter] = useState([]);

    // Extract unique filter options from data
    const organizationOptions = Array.from(new Set(MEDICAL_CASES_DATA.map(item => item.organizationName))).map(organization => ({ value: organization, label: organization }));
    const governorateOptions = Array.from(new Set(MEDICAL_CASES_DATA.map(item => item.government))).map(government => ({ value: government, label: government }));
    const areaOptions = Array.from(new Set(MEDICAL_CASES_DATA.map(item => item.area))).map(area => ({ value: area, label: area }));
    const specialtyOptions = Array.from(new Set(MEDICAL_CASES_DATA.map(item => item.medicalSpecialty))).map(specialty => ({ value: specialty, label: specialty }));

    useEffect(() => {
        let data = changeDataBasedOnSearch(MEDICAL_CASES_DATA, value);
        if (organizationFilter.length > 0) {
            data = data.filter(item => organizationFilter.includes(item.organizationName));
        }
        if (governorateFilter.length > 0) {
            data = data.filter(item => governorateFilter.includes(item.government));
        }
        if (areaFilter.length > 0) {
            data = data.filter(item => areaFilter.includes(item.area));
        }
        if (specialtyFilter.length > 0) {
            data = data.filter(item => specialtyFilter.includes(item.medicalSpecialty));
        }
        setFilteredData(data);
    }, [organizationFilter, governorateFilter, areaFilter, specialtyFilter, value]);

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 750;
            setShowNavbar(show !== showNavbar);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [showNavbar]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onChange = (event) => {
        setValue(event.target.value);
        setFilteredData(changeDataBasedOnSearch(MEDICAL_CASES_DATA, event.target.value));
    };

    const changeDataBasedOnSearch = (arr, value) => {
        return arr.filter(element => element.title.toLowerCase().includes(value.toLowerCase()));
    };

    let navbarClass = showNavbar ? 'fixed-navbar' : 'navbar-hidden';

    return (
        <div>
            <DonorNavbar className={navbarClass} value={value} onChange={onChange} />
            <div className='divider-main'>
                <Divider orientation="center" orientationMargin="0">
                    <span className="divider-text">Medical Cases</span>
                </Divider>
            </div>
            <div className='top-section'>
                <div className='breadcrumb-main'>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/Home" className="filter-link">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Medical Cases</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div className='search-donor'>
                    <Search
                        placeholder="Search"
                        enterButton
                        style={{ width: 200 }}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
            <div className='main-content'>
                <div className='filter-blood' style={{ width: '200px', maxWidth: '200px' }}>
                    <p style={{ marginLeft: '8%' }}>Filter by</p>
                    <Divider className="divider-filter" orientation="center" orientationMargin="0" style={{ margin: '6%' }} />
                    <Select
                        mode="multiple"
                        placeholder="Organization"
                        value={organizationFilter}
                        onChange={setOrganizationFilter}
                        options={organizationOptions}
                        style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
                    />
                    <Select
                        mode="multiple"
                        placeholder="Governorate"
                        value={governorateFilter}
                        onChange={setGovernorateFilter}
                        options={governorateOptions}
                        style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
                    />
                    <Select
                        mode="multiple"
                        placeholder="Area"
                        value={areaFilter}
                        onChange={setAreaFilter}
                        options={areaOptions}
                        style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
                    />
                    <Select
                        mode="multiple"
                        placeholder="Specialty"
                        value={specialtyFilter}
                        onChange={setSpecialtyFilter}
                        options={specialtyOptions}
                        style={{ width: '200px', maxWidth: '200px', maxHeight: '200px', margin: '6%' }}
                    />
                </div>
                <RequestGrid filteredData={filteredData} />
            </div>
        </div>
    );
}
