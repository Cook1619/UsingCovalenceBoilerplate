import React, { Component, Fragment } from 'react';

class AddBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            content:''
        }
        this.handleBlogTitle = this.handleBlogTitle.bind(this);
        this.handleBlogContent = this.handleBlogContent.bind(this);
    }
 handleBlogTitle(event) {
        this.setState({
            title: event.target.value
        })
    }
 handleBlogContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    render(){
        return(
            <Fragment>
                <input 
                type="text"
                placeholder="Write a Blog Title"
                onChange = {this.handleBlogTitle}
                />
                <input 
                type="text"
                placeholder="Enter in Blog Content here"
                onChange = {this.handleBlogContent}
                />
                <input 
                type="submit"
                />
                
            </Fragment>
        )}
}

export default AddBlog;