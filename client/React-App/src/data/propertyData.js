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
        { id: 1, name: 'Lovely Home', location: 'Madiwala', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 12000000, sellerName: 'John Doe', sellerContact: '9876543210', description: 'A lovely 2BHK home in the heart of Madiwala, perfect for families.' },
        { id: 2, name: 'Cozy Apartment', location: 'BTM', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 8000000, sellerName: 'Jane Smith', sellerContact: '9123456780', description: 'A cozy 1BHK apartment in BTM, ideal for singles or couples.' },
        { id: 3, name: 'Modern PG', location: 'Koramangala', image: img3, type: 'Apartment', bhkType: '1BHK', propertyStatus: 'Ready', price: 5000000, sellerName: 'Alice Johnson', sellerContact: '8765432109', description: 'A modern 1BHK PG in Koramangala, suitable for students and professionals.' },
        { id: 4, name: 'Spacious House', location: 'Indiranagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000, sellerName: 'Robert Brown', sellerContact: '9988776655', description: 'A spacious 3BHK house in Indiranagar, great for large families.' },
        { id: 5, name: 'Charming PG', location: 'Madiwala', image: img5, type: 'Apartment', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 6000000, sellerName: 'Charlie Davis', sellerContact: '8877665544', description: 'A charming 2BHK PG in Madiwala, under construction.' },
        { id: 6, name: 'Elegant Home', location: 'Electronic City', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 15000000, sellerName: 'Eve Martin', sellerContact: '7766554433', description: 'An elegant 2BHK home in Electronic City, ready to move in.' },
        { id: 7, name: 'Modern Hostel', location: 'Marathahalli', image: img7, type: 'Apartment', bhkType: '1BHK', propertyStatus: 'Ready', price: 4500000, sellerName: 'Frank Wilson', sellerContact: '6655443322', description: 'A modern 1BHK hostel in Marathahalli, ideal for young professionals.' },
        { id: 8, name: 'Luxurious House', location: 'Jayanagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction', price: 20000000, sellerName: 'Grace Lee', sellerContact: '5544332211', description: 'A luxurious 3BHK house in Jayanagar, currently under construction.' },
        { id: 9, name: 'Beautiful Villa', location: 'Madiwala', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 25000000, sellerName: 'Hank Taylor', sellerContact: '4433221100', description: 'A beautiful 3BHK villa in Madiwala, ready to move in.' },
        { id: 10, name: 'Compact Apartment', location: 'Whitefield', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 9000000, sellerName: 'Ivy Clark', sellerContact: '3322110099', description: 'A compact 1BHK apartment in Whitefield, under construction.' },
        { id: 11, name: 'Stylish Condo', location: 'HSR Layout', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 13000000, sellerName: 'Jack White', sellerContact: '2211009988', description: 'A stylish 2BHK condo in HSR Layout, ready for occupancy.' },
        { id: 12, name: 'Traditional House', location: 'Rajajinagar', image: img4, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 16000000, sellerName: 'Kate Hall', sellerContact: '1199887766', description: 'A traditional 3BHK house in Rajajinagar, perfect for families.' },
        { id: 13, name: 'Cosy Studio', location: 'Bannerghatta Road', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 7500000, sellerName: 'Leo Young', sellerContact: '9988776655', description: 'A cosy 1BHK studio on Bannerghatta Road, under construction.' },
        { id: 14, name: 'Modern Villa', location: 'Sarjapur Road', image: img8, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 30000000, sellerName: 'Mia Green', sellerContact: '8877665544', description: 'A modern 2BHK villa on Sarjapur Road, ready for occupancy.' },
        { id: 15, name: 'Luxury Apartment', location: 'Electronic City Phase 2', image: img7, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 22000000, sellerName: 'Nina King', sellerContact: '7766554433', description: 'A luxury 3BHK apartment in Electronic City Phase 2, ready to move in.' },
        { id: 16, name: 'Lake View Apartment', location: 'Bellandur', image: img3, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 11000000, sellerName: 'Oscar Turner', sellerContact: '6655443322', description: 'A 2BHK lake view apartment in Bellandur, under construction.' },
        { id: 17, name: 'Garden House', location: 'Whitefield', image: img9, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 28000000, sellerName: 'Paula Scott', sellerContact: '5544332211', description: 'A beautiful 2BHK garden house in Whitefield, ready for occupancy.' },
        { id: 18, name: 'Sea Facing Villa', location: 'Hennur', image: img5, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 35000000, sellerName: 'Quinn Parker', sellerContact: '4433221100', description: 'A luxurious 1BHK sea facing villa in Hennur, ready to move in.' },
        { id: 19, name: 'Designer Apartment', location: 'Koramangala', image: img2, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 10000000, sellerName: 'Ryan Adams', sellerContact: '3322110099', description: 'A designer 2BHK apartment in Koramangala, under construction.' },
        { id: 20, name: 'Skyline View Penthouse', location: 'Indiranagar', image: img8, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000, sellerName: 'Sophia Edwards', sellerContact: '2211009988', description: 'A stunning 3BHK penthouse with skyline views in Indiranagar, ready for occupancy.' },
    ],
    Mumbai: [
        { id: 21, name: 'Chic Apartment', location: 'Colaba', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 25000000, sellerName: 'Tom Harris', sellerContact: '9876543211', description: 'A chic 2BHK apartment in Colaba, perfect for modern living.' },
        { id: 22, name: 'Quaint Hostel', location: 'Dadar', image: img2, type: 'Apartment', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 10000000, sellerName: 'Uma Patel', sellerContact: '9123456781', description: 'A quaint 1BHK hostel in Dadar, currently under construction.' },
        { id: 23, name: 'Modern House', location: 'Malad', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000, sellerName: 'Victor Sharma', sellerContact: '8765432101', description: 'A modern 3BHK house in Malad, ready to move in.' },
        { id: 24, name: 'Cosy PG', location: 'Bandra', image: img4, type: 'Apartment', bhkType: '2BHK', propertyStatus: 'Ready', price: 8000000, sellerName: 'Wendy Singh', sellerContact: '9988776651', description: 'A cosy 2BHK PG in Bandra, ideal for students and professionals.' },
        { id: 25, name: 'Compact Home', location: 'Kandivali', image: img3, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 9000000, sellerName: 'Xavier Gupta', sellerContact: '8877665541', description: 'A compact 1BHK home in Kandivali, under construction.' },
        { id: 26, name: 'Chic Residence', location: 'Juhu', image: img6, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 15000000, sellerName: 'Yasmin Reddy', sellerContact: '7766554431', description: 'A chic 2BHK residence in Juhu, ready for occupancy.' },
        { id: 27, name: 'Modern Hostel', location: 'Andheri', image: img7, type: 'Apartment', bhkType: '1BHK', propertyStatus: 'Underconstruction', price: 7000000, sellerName: 'Zara Khan', sellerContact: '6655443321', description: 'A modern 1BHK hostel in Andheri, under construction.' },
        { id: 28, name: 'Luxury Apartment', location: 'Worli', image: img8, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 20000000, sellerName: 'Alan Brown', sellerContact: '5544332211', description: 'A luxury 2BHK apartment in Worli, ready for occupancy.' },
        { id: 29, name: 'Grand House', location: 'Parel', image: img5, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 22000000, sellerName: 'Brenda Jones', sellerContact: '4433221101', description: 'A grand 3BHK house in Parel, perfect for large families.' },
        { id: 30, name: 'Elegant Villa', location: 'Powai', image: img9, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 28000000, sellerName: 'Charlie Lewis', sellerContact: '3322110091', description: 'An elegant 2BHK villa in Powai, under construction.' },
        { id: 31, name: 'Vintage Mansion', location: 'Cuffe Parade', image: img1, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 30000000, sellerName: 'Diana Garcia', sellerContact: '2211009981', description: 'A vintage 3BHK mansion in Cuffe Parade, ready to move in.' },
        { id: 32, name: 'Sea View Apartment', location: 'Marine Lines', image: img4, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 12000000, sellerName: 'Edward Martinez', sellerContact: '1199887761', description: 'A sea view 2BHK apartment in Marine Lines, under construction.' },
        { id: 33, name: 'Penthouse Suite', location: 'Breach Candy', image: img5, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 18000000, sellerName: 'Fiona Robinson', sellerContact: '9988776652', description: 'A penthouse suite with 3BHK in Breach Candy, ready for occupancy.' },
        { id: 34, name: 'Hillside Villa', location: 'Mulund', image: img7, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 32000000, sellerName: 'George Clark', sellerContact: '8877665542', description: 'A beautiful 2BHK hillside villa in Mulund, ready to move in.' },
        { id: 35, name: 'Riverfront Mansion', location: 'Powai Lake', image: img8, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 35000000, sellerName: 'Holly Young', sellerContact: '7766554432', description: 'A luxurious 1BHK riverfront mansion at Powai Lake, ready for occupancy.' },
    ],
    Chennai: [
        { id: 36, name: 'Beautiful Home', location: 'Adyar', image: img1, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 6000000, sellerName: 'Ian Scott', sellerContact: '6655443323', description: 'A beautiful 1BHK home in Adyar, ready for occupancy.' },
        { id: 37, name: 'Cozy PG', location: 'T Nagar', image: img2, type: 'Apartment', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 7000000, sellerName: 'Jane Cooper', sellerContact: '5544332213', description: 'A cozy 2BHK PG in T Nagar, currently under construction.' },
        { id: 38, name: 'Spacious House', location: 'Anna Nagar', image: img3, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 15000000, sellerName: 'Kevin Lee', sellerContact: '4433221103', description: 'A spacious 3BHK house in Anna Nagar, ready to move in.' },
        { id: 39, name: 'Modern Hostel', location: 'Velachery', image: img4, type: 'Apartment', bhkType: '2BHK', propertyStatus: 'Ready', price: 8000000, sellerName: 'Laura Wilson', sellerContact: '3322110093', description: 'A modern 2BHK hostel in Velachery, ready for students and professionals.' },
        { id: 40, name: 'Cosy Home', location: 'T Nagar', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 9000000, sellerName: 'Mike Hernandez', sellerContact: '2211009983', description: 'A cosy 2BHK home in T Nagar, under construction.' },
        { id: 41, name: 'Elegant House', location: 'Mylapore', image: img6, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 5500000, sellerName: 'Nancy King', sellerContact: '1199887763', description: 'An elegant 1BHK house in Mylapore, ready for occupancy.' },
        { id: 42, name: 'Modern PG', location: 'Saidapet', image: img1, type: 'Apartment', bhkType: '2BHK', propertyStatus: 'Ready', price: 7500000, sellerName: 'Oliver Martin', sellerContact: '9988776654', description: 'A modern 2BHK PG in Saidapet, ready for students and professionals.' },
        { id: 43, name: 'Luxury Villa', location: 'Porur', image: img8, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Underconstruction', price: 18000000, sellerName: 'Oliver Martin', sellerContact: '9988776654', description: 'A luxury 3BHK villa in Porur, currently under construction.' },
        { id: 44, name: 'Charming Home', location: 'T Nagar', image: img3, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 10000000, sellerName: 'Peter Thomas', sellerContact: '8877665544', description: 'A charming 2BHK home in T Nagar, ready for occupancy.' },
        { id: 45, name: 'Vintage House', location: 'Adambakkam', image: img7, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Ready', price: 25000000, sellerName: 'Quincy Lopez', sellerContact: '7766554434', description: 'A vintage 2BHK house in Adambakkam, perfect for large families.' },
        { id: 46, name: 'Modern Apartment', location: 'Chromepet', image: img5, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 8500000, sellerName: 'Rachel Adams', sellerContact: '6655443324', description: 'A modern 2BHK apartment in Chromepet, currently under construction.' },
        { id: 47, name: 'Stylish Condo', location: 'Guindy', image: img9, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 16000000, sellerName: 'Sam Wilson', sellerContact: '5544332214', description: 'A stylish 3BHK condo in Guindy, ready for occupancy.' },
        { id: 48, name: 'Traditional House', location: 'Tambaram', image: img2, type: 'Full House', bhkType: '1BHK', propertyStatus: 'Ready', price: 5000000, sellerName: 'Tina Brown', sellerContact: '4433221104', description: 'A traditional 1BHK house in Tambaram, ready to move in.' },
        { id: 49, name: 'Coastal Villa', location: 'ECR', image: img1, type: 'Full House', bhkType: '2BHK', propertyStatus: 'Underconstruction', price: 28000000, sellerName: 'Uma Patel', sellerContact: '3322110094', description: 'A luxurious 2BHK coastal villa in ECR, under construction.' },
        { id: 50, name: 'Seaside Apartment', location: 'Thiruvanmiyur', image: img6, type: 'Full House', bhkType: '3BHK', propertyStatus: 'Ready', price: 20000000, sellerName: 'Victor Sharma', sellerContact: '2211009984', description: 'A beautiful 3BHK seaside apartment in Thiruvanmiyur, ready for occupancy.' }
    ]
};

export default propertyData;
