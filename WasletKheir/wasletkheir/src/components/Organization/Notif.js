import React from "react";
import PropTypes from "prop-types";
import Notifications from "react-notifications-menu";

const Notif = ({ data }) => {
    return (
        <div>
            <Notifications
                width='400px'
                data={data}
                header={{
                    title: "Notifications",
                    option: { text: "", onClick: () => console.log("Options clicked") }
                }}
                markAsRead={(dataItem) => {
                    console.log("Mark as read:", dataItem);
                }}
                icon={'Bell.png'}
                card={{
                    width: '50px'
                }}
            />
        </div>
    );
};

Notif.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        message: PropTypes.string.isRequired,
        detailPage: PropTypes.string,
        receivedTime: PropTypes.string
    })).isRequired
};

export default Notif;
