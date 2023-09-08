import './App.css';
import { useState } from 'react';

function App() {
  const [temp, settemp] = useState('');
  const [scale, setScale] = useState('celsius');
  const handletempChange = (e) => {
    settemp(e.target.value);
  }
  const handleScaleChange = (e) => {
    setScale(e.target.value);
  }
  const handleConvert = () => {
    const check = parseFloat(temp);
    if (isNaN(check)) {
      return alert('Please enter a valid number');
    }
    let val;
    if (scale === 'celsius') {
      val = `${check}°C is equal to ${(check * 9/5) + 32}°F`;
    } else {
      val = `${check}°F is equal to ${(check - 32) * 5/9}°C`;
    }
    alert(val);
  };

  return (
    <div className="App">
      <h1>Tempreture Converter</h1>
      <div>
        <input
          type="text"
          placeholder="Enter temprature"
          value={temp}
          onChange={handletempChange}
        />
        <select value={scale} onChange={handleScaleChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </select>
      </div>
      <button className='convert_btn' onClick={handleConvert}>Convert</button>
    </div>
  );
}

export default App;
