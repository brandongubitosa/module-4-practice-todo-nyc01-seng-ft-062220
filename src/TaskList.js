import React from 'react'
import Task from './Task.js'

class TaskList extends React.Component {

    
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
