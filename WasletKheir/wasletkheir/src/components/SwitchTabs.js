import React, { useState } from 'react';
import RegisterD from './RegisterD';
import NavBarLogoTitle from './NavBarLogoTitle';
import RegFormOrg from './RegFormOrg';
import { FaLeftLong } from 'react-icons/fa6';
const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('both');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div >
            <  NavBarLogoTitle />
            <ul style={{ marginLeft: "43%" }} className="nav nav-pills mb-3" id="tabs" role="tablist">

                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'donors' ? 'active' : ''}`}
                        id="donors-tab"
                        role="tab"
                        aria-controls="donors"
                        aria-selected={activeTab === 'donors'}
                        onClick={() => handleTabChange('donors')}
                    >
                        Donor
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button
                        className={`nav-link ${activeTab === 'organizations' ? 'active' : ''}`}
                        id="organizations-tab"
                        role="tab"
                        aria-controls="organizations"
                        aria-selected={activeTab === 'organizations'}
                        onClick={() => handleTabChange('organizations')}
                    >
                        Organization
                    </button>
                </li>
            </ul>

            <div className="tab-content" id="tabs-content">
                <div
                    className={`tab-pane fade ${(activeTab === 'donors') ? 'show active' : ''}`}
                    id="donors"
                    role="tabpanel"
                    aria-labelledby="donors-tab"
                >
                    {(activeTab === 'donors') && (
                        <div>
                            <RegisterD />
                        </div>
                    )}
                </div>
                <div
                    className={`tab-pane fade ${(activeTab === 'organizations') ? 'show active' : ''}`}
                    id="organizations"
                    role="tabpanel"
                    aria-labelledby="organizations-tab"
                >
                    {activeTab === 'organizations' && (
                        <div>
                            <RegFormOrg />
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default TabsComponent;