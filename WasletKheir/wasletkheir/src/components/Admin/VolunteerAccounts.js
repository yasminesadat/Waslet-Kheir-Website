import Table from './Table1';
import Navbar from './NavBar';
import './App.css';
import Footer from './Footer';

export default function VolAccounts(){

  const columns= [
    { Header: '#', accessor: 'ID' },
    { Header: 'First Name', accessor: "First Name" },
    { Header: 'Last Name', accessor: 'Last Name'},
    { Header: 'Role', accessor: 'Role', disableSortBy: true,},
    { Header: 'Email', accessor: 'Email'},
    { Header: 'Contact Number', accessor: 'Contact Number'},
    { Header: 'Join Date', accessor: 'Date'},
  ];
  
  const data = [
    {
      "ID": 1,
      "First Name": "Ahmed",
      "Last Name": "Ibrahim",
      "Gender": "Male",
      "Role": "Doctor",
      "Specialty": "Cardiology",
      "Number of Pro-Bono Cases": 10,
      "Email": "ahmed.ibrahim@example.com",
      "Contact Number": "+201234567890",
      "Address": "123 Street Name",
      "Area": "Dokki",
      "Governorate": "Giza",
      "Date": "2024-05-01"
    },
    {
      "ID": 2,
      "First Name": "Sara",
      "Last Name": "Ali",
      "Gender": "Female",
      "Role": "Teacher",
      "Subjects": ["Mathematics", ", Physics"],
      "Email": "sara.ali@example.com",
      "Contact Number": "+201234567891",
      "Address": "456 Street Name",
      "Area": "Maadi",
      "Governorate": "Cairo",
      "Date": "2024-05-03"
    },
    {
      "ID": 3,
      "First Name": "Mohamed",
      "Last Name": "Hassan",
      "Gender": "Male",
      "Role": "Doctor",
      "Specialty": "Neurology",
      "Number of Pro-Bono Cases": 8,
      "Email": "mohamed.hassan@example.com",
      "Contact Number": "+201234567892",
      "Address": "789 Street Name",
      "Area": "Raml Station",
      "Governorate": "Alexandria",
      "Date": "2024-03-01"
    },
    {
      "ID": 4,
      "First Name": "Nour",
      "Last Name": "Khalid",
      "Gender": "Female",
      "Role": "Teacher",
      "Subjects": ["English", ", History"],
      "Email": "nour.khalid@example.com",
      "Contact Number": "+201234567893",
      "Address": "1011 Street Name",
      "Area": "Karnak",
      "Governorate": "Luxor",
      "Date": "2024-02-15"
    },
    {
      "ID": 5,
      "First Name": "Fatma",
      "Last Name": "Abdelrahman",
      "Gender": "Female",
      "Role": "Doctor",
      "Specialty": "Pediatrics",
      "Number of Pro-Bono Cases": 5,
      "Email": "fatma.abdelrahman@example.com",
      "Contact Number": "+201234567894",
      "Address": "1213 Street Name",
      "Area": "Philae",
      "Governorate": "Aswan",
      "Date": "2024-02-10"
    },
    {
      "ID": 6,
      "First Name": "Ali",
      "Last Name": "Saeed",
      "Gender": "Male",
      "Role": "Teacher",
      "Subjects": ["Biology", ", Chemistry"],
      "Email": "ali.saeed@example.com",
      "Contact Number": "+201234567895",
      "Address": "1415 Street Name",
      "Area": "Ferdinand",
      "Governorate": "Port Said",
      "Date": "2024-02-03"
    },
    {
      "ID": 7,
      "First Name": "Hassan",
      "Last Name": "Mahmoud",
      "Gender": "Male",
      "Role": "Doctor",
      "Specialty": "Oncology",
      "Number of Pro-Bono Cases": 12,
      "Email": "hassan.mahmoud@example.com",
      "Contact Number": "+201234567896",
      "Address": "1617 Street Name",
      "Area": "Suez Canal",
      "Governorate": "Suez",
      "Date": "2024-03-15"
      
    },
    {
      "ID": 8,
      "First Name": "Amira",
      "Last Name": "Youssef",
      "Gender": "Female",
      "Role": "Teacher",
      "Subjects": ["Arabic", ", French"],
      "Email": "amira.youssef@example.com",
      "Contact Number": "+201234567897",
      "Address": "1819 Street Name",
      "Area": "El-Temsah Lake",
      "Governorate": "Ismailia",
      "Date": "2024-02-20"
    },
    {
      "ID": 9,
      "First Name": "Ibrahim",
      "Last Name": "Mansour",
      "Gender": "Male",
      "Role": "Doctor",
      "Specialty": "Orthopedics",
      "Number of Pro-Bono Cases": 7,
      "Email": "ibrahim.mansour@example.com",
      "Contact Number": "+201234567898",
      "Address": "2021 Street Name",
      "Area": "Damietta Port",
      "Governorate": "Damietta",
      "Date": "2024-02-19"
    },
    {
      "ID": 10,
      "First Name": "Yara",
      "Last Name": "Omar",
      "Gender": "Female",
      "Role": "Teacher",
      "Subjects": ["Computer Science", ", Geography"],
      "Email": "yara.omar@example.com",
      "Contact Number": "+201234567899",
      "Address": "2223 Street Name",
      "Area": "Qift",
      "Governorate": "Qena",
      "Date": "2024-02-08"
    },
    {
      "ID": 11,
      "First Name": "Omar",
      "Last Name": "Khaled",
      "Gender": "Male",
      "Role": "Doctor",
      "Specialty": "Dermatology",
      "Number of Pro-Bono Cases": 9,
      "Email": "omar.khaled@example.com",
      "Contact Number": "+201234567890",
      "Address": "2425 Street Name",
      "Area": "Bibeha",
      "Governorate": "Beni Suef",
      "Date": "2024-03-16"
    },
    {
      "ID": 12,
      "First Name": "Mariam",
      "Last Name": "Mohamed",
      "Gender": "Female",
      "Role": "Teacher",
      "Subjects": ["Literature", ", Art"],
      "Email": "mariam.mohamed@example.com",
      "Contact Number": "+201234567891",
      "Address": "2627 Street Name",
      "Area": "Abydos",
      "Governorate": "Sohag",
      "Date": "2024-05-08"
    },
    {
      "ID": 13,
      "First Name": "Hana",
      "Last Name": "Adel",
      "Gender": "Female",
      "Role": "Doctor",
      "Specialty": "Psychiatry",
      "Number of Pro-Bono Cases": 6,
      "Email": "hana.adel@example.com",
      "Contact Number": "+201234567892",
      "Address": "2829 Street Name",
      "Area": "Akhetaten",
      "Governorate": "Minya",
      "Date": "2024-04-15"
    },
    {
      "ID": 14,
      "First Name": "Amr",
      "Last Name": "Hassan",
      "Gender": "Male",
      "Role": "Teacher",
      "Subjects": ["Physical Education", ", Music"],
      "Email": "amr.hassan@example.com",
      "Contact Number": "+201234567893",
      "Address": "3031 Street Name",
      "Area": "Lahun",
      "Governorate": "Fayoum",
      "Date": "2024-04-31"
    },
    {
      "ID": 15,
      "First Name": "Salma",
      "Last Name": "Samir",
      "Gender": "Female",
      "Role": "Doctor",
      "Specialty": "Internal Medicine",
      "Number of Pro-Bono Cases": 4,
      "Email": "salma.samir@example.com",
      "Contact Number": "+201234567894",
      "Address": "3233 Street Name",
      "Area": "El-Assasif",
      "Governorate": "Asyut",
      "Date": "2024-04-22"
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
  Volunteer Accounts
</div>
    <Table columns={columns} data={data} filterColumn={filterColumn}/>
    <Footer/>
  </div>
);

}


  
 