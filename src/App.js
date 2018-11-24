import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Heading from './components/Heading/Heading';
import TodoList from './containers/TodoList/TodoList';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar heading="ToDo Home"/>
          <Heading title=" Capture your TODO" />
          <TodoList/>
      </div>
    );
  }
}

export default App;
