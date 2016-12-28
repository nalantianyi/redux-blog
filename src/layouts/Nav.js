/**
 * Created by nalantianyi on 2016/12/20.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">Home</Link>
            </nav>
        );
    }
}