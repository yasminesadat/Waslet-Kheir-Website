import React from 'react';
import { useState } from 'react';
import '../Organization/Org.css';
import DonorNavbar from './DonorNavbar';
import OrgCard from './OrgCard';
import Footer from '../Footer';
import { MdFilterListAlt } from "react-icons/md";

export default function ViewOrgDonor() {
    const [selectedOption, setSelectedOption] = useState('ongoing');
    const [typeFilter, setTypeFilter] = useState('all');
    const [governorateFilter, setGovernorateFilter] = useState('all');
    const [areaFilter, setAreaFilter] = useState('all');


    const organizations = [
        {
            image: "https://arab.org/wp-content/uploads/2019/05/mersal-foundation.jpg",
            title: "Mersal ",
            description: "",
            type: "charity",
            area: 'newcairo',
            governorate: 'cairo',
            orgDetails: [
                { label: 'Organization Type', value: 'Charity' },
                { label: 'Contact Number', value: '+201154672938' },
                { label: 'Email', value: 'Mersal11@ngo.egypt.com' },
                { label: 'Address', value: '8 Street 263, Ezbet Fahmy' },
                { label: 'Area', value: 'El Basatin' },
                { label: 'Governorate', value: 'Cairo' },


            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3309145040307!2d31.274569975487026!3d29.96991852209805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458386f89f9a029%3A0xe63218d38fcfebe1!2z2YXYpNiz2LPYqSDZhdix2LPYp9mEIC0gTWVyc2FsIGZvdW5kYXRpb24g2KfZhNmB2LHYuSDYp9mE2LHYptmK2LPZig!5e0!3m2!1sen!2seg!4v1715253107652!5m2!1sen!2seg"

        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEiBx2s6hdvg0n3f0Bs3CuTK1Ty4MayooAzd5oJivQvw&s",
            title: "Resala ",
            description: "",
            area: 'nasr city',
            governorate: 'cairo',
            type: "charity",
            orgDetails: [
                { label: 'Organization Type', value: 'Charity' },
                { label: 'Contact Number', value: '+201298772938' },
                { label: 'Email', value: 'Resala11@ngo.egypt.com' },
                { label: 'Address', value: '2 Zaki Rostom' },
                { label: 'Area', value: 'Nasr city' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.166734726429!2d31.33650537548998!3d30.060754817797825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e6ee2ebc7ab%3A0x5523ad87156ef241!2sResala%20Charity%20Association!5e0!3m2!1sen!2seg!4v1715253608674!5m2!1sen!2seg"
        },
        {
            image: "https://www.myf-egypt.org/img/logo.png",
            title: "Magdy Yacoub Heart Foundation",
            description: "",
            area: 'nasr city',
            governorate: 'cairo',
            type: "hospital",
            orgDetails: [
                { label: 'Organization Type', value: 'Hospital' },
                { label: 'Contact Number', value: '+2010777772938' },
                { label: 'Email', value: 'MagdiY@hsopital.egypt.com' },
                { label: 'Address', value: '26 July' },
                { label: 'Area', value: 'Zamalek' },
                { label: 'Governorate', value: 'Cairo' },


            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1725425080344!2d31.22189247549012!3d30.06058831780579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458411d812781bf%3A0x530844b6182c818!2zTWFnZGkgWWFjb3ViIEhlYXJ0IEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdis2K_ZiSDZiti52YLZiNioINmE2YTZgtmE2Kg!5e0!3m2!1sen!2seg!4v1715253733123!5m2!1sen!2seg"
        },
        {
            image: "https://mir-s3-cdn-cf.behance.net/projects/404/2c1f32117496869.Y3JvcCw1MTIsNDAxLDYwMiwyMDQ.jpg",
            title: "Misr El kheir",
            description: "",
            area: 'mokattam',
            governorate: 'cairo',
            type: "charity",
            orgDetails: [
                { label: 'Organization Type', value: 'Charity' },
                { label: 'Contact Number', value: '+201897502938' },
                { label: 'Email', value: 'MisrkH@ngo.egypt.com' },
                { label: 'Address', value: 'Al Nafoura Square' },
                { label: 'Area', value: 'Mokattam' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110446.68552361324!2d31.17045138902496!3d30.10967890603508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458398acc67dc43%3A0xc9bb9167c0afe413!2zTWlzciBFbGtoZWlyIEZvdW5kYXRpb24g2YXYpNiz2LPYqSDZhdi12LEg2KfZhNiu2YrYsQ!5e0!3m2!1sen!2seg!4v1715253955334!5m2!1sen!2seg"
        },
        {
            image: "https://img1.wsimg.com/isteam/ip/298cb803-7078-4032-b25d-88a8bd8d08d0/Awlady%20logo%20wider-0001.jpg/:/rs=h:1000,cg:true,m",
            title: "Awlady Orphanage",
            description: "",
            type: "orphanage",
            area: 'newcairo',
            governorate: 'giza',
            orgDetails: [
                { label: 'Organization Type', value: 'Orphanage' },
                { label: 'Contact Number', value: '+2023456789' },
                { label: 'Email', value: 'contact@awladyorphanage.eg' },
                { label: 'Address', value: '123 Al Orman St' },
                { label: 'Area', value: 'Giza' },
                { label: 'Governorate', value: 'Cairo' },
            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7844861943436!2d31.271171382892362!3d29.95687705818818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145838125013bfe3%3A0xb619455644e0e330!2z2KzZhdi52YrYqSDYo9mI2YTYp9iv2Yo!5e0!3m2!1sen!2seg!4v1715254191643!5m2!1sen!2seg"
        },
        {
            image: "https://images.wuzzuf-data.net/files/company_logo/57357-Egypt-21412-1482076211-og.png",
            title: "57357 Hospital",
            description: "",
            type: "hospital",
            area: 'newcairo',
            governorate: 'giza',
            orgDetails: [
                { label: 'Organization Type', value: 'Hospital' },
                { label: 'Contact Number', value: '+201189456789' },
                { label: 'Email', value: 'contact@57357hospital.eg' },
                { label: 'Address', value: '123 Al Orman St' },
                { label: 'Area', value: 'Giza' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.482837424789!2d31.235299575488824!3d30.02300281958647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474801f2136f%3A0x5b7e6b7cbf39dd15!2sChildren%E2%80%99s%20Cancer%20Hospital%20Egypt%2057357!5e0!3m2!1sen!2seg!4v1715254485203!5m2!1sen!2seg"
        },
        {
            image: "https://scontent.fcai19-7.fna.fbcdn.net/v/t1.6435-9/59839023_1293661097452058_3538026430166204416_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHzlB3falxPrzG9FfjIirlr5h1v8AJNX7HmHW_wAk1fsZsqR8MWu-B2NIsN3Jbpg2SZhCGNNP8efSNCnf1e0RD9&_nc_ohc=xCGmW64URg0Q7kNvgEfb9Ge&_nc_ht=scontent.fcai19-7.fna&oh=00_AfAew-pa1ajyJ8Q-0nK5FDUaJb2I8y-ZmXr9_YyievcXyA&oe=66642648",
            title: "AlNas Hospital",
            description: "",
            type: "hospital",
            area: 'nasr city',
            governorate: 'giza',
            orgDetails: [
                { label: 'Organization Type', value: 'Hospital' },
                { label: 'Contact Number', value: '+201189456789' },
                { label: 'Email', value: 'contact@nashospital.eg' },
                { label: 'Address', value: '123 Al Orman St' },
                { label: 'Area', value: 'Giza' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.471952259606!2d31.250278075491725!3d30.10930591549473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841fd0f98ffeb%3A0xad8c4bf7c6349f96!2sAl%20Nas%20Hospital!5e0!3m2!1sen!2seg!4v1715254398437!5m2!1sen!2seg"
        },
        {
            image: "https://egyptunitedtours.com/wp-content/uploads/2021/01/Sultan-Hassan-Mosque-1-2.jpg",
            title: "Sultan Hassan Mosque",
            description: "",
            type: "mosque",
            area: 'nasrcity',
            governorate: 'cairo',
            orgDetails: [
                { label: 'Organization Type', value: 'Mosque' },
                { label: 'Contact Number', value: '+201109476789' },
                { label: 'Email', value: 'egymonuments@gov.eg' },
                { label: 'Address', value: 'El-Darb El-Ahmar' },
                { label: 'Area', value: 'Mokkatam' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1594275450207!2d31.25359547548899!3d30.032283719146804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840ac0ae91775%3A0x74c6b9904c0f8ce4!2sMosque-Madrasa%20of%20Sultan%20Hassan!5e0!3m2!1sen!2seg!4v1715275296332!5m2!1sen!2seg"
        },
        {
            image: "https://www.egypttoursportal.com/images/2020/12/Christian-Monuments-and-Monasteries-in-Egypt-Egypt-Tours-Portal.jpg",
            title: "Virgin Mary Church",
            description: "",
            area: 'downtown',
            governorate: 'cairo',
            type: "church",
            orgDetails: [
                { label: 'Organization Type', value: 'Church' },
                { label: 'Contact Number', value: '+201189476710' },
                { label: 'Email', value: 'egymonuments@gov.eg' },
                { label: 'Address', value: 'Qasr Ad Dobarah, Qasr El Nil' },
                { label: 'Area', value: 'Downtown' },
                { label: 'Governorate', value: 'Cairo' },

            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27630.056686209682!2d31.206089979101574!3d30.0438261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840b86acf1e95%3A0xd1c627c198eaca21!2zQ2h1cmNoIG9mIHRoZSBCbGVzc2VkIFZpcmdpbiBNYXJ5IGFuZCBTYWludCBKb2huIGluIEJhYiBFbCBMb3VxIC0g2YPZhtmK2LPYqSDYp9mE2LPZitiv2Kkg2KfZhNi52LDYsdin2KEg2YXYsdmK2YUg2Ygg2YXYp9ix2YrZiNit2YbYpyDYqNio2KfYqCDYp9mE2YTZiNmC!5e0!3m2!1sen!2seg!4v1715275324670!5m2!1sen!2seg"
        },
        {
            image: "https://alshams.com.eg/wp-content/uploads/2019/11/Azhar-University.jpg",
            title: "Azhar University",
            description: "",
            area: 'nasrcity',
            governorate: 'cairo',
            type: "school",
            orgDetails: [
                { label: 'Organization Type', value: 'School' },
                { label: 'Contact Number', value: '+0222636192' },
                { label: 'Email', value: 'www.azhar@edu.eg' },
                { label: 'Address', value: 'Al Mokhaym Al Daem' },
                { label: 'Area', value: 'Nasr City' },
                { label: 'Governorate', value: 'Cairo' },
            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.947680356629!2d31.331235182919762!3d30.06703415283053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f5fbfdb10f9%3A0x5fa33ed996112843!2sAl-Azhar%20University!5e0!3m2!1sen!2seg!4v1715275358959!5m2!1sen!2seg"
        },
        {
            image: "https://www.dar-alorman.com/imgs/ormanb-logo.png",
            title: "Dar Al Orman Association",
            description: "",
            type: "charity",
            area: 'nasrcity',
            governorate: 'cairo',
            orgDetails: [
                { label: 'Organization Type', value: 'Charity' },
                { label: 'Contact Number', value: '+0222636192' },
                { label: 'Email', value: 'info@alorman.org' },
                { label: 'Address', value: '7 Abbas El-Akkad' },
                { label: 'Area', value: 'Nasr City' },
                { label: 'Governorate', value: 'Cairo' },
            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.947680356629!2d31.331235182919762!3d30.06703415283053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e65c5c6db47%3A0x5771b11558409c4!2sDar%20Al%20Orman%20Association!5e0!3m2!1sen!2seg!4v1715275341418!5m2!1sen!2seg"
        },
        {
            image: "https://sanadorphans.org/storage/settings/January2024/vMGNGY5ZMqNBl1luAdiF.png",
            title: "Sanad Orphanage",
            description: "",
            area: 'heliopolis',
            governorate: 'cairo',
            type: "orphanage",
            orgDetails: [
                { label: 'Organization Type', value: 'Orphanage' },
                { label: 'Contact Number', value: '+2023456789' },
                { label: 'Email', value: 'info@sanadorphans.org' },
                { label: 'Address', value: 'Baron Palace' },
                { label: 'Area', value: 'Heliopolis' },
                { label: 'Governorate', value: 'Cairo' },
            ],
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.2626746956466!2d31.32636817549097!3d30.086662616569374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2229cbc89f%3A0x7728f47eab7d5044!2sWataneya%20society!5e0!3m2!1sen!2seg!4v1715446662755!5m2!1sen!2seg"
        },


    ];

    const filteredOrgs = organizations.filter(organization => {
        const typeMatches = typeFilter === 'all' || organization.type === typeFilter;
        const governorateMatches = governorateFilter === 'all' || organization.governorate === governorateFilter;
        const areaMatches = areaFilter === 'all' || organization.area === areaFilter;
        return typeMatches && governorateMatches && areaMatches;
    });

    const handleFilterChange = (event, filterType) => {
        switch (filterType) {
            case 'type':
                setTypeFilter(event.target.value);
                break;
            case 'governorate':
                setGovernorateFilter(event.target.value);
                break;
            case 'area':
                setAreaFilter(event.target.value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <div style={{ minHeight: '230vh' }}>
                <DonorNavbar />
                <br></br>
                <br></br>  <br></br>
                <br></br>  <br></br>
                <center><h1>Organizations</h1></center>
                <div className="select-containersmall">






                    <select style={{ maxWidth: '300px', margin: '10px' }} onChange={(e) => handleFilterChange(e, 'type')}>
                        <option value="all">Organization Type</option>
                        <option value="mosque">Mosque</option>
                        <option value="church">Church</option>
                        <option value="school">Public School</option>
                        <option value="charity">Charity</option>
                        <option value="hospital">Hospital</option>
                        <option value="orphanage">Orphanage</option>
                    </select>




                    <select style={{ maxWidth: '300px', margin: '10px' }} onChange={(e) => handleFilterChange(e, 'governorate')}>
                        <option value="all">Governorate</option>
                        <option value="cairo">Cairo</option>
                        <option value="giza">Giza</option>
                        <option value="alexandria">Alexandria</option>

                    </select>

                    <select style={{ maxWidth: '300px', margin: '10px' }} onChange={(e) => handleFilterChange(e, 'area')}>
                        <option value="all">Area</option>
                        <option value="zamalek">Zamalek</option>
                        <option value="newcairo">New Cairo</option>
                        <option value="nasrcity">Nasr City</option>
                        <option value="heliopolis">Heliopolis</option>
                        <option value="downtown">Downtown</option>
                    </select>

                </div>
                <div className="donations-container">
                    {filteredOrgs.map((organization, index) => (
                        <OrgCard key={index} {...organization} />
                    ))}
                </div>
            </div >
            <Footer />
        </>
    );
}
