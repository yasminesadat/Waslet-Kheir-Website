import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OrgDonCard = ({ image, title, description, progress }) => {
    const isFulfilled = Number(progress) === 100;
    const [showConfirm, setShowConfirm] = useState(false);

    const handleDelete = () => {
        setShowConfirm(true);
    };

    const confirmDelete = () => {
        setShowConfirm(false);
        if (title === 'Jackets')
            window.location.href = "/OrgDel1";
        else if (title === 'Plushies')
            window.location.href = "/OrgDel2";
        else if (title === 'Fruits & Vegetables')
            window.location.href = "/OrgDel3";
        else if (title === 'Board Markers')
            window.location.href = "/OrgDel4";


    };
    const handleInfo = () => {
        if (title === 'Jackets')
            window.location.href = "/OrgView1";
        else if (title === 'Plushies')
            window.location.href = "/OrgView2";
        else if (title === "Fruits & Vegetables")
            window.location.href = "/OrgView3";
        else if (title === "Board Markers")
            window.location.href = "/OrgView4";


    };

    const cancelDelete = () => {
        setShowConfirm(false);
    };

    return (
        <div className="card">
            <img className="card-img" src={image} alt={title} />
            <div className={`card-content ${showConfirm ? 'dimmed' : ''}`}>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="button-container">
                    <button className="view-details-button" onClick={handleInfo}><FontAwesomeIcon icon={faInfo} /></button>
                    {!isFulfilled && <button className="edit-button"><FontAwesomeIcon icon={faEdit} /></button>}
                    <button className="delete-button" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} /></button>
                </div>
                <div className="progress-container">
                    <progress className="progress-bar" value={progress} max="100"></progress>
                    <h3>{progress}% Donated</h3>
                </div>
            </div>
            {showConfirm && (
                <div className="overlay">
                    <div className="confirm-dialog">
                        <p>Are you sure you want to delete this request?</p>
                        <div className="confirm-dialog-buttons">
                            <button onClick={confirmDelete}>Yes</button>
                            <button onClick={cancelDelete}>No</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrgDonCard;