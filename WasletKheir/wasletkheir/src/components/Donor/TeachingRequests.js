import React, { useEffect, useState } from 'react';
import RequestGrid from './RequestGrid';
import DonorNavbar from './DonorNavbar';
import { Breadcrumb, Divider, Select, Input } from 'antd';
import { MEDICAL_CASES_DATA } from '../helpers/services';
import { Link } from 'react-router-dom';
import './donor.css';
import { TEACHING_CASES_DATA } from '../helpers/services';

const { Search } = Input;

export default function TeachingRequests() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [value, setValue] = useState('');
    const [filteredData, setFilteredData] = useState(TEACHING_CASES_DATA);
    const [subjectFilter, setSubjectfilter] = useState([]);
    const [governorateFilter, setGovernorateFilter] = useState([]);
    const [areaFilter, setAreaFilter] = useState([]);

    // Extract unique filter options from data
    const subjectOptions = Array.from(new Set(TEACHING_CASES_DATA.map(item => item.subject))).map(subject => ({ value: subject, label: subject }));
    const governorateOptions = Array.from(new Set(TEACHING_CASES_DATA.map(item => item.governorate))).map(governorate => ({ value: governorate, label: governorate }));
    const areaOptions = Array.from(new Set(TEACHING_CASES_DATA.map(item => item.area))).map(area => ({ value: area, label: area }));

    useEffect(() => {
        let data = changeDataBasedOnSearch(TEACHING_CASES_DATA, value);
        if (subjectFilter.length > 0) {
            data = data.filter(item => subjectFilter.includes(item.subject));
        }
        if (governorateFilter.length > 0) {
            data = data.filter(item => governorateFilter.includes(item.governorate));
        }
        if (areaFilter.length > 0) {
            data = data.filter(item => areaFilter.includes(item.area));
        }

        setFilteredData(data);
    }, [subjectFilter, governorateFilter, areaFilter, value]);

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
        setFilteredData(changeDataBasedOnSearch(TEACHING_CASES_DATA, event.target.value));
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
                    <span className="divider-text">Teaching Cases</span>
                </Divider>
            </div>
            <div className='top-section'>
                <div className='breadcrumb-main'>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item><Link to="/Home" className="filter-link">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item>Teaching Cases</Breadcrumb.Item>
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
                        placeholder="Subject"
                        value={subjectFilter}
                        onChange={setSubjectfilter}
                        options={subjectOptions}
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

                </div>
                <RequestGrid filteredData={filteredData} />
            </div>
        </div>
    );
}
