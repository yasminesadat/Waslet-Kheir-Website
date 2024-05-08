import './App.css';
import React from 'react';
import Footer from './Footer';
import CountUp from 'react-countup';
import { Statistic, Card, Col, Row } from 'antd';
import TabsComponent from './SwitchTabs';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import NavBar from './NavBar'

const MyCard = ({ image, title, description }) => {
  return (
    <div className="card3">
      <img src={image} alt={title} className="card3-img" />
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

function AdminPage() {

  const formatter = (value) => <CountUp end={value} separator="," />;

  return (

    <div>
      <NavBar />
      <br /><br /><br />
      <div className="adContainer">
        <div className="adLeft-panel">


          <MyCard
            image="icons8-donation-64.png"
            title="Total Donations"
            description={<Statistic title="this year" value={49505} formatter={formatter} />}
          />
          <br />
          <MyCard
            image="hand2.png"
            title="Volunteers"
            description={<Statistic title="Doctors and Teachers" value={2000} formatter={formatter} />}
          />
          <br />
          <MyCard
            image="hand.png"
            title="New Donations"
            description={<Statistic title="incoming this week" value={450} formatter={formatter} />}
          />

        </div>
        <div className="adRight-panel">

          <h2>
          </h2>
          <div >{/*style={{ border: '2px solid #1661a5',borderRadius:'5px', padding: '20px' }}*/}
            <TabsComponent />
            {/*<TableComponent/>*/}
            <ActiveUsers />
          </div>
        </div>
        <div className="adLeft-panel">
          <div className='card4'>
            <PieChartWithCenterLabel />
          </div>

        </div>
      </div>


      <Footer />
    </div>

  );
}

export default AdminPage;

const data = [
  { value: 15000, label: 'Cairo' },
  { value: 10000, label: 'Alexandria' },
  { value: 7890, label: 'Portsaid' },
  { value: 5000, label: 'Others' },
];

const size = {
  width: 410,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>donors</PieCenterLabel>
    </PieChart>
  );
}

const ActiveUsers = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active Users"
          value={8540}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
        /*suffix="%"*/
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Inactive Users"
          value={500}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
        /*suffix="%"*/
        />
      </Card>
    </Col>
  </Row>
);
