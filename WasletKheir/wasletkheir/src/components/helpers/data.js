import { DonationCategories, MedicalSuppliesTypes, SchoolTypes, schoolTypes } from "./types";

export const DONATION_CARDS_DATA = [

    {

        title: "Jackets",
        text: "We are looking for 5 jackets for kids",
        type: "Jackets",
        age: "7-12",
        gender: "Female",
        season: "Winter",
        material: "",
        quantity: "5",
        progress: 45,
        category: DonationCategories.Clothes,
    },
    {

        title: "Need Clothes 2",
        text: "",
        age: "1-5",
        gender: "Female",
        season: "Summer",
        progress: 45,
        category: DonationCategories.Clothes,
    },
    {

        title: "Need Clothes 3",
        text: "",
        age: "13-18",
        gender: "Male",
        season: "Winter",
        progress: 45,
        category: DonationCategories.Clothes,
    },
    {
        title: "Need Food",
        text: "",
        type: "",
        quantity: 2,
        progress: 45,
        category: DonationCategories.Food,
    },
    {
        title: "Need Food",
        text: "",
        type: "",
        quantity: 5,
        progress: 45,
        category: DonationCategories.Food,
    },
    {
        title: "Need Toys",
        text: "",
        age: "",
        gender: "",
        type: "Board Games",
        picture: "",
        quantity: "",
        progress: 45,
        category: DonationCategories.Toys,
    },
    {
        title: "Need Medical Supplies",
        text: "",
        progress: 45,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalDevices
    },
    {
        title: "Need Medical Supplies",
        text: "",
        progress: 45,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.MedicalEquipment
    },
    {
        title: "Need Medical Supplies",
        text: "",
        progress: 45,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "heart"
    },
    {
        title: "Need Medical Supplies",
        text: "",
        progress: 45,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "lung"
    },
    {
        title: "Need Medical Supplies",
        text: "",
        progress: 45,
        category: DonationCategories.MedicalSupplies,
        type: MedicalSuppliesTypes.Medication,
        medicationValue: "liver"
    },
    {
        title: "Need School books",
        text: "",
        progress: 45,
        type: SchoolTypes.SchoolBooks,
        category: DonationCategories.SchoolSupplies,
    },
    {
        title: "Need School Stationary",
        text: "",
        progress: 45,
        type: SchoolTypes.SchoolStationary,
        category: DonationCategories.SchoolSupplies,
    },
    {
        title: "Type C required",
        text: "",
        hospitalName: "gawwy hospital",
        government: "Cairo",
        area: "New Cairo",
        progress: 45,
        category: DonationCategories.BloodDonations,
    },
    {
        title: "Type O required",
        text: "",
        hospitalName: "rehab medical center",
        government: "Cairo",
        area: "Rehab",
        progress: 45,
        category: DonationCategories.BloodDonations,
    },
    {
        title: "Type O+ required",
        text: "",
        hospitalName: "haram hospital",
        government: "Giza",
        area: "Haram",
        progress: 100,
        category: DonationCategories.BloodDonations,
    }
]