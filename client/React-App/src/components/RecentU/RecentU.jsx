import React from 'react'
import  './RecentU.css'
import Item from '../Item/Item'
import data_property from '../../assets/data'
const RecentU = () => {
  return (
    <div className='Recent'>
        <div className='recent-title'>
        <h1>Your Recent Uploads</h1>
      <hr /></div>
      <div className="recent-item">
        {data_property.map((item,i)=>{
            return <Item key={i} id={item.id} image={item.image} name={item.name} description={item.description} price={item.item_price} />
        })}
      </div>
    </div>
  )
}

export default RecentU
