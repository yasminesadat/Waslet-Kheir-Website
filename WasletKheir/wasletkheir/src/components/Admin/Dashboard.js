import './App.css';
import React from 'react';
import Footer from './Footer';
import CountUp from 'react-countup';
import { Statistic, Card, Col, Row } from 'antd';
import TabsComponent from './SwitchTabs';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
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

    <div style={{backgroundColor: '#f2f2f2'}}>
      <NavBar />
      <div className="adContainer">
        <div className="adLeft-panel">
          <h1><strong><b>Welcome Back!</b></strong></h1>
          <h3 style={{ color: 'grey',marginTop:'-2%'}}> Track your activity here</h3>
          <div style={{height:'0.8%'}} />
          <MyCard
            image="icons8-donation-64.png"
            title="Total Donations"
            description={<Statistic title="last year" value={49505} formatter={formatter} />}
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
        <div className="adCenter-panel">

          <h2>
            {/* <br/> <br/><br></br><br/> */}

            <h4 style={{ color: 'grey' }}> Navigate through the past statistics</h4>

          </h2>
          <ActiveUsers prop1="Active Donors" prop2="Inactive Donors" value1='8079' value2='120' suff1='' suff2='' arrow1={<ArrowUpOutlined />} arrow2={<ArrowDownOutlined />} color1='#3f8600' color2='#cf1322' />
          <br></br>
          <ActiveUsers prop1="Total Website Visitors" prop2="Total impressions" value1='54,869' value2='41' suff1='' suff2='%' arrow1={<ArrowUpOutlined />} arrow2={<ArrowUpOutlined />} color1='#3f8600' color2='#3f8600' />
          <div >

            <TabsComponent />
            {/*<TableComponent/>*/}

          </div>
        </div>

        <div className="adRight-panel">
          <div className='card4'>
            <h3 style={{ color: 'grey', textAlign: 'center', justifySelf: 'center' }}> The following pie chart displays the top three governorates in Egypt that used this website the during the year 2023</h3><br /><br />

            {/* <h3 > the top 3 governorates  </h3> */}
            <PieChartWithCustomizedLabel />
          </div>

        </div>
      </div>


      <Footer />
    </div>

  );
}

export default AdminPage;
/*
const data = [
  { value: 15000, label: 'Cairo' },
  { value: 10000, label: 'Alexandria' },
  { value: 7890, label: 'Portsaid' },
  { value: 5000, label: 'Others' },
];

const size = {
  width: 400,
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
}*/

const ActiveUsers = ({ prop1, value1, prop2, value2, suff1, suff2, arrow1, arrow2, color1, color2 }) => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title={`${prop1}`}
          value={value1}
          precision={0}
          valueStyle={{
            color: color1,
          }}
          prefix={arrow1}
          suffix={suff1}
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title={`${prop2}`}
          value={value2}
          precision={0}
          valueStyle={{
            color: color2,
          }}
          prefix={arrow2}
          suffix={suff2}
        />
      </Card>
    </Col>
  </Row>
);




const data = [
  { label: 'Cairo', value: 15000, color: '#0088FE' },
  { label: 'Alexandria', value: 10000, color: '#00C49F' },
  { label: 'Portsaid', value: 7890, color: '#FFBB28' },
  { label: 'Others', value: 5000, color: '#FF8042' },
];

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 200,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 14,
}));

function PieChartWithCustomizedLabel() {
  return (
    <div>
      <PieChart
        series={[
          {
            outerRadius: 80,
            data,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontSize: 14,
          },
        }}
        {...sizing}
      />
      <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '35px', font: 'bold' }}>
        {data.map((item, index) => (
          <StyledText key={index} x="0" y="0">
            {`${item.label}: ${(item.value / TOTAL * 100).toFixed(2)}%`}<br />
          </StyledText>
        ))}
      </div>
    </div>
  );
}