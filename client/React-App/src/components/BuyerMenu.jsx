import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/BuyerMenu.css';

const BuyerMenu = () => {
    const location = useLocation();

    return (
        <div className="property-search">
            <div className="flex">
                <Link
                    to="/Buy"
                    className={`btn ${location.pathname === '/Buy' ? 'active' : ''}`}
                    aria-current={location.pathname === '/Buy' ? 'page' : undefined}
                >
                    Buy
                </Link>
                <Link
                    to="/Rent"
                    className={`btn ${location.pathname === '/Rent' ? 'active' : ''}`}
                    aria-current={location.pathname === '/Rent' ? 'page' : undefined}
                >
                    Rent
                </Link>
                {/* <Link
                    to="/CommercialPage"
                    className={`btn ${location.pathname === '/CommercialPage' ? 'active' : ''}`}
                    aria-current={location.pathname === '/CommercialPage' ? 'page' : undefined}
                >
                    Commercial
                </Link> */}
            </div>
        </div>
    );
}

export default BuyerMenu;
