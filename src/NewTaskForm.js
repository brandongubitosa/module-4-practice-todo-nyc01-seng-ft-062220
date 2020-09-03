import React from 'react'
import { Redirect } from 'react-router-dom'

class NewTaskForm extends React.Component {

    state = {
        text: '',
        category: ''

    }

    handleChange = (event) => {
        console.log("Change", event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({text: "", category: "",...this.state}, console.log(this.state))
    }


    render() {
        return (
            <>
            {this.props.user ?
            
            <form className="new-task-form" onSubmit={this.submitHandler}>
            <input name="text" placeholder="New Task Details" type="text" value={this.state.text} onChange={this.handleChange}></input>
              <select value={this.state.category} name="category" onChange={this.handleChange} >
                  <option>Code</option>
                  <option>Food</option>
                  <option>Money</option>
                  <option>Misc</option>
              </select>
              <input type="submit" name="submit" value="Add task" ></input>
    
            </form>
        
        :

        <Redirect to="/home" />

            }

        </>


        )
    }
}

export default NewTaskForm
