import './App.css';
import { useState } from 'react';
import colorNames from 'colornames'


function App() {
const [color, setColor] = useState('');

  return (
    
    <div className="App" >
     
     <div className='MyBox' style={{background: color}}><span>{colorNames(color)}</span></div>
     <input type="text"
     placeholder="Write color name or hexa value"
     value={color}
     onChange={(e)=> setColor(e.target.value)
    }
     />
    </div>
  );
}

export default App;
