import { useState } from "react";
import Notifications from "react-notifications-menu";
import "./styles.css";
import { MdDeliveryDining } from "react-icons/md";


// Define multiple default notifications
const DEFAULT_NOTIFICATIONS = [
    {
        image: "notification.png",
        message: "Your request with id #2342 for jackets has been chosen by a donor!",
        detailPage: "/events",
        receivedTime: "5m ago"
    },
    {
        image: "notification.png",
        message: "The courier is on his way with school supplies for request #5467",
        detailPage: "/events",
        receivedTime: "10m ago"
    },
    {
        image: "notification.png",
        message: "Your request with id #9870 for puzzles and stuffed toys has been chosen by a donor!",
        detailPage: "/events",
        receivedTime: "15m ago"
    },
    {
        image: "notification.png", message: "The courier is on his way with your fresh food delivery , Get ready to meet him!",
        detailPage: "/events",
        receivedTime: "20m ago"
    },
    {
        image: "notification.png", message: "Your request with id #0187 for the fridge has been chosen by a donor!",
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
