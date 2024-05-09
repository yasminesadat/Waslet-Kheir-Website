import { DonationCategories, MedicalSuppliesTypes, SchoolTypes, FoodTypes } from "./types";

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
        image: "C:/Users/user/Desktop/clothes-icon-png/clothes-icon-png-27.jpg",
    },
    {

        title: "Shirts",
        text: "We need 10 shirts for boys ages 1-5",
        age: "1-5",
        gender: "Male",
        season: "Summer",
        progress: 45,
        category: DonationCategories.Clothes,
        image: "https://cdn-az.allevents.in/events9/banners/d90070eb23ffe435e9795fe2c107dea2ebab3b31d856a370a1a75cf774108b10-rimg-w525-h350-gmir.jpg?v=1563940495",
    },
   
    {
        title: "Fresh Meals",
        text: "Need 100 fresh meals to feed orphans",
        quantity: 100,
        progress: 45,
        category: DonationCategories.Food,
        type: FoodTypes.freshMeals,
        image:"https://az727718.vo.msecnd.net/75f28e2721eb4488b6b368de202c4603/images/ff89fcf94bc94fdd972a685833839d3a_2048w.jpg",
    },
    {
        title: "Need fruits and vegetables",
        text: "",
        quantity: 5,
        progress: 45,
        type: FoodTypes.FruitsVegetables,
        category: DonationCategories.Food,
    },
    {
        title: "Need Toys",
        text: "",
        age: "",
        gender: "",
        type: "Board Games",
        image: "",
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
        quantity:"",
        image:"",
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