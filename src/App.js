import './App.css';
import { useState } from 'react';
import colorNames from 'colornames'
import MyForm from './components/MyForm';
import MyBoxColor from './components/MyBoxColor';


function App() {
const [color, setColor] = useState('white');
const [checkColor, setCheckColor] = useState(false);


 const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

  };
  const hexaColor = colorNames(color)? colorNames(color) : color
  const initColor = checkColor? hexaColor : colorNames("white")

  return (
    
    <div className="App" 
     style={{backgroundColor:hexToRgba((initColor), 0.7) }}
      > 
          <MyBoxColor color={color}  checkColor={checkColor} hexaColor={hexaColor}/>
        <MyForm  setColor={setColor}  setCheckColor={setCheckColor}/>
    </div>
  );
}

export default App;
