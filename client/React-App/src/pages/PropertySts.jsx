import React, { useEffect, useState } from "react";
import PropItem from "../components/propertystsItem/PropItem";
import axios from "axios";

const PropertySts = () => {
    const [dataProperty, setDataProperty] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/properties');
                setDataProperty(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container m-4">
            <h2 className="mb-3"><u><b>Property Status</b></u></h2>
            <div>
                {dataProperty.map((pitem, j) => {
                    return (
                        <PropItem
                            key={j}
                            id={pitem.id}
                            img={pitem.image}
                            title={pitem.name}
                            description={pitem.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PropertySts;
