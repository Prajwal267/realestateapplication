import React from 'react'
import data_property from '../assets/data'
import Item from '../components/Item/Item'
import Filter from '../components/filterSearch/Filter.jsx'
const ManageProp = () => {
  return (
    <div className='container-fluid row p-0 m-0 '>
      <div className='col-lg-3 col-md-4  d-flex justify-content-start pt-3 border'>
      <Filter></Filter>
      </div>
      
      <div className=' col-lg-9 col-md-8 border'>
      <div className='row gx-4 mt-5 '>
       
          {data_property.map((item, i) => {
          
            return (
              <div className='col-lg-4 col-md-6 mb-5 '>
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.item_price}
                viewCount={item.view}
              />
              </div>
            );
          })}
          
        </div>
        </div>
    </div>
  )
}

export default ManageProp
