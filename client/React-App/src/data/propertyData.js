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
        { id: 1, name: 'Lovely Home', location: 'Madiwala', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 12000000 },
        { id: 2, name: 'Cozy Apartment', location: 'BTM', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 8000000 },
        { id: 3, name: 'Modern PG', location: 'Koramangala', image: img3, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Ready', price: 5000000 },
        { id: 4, name: 'Spacious House', location: 'Indiranagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000 },
        { id: 5, name: 'Charming PG', location: 'Madiwala', image: img5, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 6000000 },
        { id: 6, name: 'Elegant Home', location: 'Electronic City', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 15000000 },
        { id: 7, name: 'Modern Hostel', location: 'Marathahalli', image: img7, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Ready', price: 4500000 },
        { id: 8, name: 'Luxurious House', location: 'Jayanagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction', price: 20000000 },
        { id: 9, name: 'Beautiful Villa', location: 'Madiwala', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 25000000 },
        { id: 10, name: 'Compact Apartment', location: 'Whitefield', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 9000000 },
        { id: 11, name: 'Stylish Condo', location: 'HSR Layout', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 13000000 },
        { id: 12, name: 'Traditional House', location: 'Rajajinagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 16000000 },
        { id: 13, name: 'Cosy Studio', location: 'Bannerghatta Road', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 7500000 },
        { id: 14, name: 'Modern Villa', location: 'Sarjapur Road', image: img8, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready', price: 30000000 },
        { id: 15, name: 'Luxury Apartment', location: 'Electronic City Phase 2', image: img7, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 22000000 },
        { id: 16, name: 'Lake View Apartment', location: 'Bellandur', image: img3, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 11000000 },
        { id: 17, name: 'Garden House', location: 'Whitefield', image: img9, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready', price: 28000000 },
        { id: 18, name: 'Sea Facing Villa', location: 'Hennur', image: img5, type: 'Full House', bhkType: '5BHK', propertyStatus: 'Ready', price: 35000000 },
        { id: 19, name: 'Designer Apartment', location: 'Koramangala', image: img2, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 10000000 },
        { id: 20, name: 'Skyline View Penthouse', location: 'Indiranagar', image: img8, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000 },
    ],
    Mumbai: [
        { id: 21, name: 'Chic Apartment', location: 'Colaba', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 25000000 },
        { id: 22, name: 'Quaint Hostel', location: 'Dadar', image: img2, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 10000000 },
        { id: 23, name: 'Modern House', location: 'Malad', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000 },
        { id: 24, name: 'Cosy PG', location: 'Bandra', image: img4, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready', price: 8000000 },
        { id: 25, name: 'Compact Home', location: 'Kandivali', image: img3, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 9000000 },
        { id: 26, name: 'Chic Residence', location: 'Juhu', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 15000000 },
        { id: 27, name: 'Modern Hostel', location: 'Andheri', image: img7, type: 'PG/Hostel', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 7000000 },
        { id: 28, name: 'Luxury Apartment', location: 'Worli', image: img8, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 20000000 },
        { id: 29, name: 'Grand House', location: 'Parel', image: img5, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 22000000 },
        { id: 30, name: 'Elegant Villa', location: 'Powai', image: img9, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Underconstruction', price: 28000000 },
        { id: 31, name: 'Vintage Mansion', location: 'Cuffe Parade', image: img1, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 30000000 },
        { id: 32, name: 'Sea View Apartment', location: 'Marine Lines', image: img4, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 12000000 },
        { id: 33, name: 'Penthouse Suite', location: 'Breach Candy', image: img5, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000 },
        { id: 34, name: 'Hillside Villa', location: 'Mulund', image: img7, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready', price: 32000000 },
        { id: 35, name: 'Riverfront Mansion', location: 'Powai Lake', image: img8, type: 'Full House', bhkType: '5BHK', propertyStatus: 'Ready', price: 35000000 },
    ],  Chennai: [
        { id: 36, name: 'Beautiful Home', location: 'Adyar', image: img1, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 6000000 },
        { id: 37, name: 'Cozy PG', location: 'T Nagar', image: img2, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 7000000 },
        { id: 38, name: 'Spacious House', location: 'Anna Nagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 15000000 },
        { id: 39, name: 'Modern Hostel', location: 'Velachery', image: img4, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready', price: 8000000 },
        { id: 40, name: 'Cosy Home', location: 'T Nagar', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 9000000 },
        { id: 41, name: 'Elegant House', location: 'Mylapore', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 5500000 },
        { id: 42, name: 'Modern PG', location: 'Saidapet', image: img1, type: 'PG/Hostel', bhkType: '2BHK', propertyStatus: 'Ready', price: 7500000 },
        { id: 43, name: 'Luxury Villa', location: 'Porur', image: img8, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction', price: 18000000 },
        { id: 44, name: 'Charming Home', location: 'T Nagar', image: img3, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 10000000 },
        { id: 45, name: 'Vintage House', location: 'Adambakkam', image: img7, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Ready', price: 25000000 },
        { id: 46, name: 'Modern Apartment', location: 'Chromepet', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 8500000 },
        { id: 47, name: 'Stylish Condo', location: 'Guindy', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 16000000 },
        { id: 48, name: 'Traditional House', location: 'Tambaram', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 5000000 },
        { id: 49, name: 'Coastal Villa', location: 'ECR', image: img1, type: 'Full House', bhkType: '4BHK', propertyStatus: 'Underconstruction', price: 28000000 },
        { id: 50, name: 'Seaside Apartment', location: 'Thiruvanmiyur', image: img6, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 20000000 },
    ]
};

export default propertyData;