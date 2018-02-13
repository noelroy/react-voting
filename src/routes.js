import React from 'react';
import {Router, Route} from 'react-router';

import App from './containers/App';
import Posts from './components/Posts';
import AddPost from './containers/AddPost'

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={ App }>
            <Route path="/posts" component= {Posts}></Route>
            <Route path="/add" component={AddPost}></Route>
        </Route>
    </Router>
);

export default Routes;