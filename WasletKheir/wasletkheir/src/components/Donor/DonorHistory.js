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
            imageUrl: 'https://www.logotypes101.com/logos/219/34CB77E3CBCE830DED2804B880F31BA2/magdi_yacoub_eng%20[Converted].png',
            cause: 'Medicines',
            date: '2024-03-25'
        },
        {
            id: 3,
            donorName: 'Hana',
            amount: 5,
            imageUrl: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/347810544_2532255760255478_5981346294340596192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE1kF195Bm_ih2XPhMW_sGGlBuI4rpvevGUG4jium968e4MrinKJGm5hSs1pgiBn2jf1lLAwPOmP2Ik-JRm4hBD&_nc_ohc=PRtStQvg2ZQQ7kNvgFUyPsJ&_nc_ht=scontent.fcai19-7.fna&oh=00_AYBjpdLkNjgZJ2z_c4rbrM-V3wsmRd2jMmP_eRnxvnOmJw&oe=66457594',
            cause: 'Teddy Bears',
            date: '2024-02-17'
        },
        {
            id: 3,
            donorName: 'Hana',
            amount: 5,
            imageUrl: 'https://pbs.twimg.com/profile_images/1659160666748452866/SYguRc1N_400x400.jpg',
            cause: 'Medical Equipment',
            date: '2023-012-25'
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
                                avatar={<Avatar src={donation.imageUrl} shape='square' size={75} />} // Setting size to 100px
                                title={<span style={{ fontSize: '20px' }}>Donation for: {donation.cause}</span>}
                                description={<span style={{ fontSize: '18px' }}>Date: {donation.date}</span>}
                            />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default DonorHistory;
