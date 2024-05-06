import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, AppstoreOutlined, PictureOutlined, MailOutlined, DownOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import Notif from './Notif';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const OrgMain2 = () => {
    return (
        <Layout>
            <style>
                {`
                    .ant-menu-dark .ant-menu-submenu-popup {
                        background-color: #333; /* Dark background for the submenu */
                    }

                    .ant-menu-dark .ant-menu-submenu-popup .ant-menu-item {
                        color: #ccc; /* Lighter text for better contrast */
                    }

                    .ant-menu-dark .ant-menu-submenu-popup .ant-menu-item:hover {
                        background-color: #555; /* Slightly lighter background on hover */
                    }
                `}
            </style>
            <Header style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#92C7CF',
                padding: '0 20px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    <img src="https://i.ibb.co/gFxywzc/logo1Yes.png" alt="Logo" style={{ width: '65px', height: '60px', marginRight: '10px' }} />
                    <h3 style={{ color: 'white', margin: 0, whiteSpace: 'nowrap', fontSize: '20px' }}>WASLET KHEIR</h3>
                </div>
                <Menu theme="dark" mode="horizontal" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', backgroundColor: '#92C7CF', border: 0 }}>
                    <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
                    <SubMenu key="sub1" icon={<DownOutlined />} title="Donations">
                        <Menu.Item key="2">Request a donation</Menu.Item>
                        <Menu.Item key="3">View my donations</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<DownOutlined />} title="Services">
                        <Menu.Item key="4">Request a service</Menu.Item>
                        <Menu.Item key="5">View fulfilled services</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6" icon={<BellOutlined />}>Notifications </Menu.Item>

                    <SubMenu key="sub3" icon={<DownOutlined />} title="Profile">
                        <Menu.Item key="7">My Profile</Menu.Item>
                        <Menu.Item key="8">Log Out</Menu.Item>
                    </SubMenu>

                </Menu>
            </Header>
            <Content style={{ padding: '0 48px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', minHeight: 280, padding: 24, borderRadius: '8px' }}>
                    Content
                </div>
            </Content>
            <Footer style={{
                textAlign: 'center',
                backgroundColor: '#92C7CF',
            }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default OrgMain2;