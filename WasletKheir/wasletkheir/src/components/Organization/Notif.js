/*import React, { useState } from "react";
import PropTypes from "prop-types";
import Notifications from "react-notifications-menu";
import Delivery from "../Donor/Notif2";
const Notif = ({ messages }) => {
    const [data, setData] = useState(
        messages.map((message, index) => ({
            image: "notifbell.png",
            message,
            detailPage: `/Notif${index}`,
            receivedTime: `${index * 5}m ago`
        }))
    );

    return (
        <div className="App">
            <div>
                <Notifications
                    width='400px'
                    data={data}
                    header={{
                        title: "Notifications",
                        option: { text: "View All", onClick: () => console.log("Clicked") }
                    }}
                    markAsRead={(data) => {
                        console.log(data);
                    }}
                    icon={'Bell.png'}
                />
            </div>
        </div>
    );
};

Notif.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Notif;*/
