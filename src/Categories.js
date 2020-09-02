import React from 'react'

class Categories extends React.Component{

 

//   filterTask = (event) => {
//       this.props.filterTask(event)
//       if(this.props.filterCategory === "All"){
//           return this.props.tasks
//       }else{
//           return this.props.tasks.filter(task => task.category === this.props.filterCategory)
//       }
//   }

    catHandler = (event) => {
        this.props.catHandler(event.target.innerText)
        console.log(event.target.innerText)
    }


    render(){

        return(
            <div className="categories"><h3>Category Filters</h3>
                <button onClick={this.catHandler}>All</button>
                <button onClick={this.catHandler}>Code</button>
                <button onClick={this.catHandler}>Food</button>
                <button onClick={this.catHandler}>Money</button>
                <button onClick={this.catHandler}>Misc</button>
            </div>
        )
    }
}

export default Categories