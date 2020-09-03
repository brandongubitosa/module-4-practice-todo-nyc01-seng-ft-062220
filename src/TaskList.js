import React from 'react'
import Task from './Task.js'

class TaskList extends React.Component {

    //i need to now filter through the filterCategory array here
    //i think this is how i would do it? Answer I tried it out
    //and no its not. Gave me map is undefined, probably bc it does
    //not know what fitlerCategory is.
    //return this.props.filterCategory.map(task => <Task tasj={task} />)
    //now i need to add an if else statement for the category that was selected to 
    //filter it out

    
    taskLst = () => {
        return this.props.tasks.map(task => <Task task={task} />)
    }
    render() {

        return (
            
            <div className="tasks">
               {this.taskLst()} 
            </div>
        )
    }
}

export default TaskList
