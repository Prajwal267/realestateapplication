import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/BuyerMenu.css';
const BuyerMenu = () => {
    const location = useLocation();

    return (
        <div className="property-search">
            <div className="flex space-x-4 mb-3" role="group">
                <Link 
                    to="/Buy" 
                    className={`btn text-secondary ${location.pathname === '/Buy' ? 'active' : ''} py-2 px-4 rounded`}
                    aria-current={location.pathname === '/Buy' ? 'page' : undefined}
                >
                    Buy
                </Link>
                <Link 
                    to="/Rent" 
                    className={`btn text-secondary ${location.pathname === '/Rent' ? 'active' : ''}  py-2 px-4 rounded`}
                    aria-current={location.pathname === '/Rent' ? 'page' : undefined}
                >
                    Rent
                </Link>
                <Link 
                    to="/CommercialPage" 
                    className={`btn text-secondary ${location.pathname === '/CommercialPage' ? 'active' : ''}  py-2 px-4 rounded`}
                    aria-current={location.pathname === '/CommercialPage' ? 'page' : undefined}
                >
                    Comercial
                </Link>
            </div>
        </div>
    );
}

export default BuyerMenu;
