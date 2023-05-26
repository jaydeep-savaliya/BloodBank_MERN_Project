import React from 'react'
import Image  from './Image';
const Card = (props) => {
  return (
    <>  
      <div className='cards'>
            <div className='card'>
            <Image imgsrc={props.image}/>
                <div className='card_info'>
                    <span className='card_category'>{props.name}</span>
                    <p className='card_title'>{props.information}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
