import React from 'react'

const CustomButton = ( { children, ...otherProps}) => {
  return (
    
    <button className='custom-btton' {...otherProps} >
        { children }
    </button>
  )
}

export default CustomButton