import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './Home'
// import About from './About'
// import Login from './Login'
// import Navbar from './Navbar'
// import NewTaskForm from './NewTaskForm'


// import { BrowserRouter as Router, Route } from 'react-router-dom';

//after i added newTaskForm to this i noticed that it gives me an error if i try to submit from the Enter New Task Link
//TypeError: This.props.submitHandler is not a function. Need to figure out why its an error

// this.props.submitHandler is not a function
// NewTaskForm.submitHandler
// src/NewTaskForm.js:20
//   17 | 
//   18 | submitHandler = (event) => {
//   19 |     event.preventDefault()
// > 20 |     this.props.submitHandler(this.state)
//      | ^  21 |     this.setState({text: "", category: "",...this.state}, console.log(this.state))
//   22 | }
//   23 | 

// ReactDOM.render((
//     <Router>
//         <>
//             <Route path="/welcome" render={()=> <h1>This is not the header</h1>}/>
//             <Navbar />
//             <Route exact path="/" component={Home} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/newTaskForm" component={NewTaskForm} />
//             <Route exact path ="/app" component={App} />
            
//         </> 
//     </Router>),
// document.getElementById('root')
// );

ReactDOM.render(<App />,document.getElementById('root'));



