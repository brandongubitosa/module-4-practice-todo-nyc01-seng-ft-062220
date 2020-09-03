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
        this.props.catHandler(event)
    }

    categories = () => {
        return this.props.categories.map((category) => {
          if (this.props.category === category) {
            return (
              <button
                onClick={this.clickHandler}
                value={category}
                className="selected"
              >
                {category}
              </button>
            )
          } else {
            return (
              <button onClick={this.clickHandler} value={category}>
                {category}
              </button>
            )
          }
        })
      }


    render(){
       

        return(
            <div className="categories"><h3>Category Filters</h3>
                {this.categories()}
            </div>
        )
    }
}

export default Categories