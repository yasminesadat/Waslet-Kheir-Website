import Table from './Table';
import Navbar from './NavBar';
import './App.css';
import Footer from './Footer';

function AdminOrgRequests(){

  const columns= [
    { Header: '#', accessor: 'ID' },
    { Header: 'Name', accessor: 'Name' },
    { Header: 'Type', accessor: 'Type', disableSortBy: true},
    { Header: 'Governorate', accessor: 'Governorate'},
    { Header: 'Email', accessor: 'Email'},
    { Header: 'Contact Number', accessor: 'Phone'},
  ];
  const data = [
    {
      ID: 2,
      Name: 'Misr El Kheir Foundation',
      Type: 'Charity',
      Area: 'Heliopolis',
      Governorate: 'Cairo',
      Email: 'info@misrelkheir.org',
      Phone: '+202 3762 1234',
      "First Name": 'Amira', "Last Name": 'Hassan', Gender: 'Female',
      Date: "2024-05-02"
    },
    {
      ID: 3,
      Name: 'Resala Charity Organization',
      Type: 'Charity',
      Area: 'Dokki',
      Governorate: 'Giza',
      Email: 'info@resalacharity.org',
      Phone: '+202 3321 4567',
      "First Name": 'Tarek', "Last Name": 'Mahmoud', Gender: 'Male',
      Date: "2024-04-02"
    },
    {
      ID: 4,
      Name: '57357 Children Cancer Hospital',
      Type: 'Hospital',
      Area: 'Manial',
      Governorate: 'Cairo',
      Email: 'info@57357.org',
      Phone: '+202 2280 5735',
      "First Name": 'Yasmin', "Last Name": 'Ahmed', Gender: 'Female',
      Date: "2024-05-02"
    },
    {
      ID: 5,
      Name: 'Beit Zakat',
      Type: 'Charity',
      Area: 'Sidi Gaber',
      Governorate: 'Alexandria',
      Email: 'info@beitzakat.org',
      Phone: '+203 4789 0123',
      "First Name": 'Hisham', "Last Name": 'Said', Gender: 'Male',
      Date: "2024-04-02"
    },
    {
      ID: 6,
      Name: 'El Salam International Hospital',
      Type: 'Hospital',
      Area: 'Maadi',
      Governorate: 'Cairo',
      Email: 'info@elsalamhospital.org',
      Phone: '+202 2796 3456',
      "First Name": 'Mariam', "Last Name": 'Khalifa', Gender: 'Female',
      Date: "2024-01-02"
    },
    {
      ID: 7,
      Name: 'Cleopatra Hospital',
      Type: 'Hospital',
      Area: 'Sidi Gaber',
      Governorate: 'Alexandria',
      Email: 'info@cleopatrahospital.org',
      Phone: '+203 4567 2345',
      "First Name": 'Ahmed', "Last Name": 'Mansour', Gender: 'Male',
      Date: "2024-02-15"
    },
    {
      ID: 8,
      Name: 'Zagazig University Hospital',
      Type: 'Hospital',
      Area: 'Zagazig',
      Governorate: 'Sharqia',
      Email: 'info@zagazighospital.edu.eg',
      Phone: '+2010 9876 5432',
      "First Name": 'Fatima', "Last Name": 'Ali', Gender: 'Female',
      Date: "2024-02-20"
    },
    {
      ID: 9,
      Name: 'Sultan Hassan Mosque',
      Type: 'Mosque',
      Area: 'Islamic Cairo',
      Governorate: 'Cairo',
      Email: 'info@sultanhassanmosque.org',
      Phone: '+202 2365 4321',
      "First Name": 'Kareem', "Last Name": 'Abdel Nasser', Gender: 'Male',
      Date: "2024-02-12"
    },
    {
      ID: 10,
      Name: 'St. Mary\'s Church',
      Type: 'Church',
      Area: 'Mokattam',
      Governorate: 'Cairo',
      Email: 'info@stmaryschurch.eg',
      Phone: '+202 2258 7890',
      "First Name": 'Marina', "Last Name": 'Gerges', Gender: 'Female',
      Date: "2024-04-15"
    },
    {
      ID: 11,
      Name: 'Hope Village Orphanage',
      Type: 'Orphanage',
      Area: 'Zamalek',
      Governorate: 'Cairo',
      Email: 'info@hopevillageorphanage.org',
      Phone: '+202 2901 2345',
      "First Name": 'Aisha', "Last Name": 'Ibrahim', Gender: 'Female',
      Date: "2024-04-20"
    },
    {
      ID: 12,
      Name: 'Children\'s Mercy Foundation',
      Type: 'Orphanage',
      Area: 'Dokki',
      Governorate: 'Giza',
      Email: 'info@childrensmercyfoundation.org',
      Phone: '+202 3876 5432',
      "First Name": 'Mahmoud', "Last Name": 'Farouk', Gender: 'Male',
      Date: "2024-03-20"
    },
    {
      ID: 13, 
      Name: 'Dar Al Orman',
      Type: 'Orphanage',
      Area: 'Assiut City',
      Governorate: 'Assiut',
      Email: 'info@daralorman.org',
      Phone: '+2088 1234 5678',
      "First Name": 'Nour', "Last Name": 'RashID', Gender: 'Female',
      Date: "2024-03-21"
    },
    {
      ID: 14,
      Name: 'Al-Azhar University',
      Type: 'Public School',
      Area: 'Islamic Cairo',
      Governorate: 'Cairo',
      Email: 'info@alazhar.edu.eg',
      Phone: '+202 2235 1234',
      "First Name": 'Youssef', "Last Name": 'Hassan', Gender: 'Male',
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

  
 