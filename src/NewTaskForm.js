import React from 'react'

class NewTaskForm extends React.Component {

    state = {
        text: '',
        category: ''

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        let newTask = {
            text: this.state.text,
            category: this.state.category
        }
        //need to add something here
      
    }


    render() {
        return (
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

        )
    }
}

export default NewTaskForm
