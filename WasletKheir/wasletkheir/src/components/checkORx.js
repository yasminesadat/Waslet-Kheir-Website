import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
export default function checkORx() {
    return (
        <div>
            <div style={{ backgroundColor: 'green', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
                <FaCheck style={{ fontSize: '20px', color: 'white' }} />
            </div>
            <div style={{ backgroundColor: 'red', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
                <IoCloseSharp style={{ fontSize: '20px', color: 'white' }} />
            </div>
        </div>
    )
}

