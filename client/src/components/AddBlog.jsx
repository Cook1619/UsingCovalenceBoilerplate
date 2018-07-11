import React, { Component, Fragment } from 'react';

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            addBlog: ''
        }
    }
    handleAddBlog = (value) => {
        this.setState({
            addBlog: value
        })
    }
    render(){
        return(
            <Fragment>
                <input 
                placeholder="Write a Blog"
                value = { this.state.addBlog }
                onChange = { (event) => this.handleAddBlog(event.target.value)}
                />
                <button onClick={event => this.props.POST(event)}>Add to Blog</button>
            </Fragment>
        )}
}

export default AddBlog;