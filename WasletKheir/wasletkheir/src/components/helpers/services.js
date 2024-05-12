import { medicalCategories } from "./servicetypes";  // Assuming you have a file for types that includes Medical Specialties
import { Service } from "./servicetypes";
export const MEDICAL_CASES_DATA = [
    {
        title: "Cardiology Care Needed",
        patientName: "Ahmed Ali",
        age: 62,
        gender: "Male",
        weight: "78 kg",
        location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27633.473492798472!2d31.191011710839845!3d30.031573299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458472d5db795b9%3A0x2c75abc8ecd6d90b!2sCairo%20University%20Hospitals!5e0!3m2!1sen!2seg!4v1715538184870!5m2!1sen!2seg",
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
    },
    {
        title: "Pediatric Asthma Management",
        patientName: "Mariam Youssef",
        age: 9,
        gender: "Female",
        weight: "32 kg",
        area: 'Nasr City',
        governorate: 'Cairo',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54598.573736234066!2d29.88880362167969!3d31.209344700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4ba67580d0d%3A0xa81eaade69aefecd!2sAlexandria%20Pediatric%20Center!5e0!3m2!1sen!2seg!4v1715538263576!5m2!1sen!2seg",
        service: Service.medical,
        address: "10 El Geish Road, Alexandria, Egypt",
        organizationName: "Alexandria Children's Hospital",
        medicalSpecialty: medicalCategories.Pediatrics,
        caseDescriptionLong: "Mariam Youssef suffers from asthma and needs regular treatment and assessments to ensure her condition is well-managed.",
        caseDescription: "A young child is in need of treatment from asthma and lung assessment",

        image: "https://apicms.thestar.com.my/uploads/images/2020/12/18/978038.jpg",
        progress: '50'
    },
    {
        title: "Orthopedic Surgery Consultation",
        patientName: "Khaled Mohamed",
        age: 30,
        gender: "Male",
        weight: "85 kg",
        location:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840905.5578205672!2d30.33238629374999!3d25.687245900000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1449143b41e49d01%3A0x582cf806bf20672!2sLuxor%20International%20Hospital!5e0!3m2!1sen!2seg!4v1715538313075!5m2!1sen!2seg",
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
    },
    {
        "title": "Diabetes Management Program",
        "patientName": "Hassan Mahmoud",
        "age": 65,
        "gender": "Male",
        "weight": "70 kg",
        "area": 'New Cairo',
        "governorate": 'Cairo',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221092.17022141442!2d31.14587728671874!3d30.02064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582335de708375%3A0xb44a4d7ef9e17718!2sCairo%20Medical%20Center%20(CMC)!5e0!3m2!1sen!2seg!4v1715538393372!5m2!1sen!2seg",
        service: Service.medical,
        address: "N Teseen, New Cairo 1, Cairo Governorate 11835",
        "organizationName": "Cairo Medical Center",
        "medicalSpecialty": "Endocrinology",
        "caseDescriptionLong": "Hassan Mahmoud has been battling diabetes for over 20 years and requires ongoing support to manage his insulin levels and dietary needs.",
        "caseDescription": "Ongoing diabetes support needed for better health management.",
        "image": "https://www.acwellington.org.nz/wp-content/uploads/elementor/thumbs/old-person-diabetes-ps0x1lic51wzmldda6sgaxveytvpucow4vsaquckg8.jpg",
        "progress": '0'
    },

    {
        "title": "Pediatric Heart Surgery",
        "patientName": "Sara Ahmed",
        "age": 6,
        "gender": "Female",
        "weight": "22 kg",
        "area": 'Al Raml',
        "governorate": 'Alexandria',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3408.637620867168!2d30.065111474465777!3d31.313759457322902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d6caa3e86191%3A0xaba99e011b8594d!2sAbou%20Qir%20General%20Hospital%2C%20Alexandria!5e0!3m2!1sen!2seg!4v1715538508941!5m2!1sen!2seg",
        service: Service.medical,
        address: "15 Al Raml Street,Alexandria, Egypt ",
        "organizationName": "Abou Qir General Hospital",
        "medicalSpecialty": "Pediatric Cardiology",
        "caseDescriptionLong": "Sara Ahmed requires a critical heart surgery to correct a congenital heart defect that has been affecting her growth and development.",
        "caseDescription": "Urgent heart surgery needed for a young girl with a congenital defect.",
        "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2022-07/ukrainian-girl-heart-procedure-nyc-te-220722-49322d.jpg",
        "progress": '40'
    },
    {
        "title": "Stroke Recovery Program",
        "patientName": "Fatima Abdallah",
        "age": 58,
        "gender": "Female",
        "weight": "68 kg",
        "area": 'Heliopolis',
        "governorate": 'Cairo',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110492.52367095104!2d31.210784912109382!3d30.068648284933765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584077e43e5215%3A0x15c5ba7dc31f3a70!2z2YXYsdmD2LIg2KfZhNmF2K4g2YjYp9mE2KPYudi12KfYqCDYoy4g2K8uINij2LPYp9mF2Kkg2KfZhNi62YbYp9mFIE5ldXJvc3VyZ2VyeSBDZW50ZXIgRHIuIE9zYW1hIEVsIEdoYW5uYW0!5e0!3m2!1sen!2seg!4v1715538592083!5m2!1sen!2seg",
        service: Service.medical,
        address: "47 Nadi El-Seid Street, Heliopolis, Cairo, Egypt",
        "organizationName": "Heliopolis Neurology Center",
        "medicalSpecialty": "Neurology",
        "caseDescriptionLong": "Fatima Abdallah suffered a mild stroke last year and requires comprehensive rehabilitation services, including physical therapy and cognitive exercises to enhance her recovery.",
        "caseDescription": "Comprehensive stroke rehabilitation needed for complete recovery.",
        "image": "https://img.freepik.com/free-photo/sick-woman-looking-into-camera-lying-bed_482257-19179.jpg",
        "progress": '0'
    }



];

