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
            description: "A patient requires ongoing care for his heart condition",
            type: "medical",
            contactInfo: [
                { label: 'Name', value: 'Dr.Ahmed Helmy' },
                { label: 'Email', value: 'dr.ahmedhelmy@gmail.com' },
                { label: 'Speciality', value: 'Pediatrics & Nutrition' },
                { label: 'Phone Number', value: '01154632049' },
                { label: 'Clinic location', value: 'Rehab Medical Center room 223' },

            ],
            serviceDetails: [
                { label: 'Patient Name', value: "Ahmed Ali" },
                { label: 'Patient Weight', value: '78 kg' },
                { label: 'Patient Gender', value: 'Male' },
                { label: 'Age', value: '62' },
                { label: 'Organization Name', value: 'Mersal Foundation' },
                { label: 'Address ', value: 'Abou Omar, Manteqet Al Cinema, Nasr City, Cairo Governorate 4450012' },
                { label: 'Google Map ', 
                    value: 
                    <p>
                    <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441988.6707090635!2d30.745410919189453!3d30.064488512769305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e451b2a3603%3A0xfca80e4ff9d274dc!2sMersal%20Foundation!5e0!3m2!1sen!2seg!4v1715528037168!5m2!1sen!2seg" width="600"                    
                    style={{ width: '170px', height: '150px', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></p> },
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
                { label: 'Area', value: 'Al Basatine' },
                { label: 'Governate', value: 'Cairo' },
                {label:'Address', value:'8 Street 263, Ezbet Fahmy, El Basatin, Cairo Governorate 4234030'},
                { label: 'Google Map ',
                    value: 
                    <p>
                    <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30209.44104304801!2d31.26715285343049!3d29.970499162529205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458386f89f9a029%3A0xe63218d38fcfebe1!2z2YXYpNiz2LPYqSDZhdix2LPYp9mEIC0gTWVyc2FsIGZvdW5kYXRpb24g2KfZhNmB2LHYuSDYp9mE2LHYptmK2LPZig!5e0!3m2!1sen!2seg!4v1715527895878!5m2!1sen!2seg"
                    style={{ width: '170px', height: '150px', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></p> }
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
                { label: 'Service Date', value: '2024-06-15' },
                { label: 'Expected Patients', value: '150' },
                { label: 'Focus Areas', value: 'Vaccinations, Health Screenings, Medical Consultations' },
                { label: 'Additional Information', value: 'The outreach program will be held in the village community center, where basic facilities are available for setting up a temporary clinic. The doctor should be prepared for a busy day and be open to working with a diverse population, including children and elderly patients.' },
                { label: 'Location', value: 'Kafr El-Shaikh' },
                { label: 'Address', value: 'Qism Kafr El-Shaikh, Kafr el-Sheikh, Gharbia Governorate' },
                { label: 'Google Map ',
                    value: 
                    <p>
                    <iframe
                    title="google map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54655.77896015634!2d30.866362956910105!3d31.11011600524542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7ab78f233021f%3A0xc2cdebb004a208f8!2sKafr%20El-Shaikh%2C%20Qism%20Kafr%20El-Shaikh%2C%20Kafr%20el-Sheikh%2C%20Gharbia%20Governorate!5e0!3m2!1sen!2seg!4v1715526888521!5m2!1sen!2seg"
                    style={{ width: '170px', height: '150px', border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></p> }
            ],
        }

    ]);

    const [servicesOng, setServicesOng] = useState([
        {
            image: "https://img.freepik.com/free-photo/flat-lay-health-still-life-arrangement-with-copy-space_23-2148854064.jpg",
            avatar: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
            title: "Mersal is Requesting a Doctor",
            description: "A patient requires an evaluation for an orthopedic surgery",
            type: "medical",
            contactInfo: [
                { label: 'Status', value: 'Waiting for doctor request approval' }


            ],
            serviceDetails: [
                { label: 'Patient Name', value: 'Khaled Mohamed' },
                { label: 'Patient Weight', value: '85 kg' },
                { label: 'Patient Gender', value: 'Male' },
                { label: 'Age', value: '30' },
                { label: 'Organization Name', value: 'Mersal Clinics' },
                { label: 'Address ', value: 'Street 263, Ezbet Fahmy, El Basatin, Cairo Governorate' },
                { label: 'Google Map ',
                value: 
                <p>
                <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2725351310346!2d31.272809474617205!3d29.971596719620415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839f3141cd66d%3A0x71c40c47769f100c!2zTWVyc2FsIENsaW5pY3Mg2LnZitin2K_Yp9iqINmF2LHYs9in2YQ!5e0!3m2!1sen!2seg!4v1715527227639!5m2!1sen!2seg"
                style={{ width: '170px', height: '150px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe></p> }            ],
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
                { label: 'Area', value: 'New Cairo' },
                { label: 'Governate', value: 'Cairo' },
                { label: 'Google Map ',
                value: 
                <p>
                <iframe
                title="google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52910.1789932518!2d31.388951829870372!3d30.001325794718365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582333567aaf5b%3A0x240a5b9c46f291f7!2zTWVyc2FsIEZvdW5kYXRpb24gLSDZhdik2LPYs9ipINmF2LHYs9in2YQg2YTZhNij2LnZhdin2YQg2KfZhNiu2YrYsdmK2Kkg2Ygg2KfZhNiq2YbZhdmI2YrYqSAo2YHYsdi5INin2YTYqtis2YXYuSDYp9mE2K7Yp9mF2LMp!5e0!3m2!1sen!2seg!4v1715527453025!5m2!1sen!2seg"
                style={{ width: '170px', height: '150px', border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe></p> }            ],
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
                <h1> My Requested Services</h1>
            </center>
            <div className="select-containersmall">
                <select style={{ width: '300px', marginRight: '10px' }} onChange={handleStatusChange}>
                    <option value="ongoing">Ongoing</option>
                    <option value="fulfilled">Fulfilled</option>
                </select>
                <select style={{ width: '300px' }} onChange={handleFilterChange}>
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