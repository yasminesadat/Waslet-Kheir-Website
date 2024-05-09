import React, { useState } from 'react';
import {
    EnvironmentOutlined,
    InfoCircleOutlined,
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { Avatar, Card, Button, Space, Typography } from 'antd';
import '../Organization/Org.css';

const { Meta } = Card;
const { Text } = Typography;

const OrgCard = ({ image, title, description, orgDetails, location }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [backContent, setBackContent] = useState(null);

    const flipCard = (content) => {
        setBackContent(content);
        setIsFlipped(true);
    };

    const handleCancel = () => {
        setIsFlipped(false);
    };

    const renderDetails = (details) => (
        <ul style={{ paddingLeft: 20 }}>
            {details.map((detail, index) => (
                <li key={index}>
                    <Text strong>{detail.label}:</Text> {detail.value}
                </li>
            ))}
        </ul>
    );

    const renderBackContent = () => {
        switch (backContent) {
            case 'location':
                return (
                    <div style={{ width: '100%', height: '265px', textAlign: 'center' }}>
                        <iframe
                            title="google map"
                            src={location}
                            style={{ width: '100%', height: '235px', border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <Button style={{ marginTop: 13 }} onClick={handleCancel}>
                            Back
                        </Button>
                    </div>
                );
            case 'info':
                return (
                    <>
                        <Meta
                            avatar={<InfoCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />}
                            title="Organization Information"
                        />
                        {renderDetails(orgDetails)}
                        <Button style={{ marginTop: 16 }} onClick={handleCancel}>
                            Back
                        </Button>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ perspective: 1000 }}>
            <div
                style={{
                    transform: `rotateY(${isFlipped ? 180 : 0}deg)`,
                    transition: 'transform 0.6s',
                    position: 'relative',
                    width: 400,
                    height: 'auto',
                    transformStyle: 'preserve-3d',
                }}
            >
                {!isFlipped ? (
                    <Card
                        style={{
                            width: 400,
                            maxWidth: 400,
                            backfaceVisibility: 'hidden',
                            fontSize: '18px',
                            color: 'black'
                        }}
                        cover={
                            <img
                                alt="example"
                                src={image}
                                height={'200px'}
                            />
                        }
                        actions={[
                            <EnvironmentOutlined key="location" onClick={() => flipCard('location')} />,
                            <InfoCircleOutlined key="info" onClick={() => flipCard('info')} />
                        ]}
                    >
                        <Meta
                            title={title}
                            description={description}
                        />
                    </Card>
                ) : (
                    <Card
                        style={{
                            width: 400,
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                        }}
                    >
                        {renderBackContent()}
                    </Card>
                )}
            </div>
        </div>
    );
};

export default OrgCard;
