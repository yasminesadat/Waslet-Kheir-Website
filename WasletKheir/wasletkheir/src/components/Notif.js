import { useState } from "react";
import Notifications from "react-notifications-menu";
import "./styles.css";
import { MdDeliveryDining } from "react-icons/md";


// Define multiple default notifications
const DEFAULT_NOTIFICATIONS = [
    {
        image: "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "Hi!",
        detailPage: "/events",
        receivedTime: "5m ago"
    },
    {
        image: "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "Hello",
        detailPage: "/events",
        receivedTime: "10m ago"
    },
    {
        image: "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "Hey there!",
        detailPage: "/events",
        receivedTime: "15m ago"
    },
    {
        image: "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "How are you?",
        detailPage: "/events",
        receivedTime: "20m ago"
    },
    {
        image: "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "What's up?",
        detailPage: "/events",
        receivedTime: "25m ago"
    }
];

export default function Notif() {
    const [data, setData] = useState(DEFAULT_NOTIFICATIONS);

    return (
        <div className="App">
            <div>
                <Notifications
                    data={data}
                    header={{
                        title: "Notifications",
                        option: { text: "View All", onClick: () => console.log("Clicked") }
                    }}
                    markAsRead={(data) => {
                        console.log(data);
                    }}
                />
            </div>
        </div>
    );
}
