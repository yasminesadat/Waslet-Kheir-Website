import { useState } from "react";
import Notifications from "react-notifications-menu";
import "../styles.css";


// Define multiple default notifications
const DEFAULT_NOTIFICATIONS = [
    {
        image: "notifbell.png",
        message: "Your request with request id #2333 for jackets has been chosen by a donor",
        detailPage: "/events",
        receivedTime: "5m ago"
    },
    {
        image: "notifbell.png",
        message: "The courier is on his way with the school supplies for request #9012 ",
        detailPage: "/events",
        receivedTime: "10m ago"
    },
    {
        image: "notifbell.png",
        message: " Your request with id #2346 for puzzles and toys has been chosen by a donor",
        detailPage: "/events",
        receivedTime: "15m ago"
    },
    {
        image: "notifbell.png",
        message: "The courier is on his way with your fresh food delivery for request #0187, Get ready to meet him",
        detailPage: "/events",
        receivedTime: "20m ago"
    },
    {
        image: "notifbell.png",
        message: "Your request with id #8711 for the fridge has been chosen by a donor",
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

