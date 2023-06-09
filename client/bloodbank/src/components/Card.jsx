import React from 'react'
import Image  from './Image';
const Card = ({information,name,percentage,image}) => {
  return (
    <>  
      <div className='cards'>
            <div className='card'>
            <Image imgsrc={image}/>
                <div className='card_info'>
                    <span className='card_category'>{name}</span>
                    <p className='card_title'>{information}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
