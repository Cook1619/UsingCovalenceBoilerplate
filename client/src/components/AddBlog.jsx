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
                placeholder="Write a Blog Title"
                onChange = {this.handleBlogTitle}
                />
                <input 
                placeholder="Enter in Blog Content here"
                onChange = {this.handleBlogContent}
                />
                
            </Fragment>
        )}
}

export default AddBlog;