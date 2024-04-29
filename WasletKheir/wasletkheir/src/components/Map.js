import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function GoogleMap({ location }) {
    const [open, setOpen] = useState(false); // used to describe state of map 
    const [showMessage, setShowMessage] = useState(false); // show a message when its successfu;;

    const openModal = () => setOpen(true);

    const handleMapClick = () => {
        setShowMessage(true);
        alert("location pinned successfully");
        setOpen(false);
    };

    return (
        <div>
            <button type='button' className='pinButton' onClick={openModal}>Pin Location on Map</button>
            <Popup
                open={open}
                closeOnDocumentClick={false}
                onClose={() => {
                    setShowMessage(false);
                    setOpen(false);
                }}
                position="right center"
                modal
                nested
                contentStyle={{ width: "auto", maxWidth: "600px", height: "auto" }}  // Set max-width for the popup
            >
                <div style={{ textAlign: 'center' }}>
                    <iframe
                        title="google map"
                        src={location}
                        style={{ width: '100%', height: '300px', border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <button type='button' className='NormalButton' onClick={handleMapClick}>Submit Pin</button>
                </div>
            </Popup>
        </div>
    );
};