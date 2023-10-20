import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
// import React, { useState } from 'react';

// 1 component: template + logic
// JSX là 1 đoạn code html trong 1 file js
// babel biên dịch html

//function App() {
const App = () => { //dùng function component, còn nếu dùng class thì là class App extends...
  let [name, setName] = useState('Demo'); //[a1, b1, c1, ....]
  const [address, setAddress] = useState('');

  const handleEventClick = (event) => {
    //setName(address);
    if (!address) {
      alert('Empty input!!!');
      return;
    }
    //hook ko merge state, class component thì tự động merge state
    //...spread syntax array
    let newToDo = {
      id: Math.floor(Math.random() * 10) + 1,
      title: address,
      type: 'demo'
    };
    setTodos([...todos, newToDo]);
    setAddress('');
  }

  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  }

  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Watching Demo IT Channel.', type: 'demo' },
    { id: 'todo2', title: 'Doing homework.', type: 'demo' },
    { id: 'todo3', title: 'Playing game.', type: 'hoidanit' },
    { id: 'todo4', title: 'Reading book.', type: 'hoidanit' }
  ]);

  // useEffect(() => {
  //   console.log('>>> Run use effect address');
  // }, [address]);

  // useEffect(() => {
  //   console.log('>>> Run use effect todos');
  // }, [todos]);

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id);
    setTodos(currentTodos);
  }

  //re-render
  //for => vòng lặp theo index, foreach => vòng lặp theo phần tử
  //map => trả ra 1 array mới mà ko làm ảnh hưởng dữ liệu cũ
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            Hello world with React hook {name}.
          </h2>

          <Covid />

          {/* <Todo
            todos={todos}
            title={'All props todos'}
            deleteDataTodo={deleteDataTodo}
          />

          <Todo
            todos={todos.filter(item => item.type === 'demo')}
            title={`Demo's todos`}
            deleteDataTodo={deleteDataTodo}
          />

          <input type='text' value={address} onChange={(event) => handleOnChangeInput(event)} />
          <button type='button' onClick={(event) => handleEventClick(event)}>Click me</button> */}
          {/* <button type='button' onClick={handleEventClick}>Click me</button> */}
        </header>
      </div>

      <div>

      </div>
    </>
  );
}

export default App;
