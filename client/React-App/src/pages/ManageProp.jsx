import React from 'react'
import data_property from '../assets/data'
import Item from '../components/Item/Item'

const ManageProp = () => {
  return (
    <div className='container'>
      <h1>hello</h1>
      <div className='row'>
       <div className=''>
          {data_property.map((item, i) => {
           
            return (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                price={item.item_price}
                viewCount={item.view}
              />
            );
          


          })}
          </div>
        </div>
    </div>
  )
}

export default ManageProp
