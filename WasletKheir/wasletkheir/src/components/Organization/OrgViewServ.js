import React, { useState } from 'react';
import ServicesCard from './ServicesCard';
import OrgNavBar2 from './NavbarOrg';
import './Org.css';

export default function OrgViewServ() {
    const [filter, setFilter] = useState('all');
    const [status, setStatus] = useState('ongoing');
    const [services, setServices] = useState([
        {
            image: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            title: "Mersal is Requesting a Doctor",
            description: "We would like a pediatrician to check up on kids",
            type: "medical",
            contactInfo: [
                { label: 'Name', value: 'Dr.Ahmed Helmy' },
                { label: 'Email', value: 'dr.ahmedhelmy@gmail.com' },
                { label: 'Speciality', value: 'Pediatrics & Nutrition' },
                { label: 'Phone Number', value: '01154632049' },
                { label: 'Clinic location', value: 'Rehab Medical Center room 223' },

            ],
            serviceDetails: [
                { label: 'Patient Name', value: 'Jana Ashraf' },
                { label: 'Patient Weight', value: '20 kg' },
                { label: 'Patient Gender', value: 'Female' },
                { label: 'Symptoms', value: 'Common cold' },
                { label: 'Organization Name', value: 'Mersal' },
                { label: 'Address ', value: 'Heliopolis' },
                { label: 'Google Map ', value: '' },
            ],
        },
        {
            image: "https://img.freepik.com/premium-photo/teacher-checking-cute-student-homework-while-explaining-idea-class-pedagogy_31965-332468.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/4232/4232293.png",
            title: "Mersal is Requesting a Teacher",
            description: "We are looking for a science teacher for 3rd graders",
            type: "teaching",
            contactInfo: [
                { label: 'Name', value: 'Miss.Sara Hany' },
                { label: 'Email', value: 'Sarah12@ebis.edu.eg' },
                { label: 'Phone', value: '01167823409' },

            ],
            serviceDetails: [
                { label: 'Subject', value: 'Science' },
                { label: 'Number of Students', value: '25' },
                { label: 'Address', value: 'Mersal Foundation Building 3' },
                { label: 'Area', value: 'Mohandesin' },
                { label: 'Governate', value: 'Cairo' },
                { label: 'Google Map Marker', value: '' },
            ],
        },
        {
            image: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            title: "Mersal is Requesting a Doctor ",
            description: "We are organizing a health outreach program in a village.",
            type: "medical",
            contactInfo: [
                { label: 'Name', value: 'Dr. Rania Salah' },
                { label: 'Email', value: 'raniassalah@nasaemclinics.org' },
                { label: 'Phone', value: '01278934209' },
            ],
            serviceDetails: [
                { label: 'Location', value: 'Sunshine Village, Rural District' },
                { label: 'Service Date', value: '2024-06-15' },
                { label: 'Expected Patients', value: '150' },
                { label: 'Focus Areas', value: 'Vaccinations, Health Screenings, Medical Consultations' },
                { label: 'Additional Information', value: 'The outreach program will be held in the village community center, where basic facilities are available for setting up a temporary clinic. The doctor should be prepared for a busy day and be open to working with a diverse population, including children and elderly patients.' },
            ],
        }

    ]);

    const [servicesOng, setServicesOng] = useState([
        {
            image: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            title: "Mersal is Requesting a Doctor",
            description: "We would like a doctor to check up on senior citizens",
            type: "medical",
            contactInfo: [
                { label: 'Status', value: 'Waiting for doctor request approval' }
               

            ],
            serviceDetails: [
                { label: 'Patient Name', value: 'Omar Ahmed' },
                { label: 'Patient Weight', value: '50 kg' },
                { label: 'Patient Gender', value: 'Male' },
                { label: 'Symptoms', value: 'Flu' },
                { label: 'Organization Name', value: 'Mersal' },
                { label: 'Address ', value: 'El Obour' },
                { label: 'Google Map ', value: '' },
            ],
        },
        {
            image: "https://img.freepik.com/premium-photo/teacher-checking-cute-student-homework-while-explaining-idea-class-pedagogy_31965-332468.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/4232/4232293.png",
            title: "Mersal is Requesting a Teacher",
            description: "We are looking for a math teacher for highschoolers",
            type: "teaching",
            contactInfo: [
                { label: 'Status', value: 'Waiting for teaching request approval' }
            

            ],
            serviceDetails: [
                { label: 'Subject', value: 'Math' },
                { label: 'Number of Students', value: '30' },
                { label: 'Address', value: 'Mersal Foundation Building 4' },
                { label: 'Area', value: 'Mohandesin' },
                { label: 'Governate', value: 'Cairo' },
                { label: 'Google Map Marker', value: '' },
            ],
        }
]);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleDeleteService = (serviceToDelete) => {
        if (status === 'ongoing') {
            const updatedServicesOng = servicesOng.filter(service => service !== serviceToDelete);
            setServicesOng(updatedServicesOng);
        } else {
            const updatedServices = services.filter(service => service !== serviceToDelete);
            setServices(updatedServices);
        }
    };
    const filteredServices = status === 'ongoing' ? servicesOng : services;
    
    const filteredServicesByFilter = filteredServices.filter(service => {
        if (filter === 'all') {
            return true;
        }
        return service.type === filter;
    });

    return (
        <>
            <OrgNavBar2 />
            <br />
            <br />
            <br />
            <br />
            <center>
                <h1>View My Services</h1>
            </center>
            <div className="select-container">
                <select onChange={handleStatusChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="fulfilled">Fulfilled</option>
                </select>
                <select onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="teaching">Teaching</option>
                    <option value="medical">Medical</option>
                </select>
            </div>

            <div className="donations-container">
                {filteredServicesByFilter.map((service, index) => (
                    <ServicesCard 
                        key={index} 
                        {...service} 
                        onDelete={() => handleDeleteService(service)}
                    />
                ))}
            </div>
        </>
    );
}