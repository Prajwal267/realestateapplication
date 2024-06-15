import img1 from "../Accets/images/h1.jpg";
import img2 from "../Accets/images/h2.jpg";
import img3 from "../Accets/images/h3.jpg";
import img4 from "../Accets/images/h4.jpg";
import img5 from "../Accets/images/h5.jpg";
import img6 from "../Accets/images/h6.jpg";
import img7 from "../Accets/images/h7.jpg";
import img8 from "../Accets/images/h8.jpg";
import img9 from "../Accets/images/h9.jpg";

const propertyData = {
    Bangalore: [
        { id: 1, name: 'Lovely Home', location: ' Madiwala', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 2, name: 'Cozy Apartment', location: ' BTM', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 3, name: 'Modern PG', location: ' Koramangala', image: img3, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Ready' },
        { id: 4, name: 'Spacious House', location: ' Indiranagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 5, name: 'Charming PG', location: ' Madiwala', image: img5, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Underconstruction' },
        { id: 6, name: 'Elegant Home', location: ' Electronic City', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 7, name: 'Modern Hostel', location: ' Marathahalli', image: img7, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Ready' },
        { id: 8, name: 'Luxurious House', location: ' Jayanagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction' },
        { id: 9, name: 'Beautiful Villa', location: ' Madiwala', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 10, name: 'Compact Apartment', location: ' Whitefield', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 11, name: 'Stylish Condo', location: ' HSR Layout', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 12, name: 'Traditional House', location: ' Rajajinagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 13, name: 'Cosy Studio', location: ' Bannerghatta Road', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 14, name: 'Modern Villa', location: ' Sarjapur Road', image: img8, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready' },
    ],
    Mumbai: [
        { id: 15, name: 'Chic Apartment', location: ' Colaba', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 16, name: 'Quaint Hostel', location: ' Dadar', image: img2, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 17, name: 'Modern House', location: ' Malad', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 18, name: 'Cosy PG', location: ' Bandra', image: img4, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 19, name: 'Compact Home', location: ' Kandivali', image: img3, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 20, name: 'Chic Residence', location: ' Juhu', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 21, name: 'Modern Hostel', location: ' Andheri', image: img7, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Underconstruction' },
        { id: 22, name: 'Luxury Apartment', location: ' Worli', image: img8, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 23, name: 'Grand House', location: ' Parel', image: img5, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 24, name: 'Elegant Villa', location: ' Powai', image: img9, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Underconstruction' },
        { id: 25, name: 'Vintage Mansion', location: ' Cuffe Parade', image: img1, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
    ],
    Chennai: [
        { id: 26, name: 'Beautiful Home', location: ' Adyar', image: img1, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready' },
        { id: 27, name: 'Cozy PG', location: ' T Nagar', image: img2, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Underconstruction' },
        { id: 28, name: 'Spacious House', location: ' Anna Nagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 29, name: 'Modern Hostel', location: ' Velachery', image: img4, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 30, name: 'Cosy Home', location: ' T Nagar', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction' },
        { id: 31, name: 'Elegant House', location: ' Mylapore', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready' },
        { id: 32, name: 'Modern PG', location: ' Saidapet', image: img1, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 33, name: 'Luxury Villa', location: ' Porur', image: img8, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction' },
        { id: 34, name: 'Charming Home', location: ' T Nagar', image: img3, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready' },
        { id: 35, name: 'Vintage House', location: ' Adambakkam', image: img7, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready' },
        { id: 36, name: 'Modern Apartment', location: ' Chromepet', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction' },
        { id: 37, name: 'Stylish Condo', location: ' Guindy', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready' },
        { id: 38, name: 'Traditional House', location: ' Tambaram', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready' },
    ]
};

export default propertyData;
