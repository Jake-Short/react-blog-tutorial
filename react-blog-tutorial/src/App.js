import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import PostsListPage from './Pages/BlogPagesContainer/PostsListPage/PostsListPage';
import BlogPostPage from './Pages/BlogPagesContainer/BlogPostPage/BlogPostPage';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PostsListPage} />
                <Route exact path="/blog" component={PostsListPage} />
                <Route exact path="/blog/post/:id" component={BlogPostPage} />
            </Switch>
        </Router>
    );
}