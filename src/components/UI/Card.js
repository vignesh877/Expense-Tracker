import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card expense-item'>
        {props.children}
    </div>
  )
}

export default Card