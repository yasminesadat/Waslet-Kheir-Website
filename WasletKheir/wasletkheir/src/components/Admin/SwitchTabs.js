import React, { useState } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('total');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const xAxis = [{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Month', startOnTick: true }];
  const yAxis = [{ label: '', min: 0 }];
  const series = [
    {
      data: [4782, 3614, 3000, 3250, 3750, 4000, 3500, 4250, 4500, 4749, 5001, 5309],
      label: 'total number of donations for the year 2023',
      color: '#785245'
    },
  ];
  const series1 = [
    {
      data: [850, 600, 650, 800, 550, 800, 700, 650, 600, 550, 500, 748],
      label: 'food donations for the year 2023',
      color: '#77cae9'
    },
  ];
  const series2 = [
    {
      data: [850, 500, 763, 800, 900, 550, 379, 790, 1000, 550, 800, 748],
      label: 'blood donations for the year 2023',
      color: '#f3a84d'
    },
  ];
  const series3 = [
    {
      data: [850, 600, 650, 800, 550, 800, 700, 650, 600, 550, 500, 748],
      label: 'school supplies donated for the year 2023',
      color: '#37c8d6'
    },
  ];
  const series4 = [
    {
      data: [748, 800, 950, 1000, 670, 750, 900, 870, 590, 700, 690, 800],
      label: 'medical supplies donated for the year 2023',
      color: '#cfca15'
    },
  ];
  const series5 = [
    {
      data: [900, 920, 850, 800, 750, 799, 600, 1000, 1050, 900, 800, 810],
      label: 'toys donations for the year 2023',
      color: '#948efd'
    },
  ];
  const series6 = [
    {
      data: [750, 645, 700, 600, 550, 670, 680, 740, 900, 850, 600, 748],
      label: 'clothes donated for the year 2023',
      color: '#fb8788'
    },
  ];
  const width = 700;
  const height = 300;

  return (
    <div className="tab-content" id="tabs-content" >
      <ul className="nav nav-pills mb-3" id="tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'total' ? 'active' : ''}`}
            id="all-tab"
            role="tab"
            aria-controls="total"
            aria-selected={activeTab === 'total'}
            onClick={() => handleTabChange('total')}
          >
            Total Donations
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'food' ? 'active' : ''}`}
            id="food-tab"
            role="tab"
            aria-controls="food"
            aria-selected={activeTab === 'food'}
            onClick={() => handleTabChange('food')}
          >
            Food
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'blood' ? 'active' : ''}`}
            id="blood-tab"
            role="tab"
            aria-controls="blood"
            aria-selected={activeTab === 'blood'}
            onClick={() => handleTabChange('blood')}
          >
            Blood
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'school' ? 'active' : ''}`}
            id="school-tab"
            role="tab"
            aria-controls="school"
            aria-selected={activeTab === 'school'}
            onClick={() => handleTabChange('school')}
          >
            School Supplies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'medical' ? 'active' : ''}`}
            id="medical-tab"
            role="tab"
            aria-controls="medical"
            aria-selected={activeTab === 'medical'}
            onClick={() => handleTabChange('medical')}
          >
            Medical Supplies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'toy' ? 'active' : ''}`}
            id="toy-tab"
            role="tab"
            aria-controls="toy"
            aria-selected={activeTab === 'toy'}
            onClick={() => handleTabChange('toy')}
          >
            Toys
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'cloth' ? 'active' : ''}`}
            id="cloth-tab"
            role="tab"
            aria-controls="cloth"
            aria-selected={activeTab === 'cloth'}
            onClick={() => handleTabChange('cloth')}
          >
            Clothes
          </button>
        </li>
      </ul>


      <div style={{ marginLeft: '10%' }} >
        <div
          className={`tab-pane fade ${activeTab === 'total' ? 'show active' : ''}`}
          id="total"
          role="tabpanel"
          aria-labelledby="total-tab"

        >
          {activeTab === 'total' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series} width={width} height={height} /></p>
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'food' ? 'show active' : ''}`}
          id="food"
          role="tabpanel"
          aria-labelledby="food-tab"
        >
          {activeTab === 'food' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series1} width={width} height={height} /></p>
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'blood' ? 'show active' : ''}`}
          id="blood"
          role="tabpanel"
          aria-labelledby="blood-tab"
        >
          {activeTab === 'blood' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series2} width={width} height={height} /></p>
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'school' ? 'show active' : ''}`}
          id="school"
          role="tabpanel"
          aria-labelledby="school-tab"
        >
          {activeTab === 'school' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series3} width={width} height={height} /></p>
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'medical' ? 'show active' : ''}`}
          id="medical"
          role="tabpanel"
          aria-labelledby="medical-tab"
        >
          {activeTab === 'medical' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series4} width={width} height={height} /></p>
            </div>
          )}
        </div>

        <div
          className={`tab-pane fade ${activeTab === 'toy' ? 'show active' : ''}`}
          id="toy"
          role="tabpanel"
          aria-labelledby="toy-tab"
        >
          {activeTab === 'toy' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series5} width={width} height={height} /></p>
            </div>
          )}
        </div>
        <div
          className={`tab-pane fade ${activeTab === 'cloth' ? 'show active' : ''}`}
          id="cloth"
          role="tabpanel"
          aria-labelledby="cloth-tab"
        >
          {activeTab === 'cloth' && (
            <div>
              <p><LineChart xAxis={xAxis} yAxis={yAxis} series={series6} width={width} height={height} /></p>
            </div>
          )}
        </div>


      </div>
    </div>
  );
};

export default TabsComponent;