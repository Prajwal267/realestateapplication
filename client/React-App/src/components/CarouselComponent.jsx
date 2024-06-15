import React from 'react';
import img1 from '../Accets/img1.jpg';
import img2 from '../Accets/img2.jpg';
import img3 from '../Accets/img3.jpg';
import './carousel.css';

const CarouselComponent = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="First slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className='title1'> Find Your Dream Home with <span className='sp1'>RealEst</span></h1>
                        <p className='para1'>Welcome to RealEst, your go-to resource for finding the perfect home. Whether you're a first-time buyer or looking to upgrade, explore our comprehensive listings and advanced search tools to discover properties that match your needs. Start your home-buying journey with RealEst today!</p>
                        <button id='buybutton' className="btn btn-info  ms-2" type="button">Buy Property Now</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="Second slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className='title1'> Find Your Dream Home with <span className='sp1'>RealEst</span></h1>
                        <p className='para1'>Welcome to RealEst, your go-to resource for finding the perfect home. Whether you're a first-time buyer or looking to upgrade, explore our comprehensive listings and advanced search tools to discover properties that match your needs. Start your home-buying journey with RealEst today!</p>
                        <button id='buybutton' className="btn btn-info  ms-2" type="button">Buy Property Now</button>                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="Third slide" />
                    <div className="carousel-caption d-none d-md-block">
                        <h1 className='title1'> Find Your Dream Home with <span className='sp1'>RealEst</span></h1>
                        <p className='para1'>Welcome to RealEst, your go-to resource for finding the perfect home. Whether you're a first-time buyer or looking to upgrade, explore our comprehensive listings and advanced search tools to discover properties that match your needs. Start your home-buying journey with RealEst today!</p>
                        <button id='buybutton' className="btn btn-info  ms-2" type="button">Buy Property Now</button>                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselComponent;
