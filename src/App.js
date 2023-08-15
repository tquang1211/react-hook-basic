import logo from './logo.svg';
import './App.css';

// 1 component: template + logic
// JSX là 1 đoạn code html trong 1 file js
// babel biên dịch html

//function App() {
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello world with React hook.
        </h2>
      </header>
    </div>
  );
}

export default App;
