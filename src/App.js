import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
// import React, { useState } from 'react';

// 1 component: template + logic
// JSX là 1 đoạn code html trong 1 file js
// babel biên dịch html

//function App() {
const App = () => { //dùng function component, còn nếu dùng class thì là class App extends...
  let [name, setName] = useState('Demo'); //[a1, b1, c1, ....]
  const [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    setName(address);
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  //re-render
  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Hello world with React hook {name}.
          </h2>
          <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
          <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button>
          {/* <button type='button' onClick={handleEventClick}>Click me</button> */}
        </header>
      </div>

      <div>

      </div>
    </>
  );
}

export default App;
