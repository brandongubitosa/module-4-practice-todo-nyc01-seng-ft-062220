import React from 'react';
import './App.css';
//import { CATEGORIES } from './data'
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
    ],
    filterCategory: "All"
  }


  //  renderAll = () => {
  //    return this.state.filterCategory.map(task => <Task task={task}/>)
  //  }  

  filterTask = () => {
    if(this.state.filterCategory === "All"){
      return this.state.tasks
    }else {
      return this.state.tasks.filter(task => task.category === this.state.filterCategory)
    }
  }


  
  // catHandler = (event) => {
  // console.log(event.target)
  // }
  

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories filterTask={this.filterTask}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}


export default App;
