import React from 'react'

const MyBoxColor = ({color,checkColor,hexaColor}) => {
  return (
    <div className='MyBox' style={{background: color}}>
             <span>{ checkColor? (hexaColor): ('empty')}</span>
     </div>
  )
}

export default MyBoxColor
