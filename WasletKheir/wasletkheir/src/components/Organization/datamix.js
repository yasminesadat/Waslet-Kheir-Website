import { medicalCategories } from "../helpers/servicetypes";  // Assuming you have a file for types that includes Medical Specialties
import { Service } from "../helpers/servicetypes";
export const MIX_DATA = [
    {
        title: "Cardiology Care Needed",
        patientName: "Ahmed Ali",
        age: 62,
        gender: "Male",
        weight: "78 kg",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1725425080344!2d31.22189247549012!3d30.06058831780579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411d812781bf%3A0x530844b6182c818!2zTWFnZGkgWWFjb3ViIEhlYXJ0IEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdis2K_ZiSDZiti52YLZiNioINmE2YTZgtmE2Kg!5e0!3m2!1sen!2seg!4v1715253733123!5m2!1sen!2seg",
        address: "5 Tahrir Square, Cairo, Egypt",
        organizationName: "Cairo University Hospital",
        area: 'Tahrir',
        governorate: 'Cairo',
        service: Service.medical,
        medicalSpecialty: medicalCategories.Cardiology,
        caseDescriptionLong: "Ahmed Ali requires ongoing care for his heart condition, including medication management and regular monitoring.",
        caseDescription: "A patient requires ongoing care for his heart condition",
        image: "https://www.bhf.org.uk/-/media/images/for-professionals/healthcare-professionals/updates-and-insights/analysis/rushed-to-hospital-when-heart-failure-isnt-diagnosed-early-enough/rushed-to-hospital_echo-being-done_spl-single-use-only-do-not-reuse_1200x630.jpg?rev=b49eb37981d24bbd9bb63b80ba00499a",
        progress: '0'
    }
    ,
    {
        title: "Math Tutoring Needed",
        numStudents: 15,
        subject: "Mathematics",
        service: Service.teaching,
        image: "https://compote.slate.com/images/8e50f2e5-7fc9-44d3-86c9-652aa3de4aec.jpg",
        organizationName: "Mersal",
        address: "123 Learning St, Cairo, Egypt",
        area: 'Maadi',
        governorate: 'Cairo',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg",
        descriptionGrade: "Urgent need for a math tutor for a group of middle school students.",
        educationLevel: "Middle School",
        progress: 50
    },

    {
        title: "Orthopedic Surgery Consultation",
        patientName: "Khaled Mohamed",
        age: 30,
        gender: "Male",
        weight: "85 kg",
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1725425080344!2d31.22189247549012!3d30.06058831780579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411d812781bf%3A0x530844b6182c818!2zTWFnZGkgWWFjb3ViIEhlYXJ0IEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdis2K_ZiSDZiti52YLZiNioINmE2YTZgtmE2Kg!5e0!3m2!1sen!2seg!4v1715253733123!5m2!1sen!2seg",
        address: "15 Al Horreya Avenue, Luxor, Egypt",
        organizationName: "Mersal",
        area: 'Horreya',
        service: Service.medical,
        governorate: 'Luxor',
        medicalSpecialty: medicalCategories.Orthopedics,
        caseDescriptionLong: "Khaled Mohamed requires an evaluation for a potential orthopedic surgery following a recent accident.",
        caseDescription: "A patient requires an evaluation for an orthopedic surgery",

        image: "https://floridasurgeryconsultants.com/wp-content/uploads/2019/02/Common-Car-Accident-Injuries-That-Require-Surgery-1200x675.jpg",
        progress: '0'
    },

    {
        title: "Science Lab Assistance",
        numStudents: 20,
        subject: "Science",
        image: "https://bonnevilleacademy.org/storage/2023/01/What-is-The-Importance-of-Science-in-School-scaled.jpeg",
        organizationName: "Mersal",
        address: "456 Discovery Lane, Luxor, Egypt",
        area: 'Central',
        governorate: 'Luxor',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Help needed to run the science lab for high school students.",
        progress: '0'
    },





];

