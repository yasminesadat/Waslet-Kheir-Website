import React from 'react'
import { useEffect, setTimeOut, second, useState } from 'react'
import { useNavigate } from "react-router-dom";

function SpinnerLoader({ nextPage }) {
    const navigate = useNavigate();
    const [text, setText] = useState(false);
    const [showImg, setShowImg] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowImg(false);
            navigate(nextPage);
        }, 30000);
    }, []);
    return (
        <>
            <div>
                {
                    showImg ? (
                        <img src="./spinner.svg" />
                    ) : (
                        <h3>{text}</h3>)
                }
            </div>
        </>
    )

}

export default SpinnerLoader = { second }