export const TEACHING_CASES_DATA = [
    {
        title: "Math Tutoring Needed",
        numStudents: 15,
        subject: "Mathematics",
        service: Service.teaching,
        image: "https://compote.slate.com/images/8e50f2e5-7fc9-44d3-86c9-652aa3de4aec.jpg",
        organizationName: "Cairo High School",
        address: "123 Learning St, Cairo, Egypt",
        area: 'Maadi',
        governorate: 'Cairo',
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg",
        descriptionGrade: "Urgent need for a math tutor for a group of middle school students.",
        educationLevel: "Middle School",
        progress: 50
    },
    {
        title: "Science Lab Assistance",
        numStudents: 20,
        subject: "Science",
        image: "https://bonnevilleacademy.org/storage/2023/01/What-is-The-Importance-of-Science-in-School-scaled.jpeg",
        organizationName: "Luxor Education Center",
        address: "456 Discovery Lane, Luxor, Egypt",
        area: 'Central',
        governorate: 'Luxor',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Help needed to run the science lab for high school students.",
        progress: '0'
    },
    {
        title: "Primary Reading Support",
        numStudents: 30,
        subject: "English",
        image: "https://www.littlelives.org.uk/wp-content/uploads/2023/06/reading-with-children-1-1920x800.jpg",
        organizationName: "Alexandria Primary School",
        address: "789 Storybook Rd, Alexandria, Egypt",
        area: 'Downtown',
        governorate: 'Alexandria',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Seeking volunteers to help foster creativity among primary school students through arts and crafts.",
        descriptionGrade: "Reading support required for primary school students.",
        progress: '0'
    },
    {
        title: "English Language Enhancement",
        numStudents: 30,
        subject: "English",
        image: "https://www.fluentu.com/blog/english/wp-content/uploads/sites/4/2023/06/English-lesson-school-learn-foreign-language.-Chalkboard.-Verb-tenses-e1687252920240.jpg",
        organizationName: "Alexandria Language School",
        address: "77 Corniche Road, Alexandria, Egypt",
        area: 'Corniche',
        governorate: 'Alexandria',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Program aimed at enhancing English language skills among middle school students through interactive learning methods.",
        progress: '0'
    },
    {
        title: "Computer Science Workshop",
        numStudents: 15,
        subject: "Computer Science",
        image: "https://nietm.in/wp-content/uploads/2022/11/CSE3.png",
        organizationName: "New Cairo Technology Institute",
        address: "15 Technology Plaza, New Cairo, Egypt",
        area: 'Fifth Settlement',
        governorate: 'Cairo',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Workshop to introduce high school students to programming languages and modern software development practices.",
        progress: '0'
    },
    {
        title: "Arts and Crafts Creativity Sessions",
        numStudents: 20,
        subject: "Arts",
        image: "https://cdn.supermama.me/Article/103827/1581587999/watermarked/%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%B9%D9%86%D9%88%D8%A7%D9%86-%D8%A3%D9%85%D8%A7%D9%83%D9%86-%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D8%B1%D8%B3%D9%85-%D9%84%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D8%A8%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9-%D9%88%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9.jpg",
        organizationName: "Aswan Creative Arts School",
        address: "48 Nubian Way, Aswan, Egypt",
        area: 'Nubian Village',
        governorate: 'Aswan',
        service: Service.teaching,
        location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.747855764766!2d31.243393475490485!3d30.072761217228788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458406205dc4cbd%3A0x54f4a93f6f9d44f7!2sSweet%20Home%20Language%20School!5e0!3m2!1sen!2seg!4v1715513596227!5m2!1sen!2seg", descriptionGrade: "Seeking volunteers to help foster creativity among primary school students through arts and crafts.",
        progress: '0'
    }



];
