import React from 'react'

class Categories extends React.Component{


    render(){

        return(
            <div className="categories"><h3>Category Filters</h3>
                <button onClick={this.props.catHandler}>All</button>
                <button onClick={this.props.catHandler}>Code</button>
                <button onClick={this.props.catHandler}>Food</button>
                <button onClick={this.props.catHandler}>Money</button>
                <button onClick={this.props.catHandler}>Misc</button>
            </div>
        )
    }
}

export default Categories