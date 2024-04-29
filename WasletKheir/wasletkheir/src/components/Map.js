import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function GoogleMap() {
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
            <button className='passButton' onClick={openModal}>Pin Location on Map</button>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.093543714628!2d31.47535887549011!3d30.062853017698387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145819abf3cb2013%3A0xa3ef9e387e234105!2sGroup%2044!5e0!3m2!1sen!2seg!4v1714325706970!5m2!1sen!2seg"
                        style={{ width: '100%', height: '300px', border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <button className='NormalButton' onClick={handleMapClick}>Submit Pin</button>
                </div>
            </Popup>
        </div>
    );
};
