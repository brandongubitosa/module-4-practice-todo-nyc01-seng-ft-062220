import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories';
import Task from './Task';
import TaskList from './TaskList';

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  
  catHandler = (e) => {
    console.log(e.target)
    
  }
  

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories catHandler={this.catHandler}/>
        <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}


export default App;
