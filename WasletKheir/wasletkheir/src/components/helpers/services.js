import { medicalCategories } from "./servicetypes";  // Assuming you have a file for types that includes Medical Specialties
import { Service } from "./servicetypes";
export const MEDICAL_CASES_DATA = [
    {
        title: "Cardiology Care Needed",
        patientName: "Ahmed Ali",
        age: 62,
        gender: "Male",
        weight: "78 kg",
        location: '',  // Google Maps coordinate example for Cairo
        address: "5 Tahrir Square, Cairo, Egypt",
        organizationName: "Cairo University Hospital",
        area: 'Tahrir',
        governorate: 'Cairo',
        service: Service.medical,
        medicalSpecialty: medicalCategories.Cardiology,
        caseDescriptionLong: "Ahmed Ali requires ongoing care for his heart condition, including medication management and regular monitoring.",
        caseDescription: "Ahmed Ali requires ongoing care for his heart condition",
        image: "https://www.bhf.org.uk/-/media/images/for-professionals/healthcare-professionals/updates-and-insights/analysis/rushed-to-hospital-when-heart-failure-isnt-diagnosed-early-enough/rushed-to-hospital_echo-being-done_spl-single-use-only-do-not-reuse_1200x630.jpg?rev=b49eb37981d24bbd9bb63b80ba00499a",
        progress: '0'
    },
    {
        title: "Pediatric Asthma Management",
        patientName: "Mariam Youssef",
        age: 9,
        gender: "Female",
        weight: "32 kg",
        area: 'Nasr City',
        governorate: 'Cairo',
        location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.184025616927!2d31.224485675488975!3d30.03157791918037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472d5db795b9%3A0x2c75abc8ecd6d90b!2sCairo%20University%20Hospitals!5e0!3m2!1sen!2seg!4v1715475884187!5m2!1sen!2seg',
        service: Service.medical,

        address: "10 El Geish Road, Alexandria, Egypt",
        organizationName: "Alexandria Children's Hospital",
        medicalSpecialty: medicalCategories.Pediatrics,
        caseDescriptionLong: "Mariam Youssef suffers from asthma and needs regular treatment and assessments to ensure her condition is well-managed.",
        caseDescription: "A young child is in need of treatment from asthma and lung assessment",

        image: "https://apicms.thestar.com.my/uploads/images/2020/12/18/978038.jpg",
        progress: '100'
    },
    {
        title: "Orthopedic Surgery Consultation",
        patientName: "Khaled Mohamed",
        age: 30,
        gender: "Male",
        weight: "85 kg",
        location: '',  // Google Maps coordinate for central Egypt
        address: "15 Al Horreya Avenue, Luxor, Egypt",
        organizationName: "Luxor General Hospital",
        area: 'Horreya',
        service: Service.medical,
        governorate: 'Luxor',
        medicalSpecialty: medicalCategories.Orthopedics,
        caseDescriptionLong: "Khaled Mohamed requires an evaluation for a potential orthopedic surgery following a recent accident.",
        caseDescription: "A patient requires an evaluation for an orthopedic surgery",

        image: "https://floridasurgeryconsultants.com/wp-content/uploads/2019/02/Common-Car-Accident-Injuries-That-Require-Surgery-1200x675.jpg",
        progress: '0'
    }
];
