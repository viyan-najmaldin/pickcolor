
const MyBoxColor = ({color,hexaColor}) => {
  return (
    <div className='MyBox' style={{background: color}}>
             <span>{ color? (hexaColor): ('empty')}</span>
     </div>
  )
}

export default MyBoxColor
