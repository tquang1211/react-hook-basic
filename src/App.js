import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

// 1 component: template + logic
// JSX là 1 đoạn code html trong 1 file js
// babel biên dịch html

//function App() {
const App = () => {
  let name = 'Demo';
  let number = 2021;
  let obj = { name: 'DeMo', channel: 'Demo Channel' };
  let link = 'https://www.youtube.com/watch?v=Y9gTouaZJ5s&list=PLncHg6Kn2JT4xzJyhXfmJ53dzwVbq-S_E&index=10';

  return (
    <>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Hello world with React hook {name}.
          </h2>
          <p style={{ color: 'red', fontSize: '20px', marginTop: '15px' }}>{JSON.stringify(obj)}</p>
          <a href={link} target='_blank'>Visit my channel</a>
        </header>
      </div>

      <div>

      </div>
    </>
  );
}

export default App;
