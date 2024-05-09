import React from 'react';
import { Avatar, Card, Button, Typography } from 'antd';
import '../Organization/Org.css';
const { Meta } = Card;

const ServicesCardDonor = ({ image, avatar, title, description }) => {
    const handleVolunteer = () => {
        console.log('Volunteer action triggered');
    };

    const handleViewDetails = () => {
        console.log('View details action triggered');
    };

    return (
        <div style={{ width: 400, margin: '20px auto' }}>
            <Card
                style={{
                    width: 400,
                    maxWidth: 400,
                    fontSize: '18px',
                    color: 'black'
                }}
                cover={<img alt="example" src={image} />}
                actions={[
                    <Button type="link" onClick={handleViewDetails}>View Details</Button>,
                    <Button type="link" onClick={handleVolunteer}>Volunteer</Button>
                ]}
            >
                <Meta
                    avatar={<Avatar src={avatar} />}
                    title={title}
                    description={description}
                />
            </Card>
        </div>
    );
};

export default ServicesCardDonor;
