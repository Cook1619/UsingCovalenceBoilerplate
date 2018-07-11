import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class SingleBlog extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            blog: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch('/api/blogs/' + this.props.match.params.id);
            let data = await res.json();
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        console.log(this.state.blog)
        return (
            <div>
            <h1>TEST</h1>
                <p>{this.state.blog.title}</p>
            </div>
        )
    }
}

export default SingleBlog;