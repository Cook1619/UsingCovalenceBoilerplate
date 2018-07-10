import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';
import GoodbyeWorld from './goodbye';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/goodbye">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component={BlogList} />
                        <Route path="/goodbye" component={GoodbyeWorld} />
                        <Route path="/api/blogs/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;