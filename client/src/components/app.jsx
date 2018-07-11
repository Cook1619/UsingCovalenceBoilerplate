import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';
import HomePage from './Homepage'


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <nav>
                        <Link to="/api/blogs">Blogs</Link>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/api/blogs" component={BlogList} />
                        <Route path="/api/blogs/:id" component={SingleBlog} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;