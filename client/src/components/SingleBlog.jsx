import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blog: []
        }
    }
    async componentDidMount() {
        try {
            let res = await fetch(`/` + this.props.match.params.id);
            let data = await JSON.parse(res);
            console.log(data);
            this.setState({
                blog: data
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                <p>{this.state.blog.title}</p>
            </div>
        )
    }
}

export default SingleBlog;