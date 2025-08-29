import './App.css';
import { useState } from 'react';
import colorNames from 'colornames'
import MyForm from './components/MyForm';
import MyBoxColor from './components/MyBoxColor';


function App() {
const [color, setColor] = useState('');

  const hexaColor = colorNames(color)? colorNames(color) : color

      return (
          <div className="App" 
          > 
                <MyBoxColor color={color}
                   hexaColor={hexaColor}
                   />
                <MyForm  
                setColor={setColor} 
                 />
        </div>
      );
  }   

export default App;
