import Table from './Table1';
import Navbar from './NavBar';
import './App.css';
import Footer from './Footer';

export default function OrgAccounts(){

  const columns= [
    { Header: '#', accessor: 'ID' },
    {Header: 'Logo',accessor:'Logo',
    Cell: ({ value }) => (
        <div style={{ 
            height: '10vh', // or use '10vh' for 10% of the viewport height
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <img 
              src={value} 
              style={{
             objectFit: 'contain',
             maxWidth: '100%', 
             maxHeight: '100%',
              }}  
              alt="" 
            />
          </div>
      )
     },
    { Header: 'Name', accessor: 'Name' },
    { Header: 'Type', accessor: 'Type'},
    { Header: 'Governorate', accessor: 'Governorate'},
    { Header: 'Area', accessor: 'Area'},
    { Header: 'Join Date', accessor: 'Date'},
  ];
  const data = [
    {
        "ID": 1,
        "Logo": "https://seeklogo.com/images/E/egyptian-food-bank-logo-C71C6ACF11-seeklogo.com.png",
        "Name": "Egyptian Food Bank",
        "Type": "Charity",
        "Address": "123 Main Street",
        "Area": "Nasr City",
        "Governorate": "Cairo",
        "Email": "info@egyptianfoodbank.org",
        "Phone": "+202 2395 3333",
        "First Name": "Nada",
        "Last Name": "Ibrahim",
        "Gender": "Female",
        "Date": "2024-05-01"
    },
    {
        "ID": 2,
        "Logo": "https://media.licdn.com/dms/image/C4D0BAQEV8d4yTcWipQ/company-logo_200_200/0/1630554727847/misr_el_kheir_foundation_mek_logo?e=2147483647&v=beta&t=F9e2CRn7NVDVerFflBacaWektwd144KwMPLV12a3sm4",
        "Name": "Misr El Kheir Foundation",
        "Type": "Charity",
        "Address": "456 El Merghany Street",
        "Area": "Heliopolis",
        "Governorate": "Cairo",
        "Email": "info@misrelkheir.org",
        "Phone": "+202 3762 1234",
        "First Name": "Amira",
        "Last Name": "Hassan",
        "Gender": "Female",
        "Date": "2024-05-02"
    },
    {
        "ID": 3,
        "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV3F-zDNzIS7mRdX729Rhook597Mvmo-jDVPROkVOvA&s",
        "Name": "Resala Charity Organization",
        "Type": "Charity",
        "Address": "789 Dokki Street",
        "Area": "Dokki",
        "Governorate": "Giza",
        "Email": "info@resalacharity.org",
        "Phone": "+202 3321 4567",
        "First Name": "Tarek",
        "Last Name": "Mahmoud",
        "Gender": "Male",
        "Date": "2024-04-02"
    },
    {
        "ID": 4,
        "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbWzNUMHiuV-1LgHHgDs2aLLm_VkBtKIYENZ0oIo48g&s",
        "Name": "57357 Children Cancer Hospital",
        "Type": "Hospital",
        "Address": "321 El Nile Street",
        "Area": "Manial",
        "Governorate": "Cairo",
        "Email": "info@57357.org",
        "Phone": "+202 2280 5735",
        "First Name": "Yasmin",
        "Last Name": "Ahmed",
        "Gender": "Female",
        "Date": "2024-05-02"
    },
    {
        "ID": 5,
        "Logo": "https://cms.baitzakat.org.eg/static/media/zakat.ebc7b863.png",
        "Name": "Beit Zakat",
        "Type": "Charity",
        "Address": "555 Sidi Gaber Street",
        "Area": "Sidi Gaber",
        "Governorate": "Alexandria",
        "Email": "info@beitzakat.org",
        "Phone": "+203 4789 0123",
        "First Name": "Hisham",
        "Last Name": "Said",
        "Gender": "Male",
        "Date": "2024-04-02"
    },
    {
        "ID": 6,
        "Logo": "https://pbs.twimg.com/profile_images/915200250490605568/mQLv-7A__400x400.jpg",
        "Name": "El Salam International Hospital",
        "Type": "Hospital",
        "Address": "987 Maadi Road",
        "Area": "Maadi",
        "Governorate": "Cairo",
        "Email": "info@elsalamhospital.org",
        "Phone": "+202 2796 3456",
        "First Name": "Mariam",
        "Last Name": "Khalifa",
        "Gender": "Female",
        "Date": "2024-01-02"
    },
    {
        "ID": 7,
        "Logo": "https://media.licdn.com/dms/image/C4E0BAQGGmG2kqgXX0A/company-logo_200_200/0/1631377751274/cleopatra_hospitals_group_logo?e=2147483647&v=beta&t=CsXeoLhRHL_K_73h_LylSACq5dbSn_B6ol2lSsODqdU",
        "Name": "Cleopatra Hospital",
        "Type": "Hospital",
        "Address": "741 Cleopatra Street",
        "Area": "Sidi Gaber",
        "Governorate": "Alexandria",
        "Email": "info@cleopatrahospital.org",
        "Phone": "+203 4567 2345",
        "First Name": "Ahmed",
        "Last Name": "Mansour",
        "Gender": "Male",
        "Date": "2024-02-15"
    },
    {
        "ID": 8,
        "Logo": "https://networks.au-ibar.org/show/zagazig-university-shaibet-an-nakareyah-zagazig-2-ash-sharqia-gov/image/2008090514-1037-3085-640x480/AU+REC+logos+-+2022-03-30T125004.276.png",
        "Name": "Zagazig University Hospital",
        "Type": "Hospital",
        "Address": "852 University Street",
        "Area": "Zagazig",
        "Governorate": "Sharqia",
        "Email": "info@zagazighospital.edu.eg",
        "Phone": "+2010 9876 5432",
        "First Name": "Fatima",
        "Last Name": "Ali",
        "Gender": "Female",
        "Date": "2024-02-20"
    },
    {
        "ID": 9,
        "Logo": "https://static.vecteezy.com/system/resources/previews/007/874/146/original/mosque-logo-vector.jpg",
        "Name": "Sultan Hassan Mosque",
        "Type": "Mosque",
        "Address": "10 Sultan Hassan Street",
        "Area": "Islamic Cairo",
        "Governorate": "Cairo",
        "Email": "info@sultanhassanmosque.org",
        "Phone": "+202 2365 4321",
        "First Name": "Kareem",
        "Last Name": "Abdel Nasser",
        "Gender": "Male",
        "Date": "2024-02-12"
    },
    {
        "ID": 10,
        "Logo": "https://logowik.com/content/uploads/images/church1193.logowik.com.webp",
        "Name": "St. Mary's Church",
        "Type": "Church",
        "Address": "123 Church Street",
        "Area": "Mokattam",
        "Governorate": "Cairo",
        "Email": "info@stmaryschurch.eg",
        "Phone": "+202 2258 7890",
        "First Name": "Marina",
        "Last Name": "Gerges",
        "Gender": "Female",
        "Date": "2024-04-15"
    },
    {
        "ID": 11,
        "Logo": "https://images.squarespace-cdn.com/content/v1/5bbad70df4755a1fa99684e8/47275338-0b06-4baa-af97-9b9d2035bfcb/unnamed+%281%29.png",
        "Name": "Hope Village Orphanage",
        "Type": "Orphanage",
        "Address": "234 Hope Street",
        "Area": "Zamalek",
        "Governorate": "Cairo",
        "Email": "info@hopevillageorphanage.org",
        "Phone": "+202 2901 2345",
        "First Name": "Aisha",
        "Last Name": "Ibrahim",
        "Gender": "Female",
        "Date": "2024-04-20"
    },
    {
        "ID": 12,
        "Logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftfUoGsuJFCBKk4cqWOUK8Ad9lu9Ia2TJq709NY6Bzg&s",
        "Name": "Children's Mercy Foundation",
        "Type": "Orphanage",
        "Address": "567 Orphan Street",
        "Area": "Dokki",
        "Governorate": "Giza",
        "Email": "info@childrensmercyfoundation.org",
        "Phone": "+202 3876 5432",
        "First Name": "Mahmoud",
        "Last Name": "Farouk",
        "Gender": "Male",
        "Date": "2024-03-20"
    },
    {
        "ID": 13,
        "Logo": "https://dar-alorman.com/imgs/logos/icon-logo.png",
        "Name": "Dar Al Orman",
        "Type": "Orphanage",
        "Address": "789 Orman Street",
        "Area": "Assiut City",
        "Governorate": "Assiut",
        "Email": "info@daralorman.org",
        "Phone": "+2088 1234 5678",
        "First Name": "Nour",
        "Last Name": "RashID",
        "Gender": "Female",
        "Date": "2024-03-21"
    },
    {
        "ID": 14,
        "Logo": "https://networks.au-ibar.org/show/al-zhar-university-el-darb-el-ahmar-cairo-governorate-egypt-2/image/2008090514-1059-3117-640x480/AU+REC+logos+-+2022-03-30T152444.942.png",
        "Name": "Al-Azhar University",
        "Type": "Public School",
        "Address": "101 University Street",
        "Area": "Islamic Cairo",
        "Governorate": "Cairo",
        "Email": "info@alazhar.edu.eg",
        "Phone": "+202 2235 1234",
        "First Name": "Youssef",
        "Last Name": "Hassan",
        "Gender": "Male",
        "Date": "2024-03-25"
    }
];

  const filterColumn = [
    {
      name: 'Type',
      options: ['Charity', 'Church', 'Hospital', 'Orphanage', 'Mosque', 'Public School']
    },
    {
        name: 'Governorate',
        options: ['Alexandria', 'Assiut','Cairo', 'Giza', 'Sharqia']
    },
    {
        name: 'Area',
        options:[
            "Assiut City",
            "Dokki",
            "Heliopolis",
            "Islamic Cairo",
            "Maadi",
            "Manial",
            "Mokattam",
            "Nasr City",
            "Sidi Gaber",
            "Zagazig",
            "Zamalek"
          ]
    },
  ];
  

return (
  <div style={{minHeight: '100vh'}}>
    <Navbar />
    <div className='table-title'>
  Organizational Accounts
</div>
    <Table columns={columns} data={data} filterColumn={filterColumn}/>
    <Footer/>
  </div>
);

}


  
 