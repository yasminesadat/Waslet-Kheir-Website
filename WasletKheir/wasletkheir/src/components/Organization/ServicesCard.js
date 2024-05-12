import React, { useState } from 'react';

import {
    EditOutlined,
    DeleteOutlined,
    PhoneOutlined,
    InfoCircleOutlined,
    ExclamationCircleOutlined,
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';
import { Avatar, Card, Button, Space, Typography } from 'antd';
import './Org.css';

const { Meta } = Card;
const { Text } = Typography;

const ServicesCard = ({ image, avatar, title, description, serviceDetails, contactInfo, type, onDelete }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [backContent, setBackContent] = useState(null);

    const flipCard = (content) => {
        setBackContent(content);
        setIsFlipped(true);
    };

    const handleCancel = () => {
        setIsFlipped(false);
    };

    const handleConfirmDelete = () => {
        console.log('Deleted');
        setIsFlipped(false);
        onDelete();
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
        let title = "";
        let icon = null;
        let details = [];
    
        switch (backContent) {
            case 'delete':
                return (
                    <>
                        <Meta
                            avatar={<ExclamationCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />}
                            title="Are you sure you want to delete?"
                            description="This action cannot be undone."
                        />
                        <Space style={{ marginTop: 16 }}>
                            <Button
                                type="primary"
                                danger
                                icon={<CheckOutlined />}
                                onClick={handleConfirmDelete}
                            >
                                Confirm
                            </Button>
                            <Button
                                icon={<CloseOutlined />}
                                onClick={handleCancel}
                            >
                                Cancel
                            </Button>
                        </Space>
                    </>
                );
            case 'phone':
                title = `${type === 'medical' ? "Doctor's" : "Teacher's"} Contact Information`;
                icon = <PhoneOutlined style={{ fontSize: '24px', color: '#1890ff' }} />;
                details = contactInfo;
                break;
            case 'info':
                title = `${type === 'medical' ? "Medical" : "Teaching"} Case Information`;
                icon = <InfoCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />;
                details = serviceDetails;
                break;
            default:
                return null;
        }
        return (
            <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Meta
                        avatar={icon}
                        title={title}
                    />
                    <Button onClick={handleCancel}>Back</Button>
                </div>
                {renderDetails(details)}
            </>
        );
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
                            color: 'black',
                        }}
                        bodyStyle={{height:'120px'}}
                        cover={
                            <img
                                alt="example"
                                src={image}
                            />
                        }
                        actions={[
                            <PhoneOutlined key="phone" onClick={() => flipCard('phone')} />,
                            <DeleteOutlined key="delete" onClick={() => flipCard('delete')} />,
                            <InfoCircleOutlined key="info" onClick={() => flipCard('info')} />,

                        ]}
                    >
                        <Meta
                            avatar={<Avatar src={avatar} />}
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
                            overflowY: 'auto'
                        }}
                        bodyStyle={{height:'390px'}}
                    >
                        {renderBackContent()}
                    </Card>
                )}
            </div>
        </div>
    );
};

export default ServicesCard;
