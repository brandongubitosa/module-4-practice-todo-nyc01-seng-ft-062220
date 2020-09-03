import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar';


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

  catHandler = (event) => {
    this.setState({filterCategory: event.target.value})
  }
//got the submit handler to work
  submitHandler = (catObj) => {
    this.setState({tasks: [...this.state.tasks, catObj]})
  }



  //  renderAll = () => {
  //    return this.state.filterCategory.map(task => <Task task={task}/>)
  //  }  

  // filterTask = (event) => {
  //   this.setState({
  //     filterCategory: event.target.value
  //   })
    
  // }
  
  //!==

  // filterTask = () => {
  //   if(this.state.filterCategory === "All"){
  //     return this.state.tasks
  //   }else {
  //     return this.state.tasks.filter(task => task.category === this.state.filterCategory)
  //   }
  // }


  
  // catHandler = (catObj) => {
  //   this.setState({
  //     filterCategory: catObj
  //   })
  // }

 

  //I need it so when i click on a button only the task with that category on displays itself. I am
  //able to tell what I am clicking on currently due to line 67, however, I am having a hard time
  //understanding how to filter it out and get it to render on the page. What steps are next for me?
  //this is where I am struggling with the flow of things.
  //1:52pm update. I now know I needed to set the state in lines 66-69 and then in categories
  //call on that and look for what the targets innerText is. Now I have to render the filtered list
  //just now where do i do that is the question. I have a feeling we have to do it inside the taskList.
  //


  

  render() {
    
    return (
      <Router>
        <div className="App">
        <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/about" component={About} />
            <Route path="/newtaskform" render={()=> <NewTaskForm submitHandler={this.submitHandler} />}/>
            <Route
            path="/tasklist"
            render={() => {
              return (
                <>
                  <Categories
                    categories={CATEGORIES}
                    catHandler={this.catHandler}
                  />

                  <TaskList
                    tasks={this.state.tasks}
                  />
                </>
              )
            }}
          />
        </div>
      </Router>
    )
  }
}

      


export default App;

{/* <Route path="/categories" render={()=> <Categories catHandler={this.catHandler} categories={CATEGORIES} />}/>
<Route path="/tasklist" render={()=> <TaskList tasks={this.state.tasks} />} /> */}
