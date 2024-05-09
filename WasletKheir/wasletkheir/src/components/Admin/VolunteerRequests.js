import Table from './Table';
import Navbar from './NavBar';
import './App.css';
import Footer from './Footer';

function AdminVolRequests(){

  const columns= [
    { Header: '#', accessor: 'ID' },
    { Header: 'First Name', accessor: "First Name" },
    { Header: 'Last Name', accessor: 'Last Name'},
    { Header: 'Role', accessor: 'Role', disableSortBy: true},
    { Header: 'Email', accessor: 'Email'},
    { Header: 'Contact Number', accessor: 'Contact Number'},
    { Header: 'Request Date', accessor: 'Date'},
  ];
  
  const data = [
    {
      "ID": 1,
      "First Name": "Ahmed",
      "Last Name": "Ibrahim",
      "Gender": "Male",
      "Role": "Doctor",
      "Email": "ahmed.ibrahim@example.com",
      "Contact Number": "+201234567890",
      "Address": "123 Street Name",
      "Area": "Dokki",
      "Governorate": "Giza",
      Date: "2024-05-01"
    },
    {
      "ID": 2,
      "First Name": "Sara",
      "Last Name": "Ali",
      "Gender": "Female",
      "Role": "Teacher",
      "Email": "sara.ali@example.com",
      "Contact Number": "+201234567891",
      "Address": "456 Street Name",
      "Area": "Maadi",
      "Governorate": "Cairo",
      Date: "2024-05-03"
    },
    {
      "ID": 3,
      "First Name": "Mohamed",
      "Last Name": "Hassan",
      "Gender": "Male",
      "Role": "Doctor",
      "Email": "mohamed.hassan@example.com",
      "Contact Number": "+201234567892",
      "Address": "789 Street Name",
      "Area": "Raml Station",
      "Governorate": "Alexandria",
      Date: "2024-03-01"
    },
    {
      "ID": 4,
      "First Name": "Nour",
      "Last Name": "Khalid",
      "Gender": "Female",
      "Role": "Teacher",
      "Email": "nour.khalid@example.com",
      "Contact Number": "+201234567893",
      "Address": "1011 Street Name",
      "Area": "Karnak",
      "Governorate": "Luxor",
      Date: "2024-02-15"
    },
    {
      "ID": 5,
      "First Name": "Fatma",
      "Last Name": "Abdelrahman",
      "Gender": "Female",
      "Role": "Doctor",
      "Email": "fatma.abdelrahman@example.com",
      "Contact Number": "+201234567894",
      "Address": "1213 Street Name",
      "Area": "Philae",
      "Governorate": "Aswan",
      Date: "2024-02-10"
    },
    {
      "ID": 6,
      "First Name": "Ali",
      "Last Name": "Saeed",
      "Gender": "Male",
      "Role": "Teacher",
      "Email": "ali.saeed@example.com",
      "Contact Number": "+201234567895",
      "Address": "1415 Street Name",
      "Area": "Ferdinand",
      "Governorate": "Port Said",
      Date: "2024-02-03"
    },
    {
      "ID": 7,
      "First Name": "Hassan",
      "Last Name": "Mahmoud",
      "Gender": "Male",
      "Role": "Doctor",
      "Email": "hassan.mahmoud@example.com",
      "Contact Number": "+201234567896",
      "Address": "1617 Street Name",
      "Area": "Suez Canal",
      "Governorate": "Suez",
      Date: "2024-03-15"
      
    },
    {
      "ID": 8,
      "First Name": "Amira",
      "Last Name": "Youssef",
      "Gender": "Female",
      "Role": "Teacher",
      "Email": "amira.youssef@example.com",
      "Contact Number": "+201234567897",
      "Address": "1819 Street Name",
      "Area": "El-Temsah Lake",
      "Governorate": "Ismailia",
      Date: "2024-02-20"
    },
    {
      "ID": 9,
      "First Name": "Ibrahim",
      "Last Name": "Mansour",
      "Gender": "Male",
      "Role": "Doctor",
      "Email": "ibrahim.mansour@example.com",
      "Contact Number": "+201234567898",
      "Address": "2021 Street Name",
      "Area": "Damietta Port",
      "Governorate": "Damietta",
      Date: "2024-02-19"
    },
    {
      "ID": 10,
      "First Name": "Yara",
      "Last Name": "Omar",
      "Gender": "Female",
      "Role": "Teacher",
      "Email": "yara.omar@example.com",
      "Contact Number": "+201234567899",
      "Address": "2223 Street Name",
      "Area": "Qift",
      "Governorate": "Qena",
      Date: "2024-02-08"
    },
    {
      "ID": 11,
      "First Name": "Omar",
      "Last Name": "Khaled",
      "Gender": "Male",
      "Role": "Doctor",
      "Email": "omar.khaled@example.com",
      "Contact Number": "+201234567890",
      "Address": "2425 Street Name",
      "Area": "Bibeha",
      "Governorate": "Beni Suef",
      Date: "2024-03-16"
    },
    {
      "ID": 12,
      "First Name": "Mariam",
      "Last Name": "Mohamed",
      "Gender": "Female",
      "Role": "Teacher",
      "Email": "mariam.mohamed@example.com",
      "Contact Number": "+201234567891",
      "Address": "2627 Street Name",
      "Area": "Abydos",
      "Governorate": "Sohag",
      Date: "2024-05-08"
    },
    {
      "ID": 13,
      "First Name": "Hana",
      "Last Name": "Adel",
      "Gender": "Female",
      "Role": "Doctor",
      "Email": "hana.adel@example.com",
      "Contact Number": "+201234567892",
      "Address": "2829 Street Name",
      "Area": "Akhetaten",
      "Governorate": "Minya",
      Date: "2024-04-15"
    },
    {
      "ID": 14,
      "First Name": "Amr",
      "Last Name": "Hassan",
      "Gender": "Male",
      "Role": "Teacher",
      "Email": "amr.hassan@example.com",
      "Contact Number": "+201234567893",
      "Address": "3031 Street Name",
      "Area": "Lahun",
      "Governorate": "Fayoum",
      Date: "2024-04-31"
    },
    {
      "ID": 15,
      "First Name": "Salma",
      "Last Name": "Samir",
      "Gender": "Female",
      "Role": "Doctor",
      "Email": "salma.samir@example.com",
      "Contact Number": "+201234567894",
      "Address": "3233 Street Name",
      "Area": "El-Assasif",
      "Governorate": "Asyut",
      Date: "2024-04-22"
    }
  ];
  
  const filterColumn = [
    {
      name: 'Role',
      options: ['Doctor', 'Teacher']
    },
  ];
  

return (
  <div style={{minHeight: '100vh'}}>
    <Navbar />
   <div className='table-title'>
  Volunteering Requests
</div>
    <Table columns={columns} data={data} filterColumn={filterColumn}/>
    <Footer/>
  </div>
);

}

export default AdminVolRequests;

  
 