/**
 * Created by nalantianyi on 2016/12/20.
 */
import React, {Component} from 'react';
import Nav from './Nav';
export default class Frame extends Component {
    render() {
        return (
            <div className="frame">
                <section className="header">
                    <Nav/>
                </section>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        );
    }
}