import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart, faGlobe, faTree, faBook } from "@fortawesome/free-solid-svg-icons";

const places = [
    { name: "Place 1", icon: faStar },
    { name: "Place 2", icon: faHeart },
    { name: "Place 3", icon: faGlobe },
    { name: "Place 4", icon: faTree },
    { name: "Place 5", icon: faBook },
];

const Try = () => {
    return (
        <div className="zigzag-container">
            {places.map((place, index) => (
                <div
                    className={`zigzag-item ${index % 2 === 0 ? "left" : "right"}`}
                    key={index}
                >
                    <FontAwesomeIcon icon={place.icon} size="2x" />
                </div>
            ))}
        </div>
    );
};

export default Try;
