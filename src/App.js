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
    filterCategory: []
  }


  //  renderAll = () => {
  //    return this.state.filterCategory.map(task => <Task task={task}/>)
  //  }  

  // filterTask = (event) => {
  //   this.setState({
  //     filterCategory: event.target.value
  //   })
    
  // }

  // filterTask = () => {
  //   if(this.state.filterCategory === "All"){
  //     return this.state.tasks
  //   }else {
  //     return this.state.tasks.filter(task => task.category === this.state.filterCategory)
  //   }
  // }


  
  catHandler = (event) => {
    console.log(event.target)
  }

  //I need it so when i click on a button only the task with that category on displays itself. I am
  //able to tell what I am clicking on currently due to line 67, however, I am having a hard time
  //understanding how to filter it out and get it to render on the page. What steps are next for me?
  //this is where I am struggling with the flow of things.
  

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories catHandler={this.catHandler}/>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}


export default App;
