import Table from './Table';
import Navbar from './NavBar';
import './App.css';
import Footer from './Footer';

function AdminOrgRequests(){

  const columns= [
    { Header: '#', accessor: 'ID' },
    { Header: 'Name', accessor: 'Name' },
    { Header: 'Type', accessor: 'Type', disableSortBy: true,},
    { Header: 'Governorate', accessor: 'Governorate'},
    { Header: 'Email', accessor: 'Email'},
    { Header: 'Contact Number', accessor: 'Phone'},
    { Header: 'Request Date', accessor: 'Date'},
  ];
  const data = [
    {
      ID: 1,
      Name: 'Egyptian Food Bank',
      Type: 'Charity',
      Area: 'Nasr City',
      Governorate: 'Cairo',
      Email: 'info@egyptianfoodbank.org',
      "First Name": 'Nada',"Last Name": 'Ibrahim', Gender:'Female', Phone: '+202 2395 3333',
      Date: "2024-05-01"
    },
    {
      ID: 2,
      Name: 'Misr El Kheir Foundation',
      Type: 'Charity',
      Area: 'Heliopolis',
      Governorate: 'Cairo',
      Email: 'info@misrelkheir.org',
      "First Name": 'Amira', "Last Name": 'Hassan', Gender: 'Female', Phone: '+202 3762 1234',
      Date: "2024-05-02"
    },
    {
      ID: 3,
      Name: 'Resala Charity Organization',
      Type: 'Charity',
      Area: 'Dokki',
      Governorate: 'Giza',
      Email: 'info@resalacharity.org',
      "First Name": 'Tarek', "Last Name": 'Mahmoud', Gender: 'Male', Phone: '+202 3321 4567',
      Date: "2024-04-02"
    },
    {
      ID: 4,
      Name: '57357 Children Cancer Hospital',
      Type: 'Hospital',
      Area: 'Manial',
      Governorate: 'Cairo',
      Email: 'info@57357.org',
      "First Name": 'Yasmin', "Last Name": 'Ahmed', Gender: 'Female', Phone: '+202 2280 5735',
      Date: "2024-05-02"
    },
    {
      ID: 5,
      Name: 'Beit Zakat',
      Type: 'Charity',
      Area: 'Sidi Gaber',
      Governorate: 'Alexandria',
      Email: 'info@beitzakat.org',
      "First Name": 'Hisham', "Last Name": 'Said', Gender: 'Male', Phone: '+203 4789 0123',
      Date: "2024-04-02"
    },
    {
      ID: 6,
      Name: 'El Salam International Hospital',
      Type: 'Hospital',
      Area: 'Maadi',
      Governorate: 'Cairo',
      Email: 'info@elsalamhospital.org',
      "First Name": 'Mariam', "Last Name": 'Khalifa', Gender: 'Female', Phone: '+202 2796 3456',
      Date: "2024-01-02"
    },
    {
      ID: 7,
      Name: 'Cleopatra Hospital',
      Type: 'Hospital',
      Area: 'Sidi Gaber',
      Governorate: 'Alexandria',
      Email: 'info@cleopatrahospital.org',
      "First Name": 'Ahmed', "Last Name": 'Mansour', Gender: 'Male', Phone: '+203 4567 2345',
      Date: "2024-02-15"
    },
    {
      ID: 8,
      Name: 'Zagazig University Hospital',
      Type: 'Hospital',
      Area: 'Zagazig',
      Governorate: 'Sharqia',
      Email: 'info@zagazighospital.edu.eg',
      "First Name": 'Fatima', "Last Name": 'Ali', Gender: 'Female', Phone: '+2010 9876 5432',
      Date: "2024-02-20"
    },
    {
      ID: 9,
      Name: 'Sultan Hassan Mosque',
      Type: 'Mosque',
      Area: 'Islamic Cairo',
      Governorate: 'Cairo',
      Email: 'info@sultanhassanmosque.org',
      "First Name": 'Kareem', "Last Name": 'Abdel Nasser', Gender: 'Male', Phone: '+202 2365 4321',
      Date: "2024-02-12"
    },
    {
      ID: 10,
      Name: 'St. Mary\'s Church',
      Type: 'Church',
      Area: 'Mokattam',
      Governorate: 'Cairo',
      Email: 'info@stmaryschurch.eg',
      "First Name": 'Marina', "Last Name": 'Gerges', Gender: 'Female', Phone: '+202 2258 7890',
      Date: "2024-04-15"
    },
    {
      ID: 11,
      Name: 'Hope Village Orphanage',
      Type: 'Orphanage',
      Area: 'Zamalek',
      Governorate: 'Cairo',
      Email: 'info@hopevillageorphanage.org',
      "First Name": 'Aisha', "Last Name": 'Ibrahim', Gender: 'Female', Phone: '+202 2901 2345',
      Date: "2024-04-20"
    },
    {
      ID: 12,
      Name: 'Children\'s Mercy Foundation',
      Type: 'Orphanage',
      Area: 'Dokki',
      Governorate: 'Giza',
      Email: 'info@childrensmercyfoundation.org',
      "First Name": 'Mahmoud', "Last Name": 'Farouk', Gender: 'Male', Phone: '+202 3876 5432',
      Date: "2024-03-20"
    },
    {
      ID: 13, 
      Name: 'Dar Al Orman',
      Type: 'Orphanage',
      Area: 'Assiut City',
      Governorate: 'Assiut',
      Email: 'info@daralorman.org',
      "First Name": 'Nour', "Last Name": 'RashID', Gender: 'Female', Phone: '+2088 1234 5678',
      Date: "2024-03-21"
    },
    {
      ID: 14,
      Name: 'Al-Azhar University',
      Type: 'Public School',
      Area: 'Islamic Cairo',
      Governorate: 'Cairo',
      Email: 'info@alazhar.edu.eg',
      "First Name": 'Youssef', "Last Name": 'Hassan', Gender: 'Male', Phone: '+202 2235 1234',
      Date: "2024-03-25"
    }
];

  const filterColumn = [
    {
      name: 'Type',
      options: ['Charity', 'Church', 'Hospital', 'Orphanage', 'Mosque', 'Public School']
    },
  ];
  

return (
  <div style={{minHeight: '100vh'}}>
    <Navbar />
    <div className='table-title'>
  Organizational Requests
</div>
    <Table columns={columns} data={data} filterColumn={filterColumn}/>
    <Footer/>
  </div>

);

}

export default AdminOrgRequests;

  
 