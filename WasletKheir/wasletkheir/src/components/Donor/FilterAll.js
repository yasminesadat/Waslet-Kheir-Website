import React from 'react';
import { Divider, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineBloodtype } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineToys } from "react-icons/md";
import { LuShirt } from "react-icons/lu";
import { IoListOutline } from "react-icons/io5";
import styled from 'styled-components'; // Import styled-components

import './donor.css'
const CustomMenu = styled(Menu)`
  background-color: #ffffff; 
`;
const { Sider } = Layout;

const CustomMenuItem = styled(Menu.Item)`
  &&&:hover {
    background-color: #ffffff; // Using &&& to increase specificity
  }
`;


function FilterAll() {
  const items = [
    
    {
      key: 'sub1',
      label: 'All Items',
      icon: <IoListOutline size={17} />
      ,

    },
    {
      type: 'divider',
    },
    {
      key: 'sub2',
      label: 'Clothes',
      icon: <LuShirt size={17} />
      ,
      link: '/ClothesPage',
    },
    {
      type: 'divider',
    },
    {
      key: 'sub3',
      label: 'Blood Donations',
      icon: <MdOutlineBloodtype size={20} />,
      link: '/BloodDonationsPage',
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Food',
      icon: <MdOutlineFoodBank size={21} />,
      link: '/FoodPage',
    },
    {
      type: 'divider',
    },
    {
      key: 'sub5',
      label: 'Medical Supplies',
      icon: <AiOutlineMedicineBox size={20} />,
      link: '/MedicalSuppliesPage',
    },
    {
      type: 'divider',
    },
    {
      key: 'sub6',
      label: 'School Supplies',
      icon: <IoSchoolOutline size={20} />,
      link: '/SchoolSuppliesPage',
    },
    {
      type: 'divider',
    },
    {
      key: 'sub7',
      label: 'Toys',
      icon: <MdOutlineToys size={20} />,
      link: '/ToysPage',
    },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sider>
      <CustomMenu>          
        {items.map(item => {
            if (item.type === 'divider') {
              return <Divider key={item.key} className="custom-divider" />;
            }
            else if (item.type === 'divider-top') {
              return <Divider key={item.key} className="custom-divider-top" />;
            }
            else {
              return (
                <CustomMenuItem key={item.key} icon={item.icon}>
                  <Link to={item.link}>{item.label}</Link>
                </CustomMenuItem>
              );
            }
          })}
    </CustomMenu>      

</Sider>
    </div >
  );
}

export default FilterAll;

{/* <ul className="filter-section">
                    <p>Browse by</p>
                    <Divider className="divider-filter" orientation="center" orientationMargin="0" />
                    
                    <div className='filter-item'>
                        <Link to="/AllProductsPage" className="filter-link" > 
                            All Products
                        </Link><br />
                    </div>
                    <div className='filter-item'></div>
                        <Link to="/BloodDonationsPage" className="filter-link" > 
                            Blood Donations
                        </Link><br />
                        <div className='filter-item'></div>
                        <Link to="/ClothesPage" className="filter-link" > 
                            Clothes
                        </Link><br />
                        <div className='filter-item'></div>
                        <Link to="/FoodPage" className="filter-link" > 
                            Food
                        </Link><br />
                        <div className='filter-item'></div>
                        <Link to="/MedicalSuppliesPage" className="filter-link" > 
                            Medical Supplies
                        </Link><br />
                        <div className='filter-item'></div>
                        <Link to="/SchoolSuppliesPage" className="filter-link" > 
                            School Supplies
                        </Link><br />
                        <div className='filter-item'></div>
                        <Link to="/ToysPage" className="filter-link" > 
                            Toys
                        </Link><br />
                </ul> */}