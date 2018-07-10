import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs', {
                method: 'GET',
            });
            let data = await res.json();
            console.log(data);
            this.setState({
                blogs: data
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
       
        let blogdata = this.state.blogs.map((blog) => {
            return (
                <Fragment>
                <div key={blog.id}>{this.state.blog}</div>
                </Fragment>
            )
        })
        return(
            <div>{blogdata}</div>
        )
    }

}

export default BlogList;