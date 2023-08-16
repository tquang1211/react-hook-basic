import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

// 1 component: template + logic
// JSX là 1 đoạn code html trong 1 file js
// babel biên dịch html

//function App() {
const App = () => { //dùng function component, còn nếu dùng class thì là class App extens...
  let name = 'Demo';

  const handleEventClick = (event) => {
    console.log('>>> click me', event.target.value);
  }

  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Hello world with React hook {name}.
          </h2>
          <input type='text' value='Demo' onClick={(event) => handleEventClick(event)} />
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
