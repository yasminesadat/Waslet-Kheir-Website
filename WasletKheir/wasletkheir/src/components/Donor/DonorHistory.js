import React, { useState } from 'react';
import { List, Avatar, Card } from 'antd';

const DonorHistory = () => {
    // Dummy data for the Donation History
    const initialDonations = [
        {
            id: 1,
            donorName: 'Alice Johnson',
            amount: 50,
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwu-3xgEXVw2EtGpAc8tJuoHNdNcgYy-iO9jsiloAkl8L2HwKSCEijNrlqwA5NLOH7P0w&usqp=CAU', // Placeholder image
            cause: 'Canned Foods',
            date: '2024-05-02'
        },
        {
            id: 2,
            donorName: 'Bob Smith',
            amount: 75,
            imageUrl: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/191815277_153690773466965_5713526311341054024_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE5RjaBEkyoqTgle30eYROb8OCgBwzxWZ7w4KAHDPFZnj02D7v8_Z0W0LGBLU5FXy7XCG6lgVzmaTAGP4Yr_7mq&_nc_ohc=N5RXnb5WRXYQ7kNvgHVIup2&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAnJ3BLYGStgyKwF6L4QjzVxfM99Zg2pVezUmlmdz1zcA&oe=6660B676', // Placeholder image
            cause: 'Clothes',
            date: '2024-04-06'
        },
        {
            id: 3,
            donorName: 'Hana',
            amount: 75,
            imageUrl: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/342385850_906320190624441_485583250602084843_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGjnc17uayXsESZmgWUQd-2GtOatVUGNdEa05q1VQY10VNoYiPKFez3ZxnwXkbnXM6ix0w9xeTjjNWAZBTm6S-e&_nc_ohc=nQDLPmD_kAoQ7kNvgGsI9rB&_nc_ht=scontent.fcai19-7.fna&oh=00_AfBW11fr11H5rdq4l--rzq_4Y6JqA_jSTfBqoTNz2jG86Q&oe=663F0316', // Placeholder image
            cause: 'Puzzles and Teddy Bears',
            date: '2024-03-25'
        }
    ];

    // State to store donations
    const [donations] = useState(initialDonations);

    return (
        <div style={{
            width: '100%', maxWidth: '600px', alignItems: 'left', justifyContent: 'left', marginRight: '4000px'
        }}>
            <h2>Donation History</h2>
            <List
                itemLayout="horizontal"
                dataSource={donations}
                renderItem={donation => (
                    <List.Item>
                        <Card style={{ width: '100%' }}>
                            <List.Item.Meta
                                avatar={<Avatar src={donation.imageUrl} shape='square' size={70} />} // Setting size to 100px
                                title={`Donation for: ${donation.cause}`}
                                description={`Date: ${donation.date}`}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default DonorHistory;
