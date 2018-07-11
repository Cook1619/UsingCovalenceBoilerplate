import React, { Component, Fragment } from 'react';

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
    }
    handleBlogTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleBlogContent = (event) => {
        this.setState({
            content: event.target.value
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
                
            </Fragment>
        )}
}

export default AddBlog;