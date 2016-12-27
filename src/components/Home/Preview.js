/**
 * Created by nalantianyi on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react';
import './Preview.css';

export default class Preview extends Component {
    static propTypes = {
        title: PropTypes.string,
        link: PropTypes.string
    };

    render() {
        return (
            <article className="article-preview-item">
                <h1 className="title">{this.props.title}</h1>
                <span className="date">{this.props.date}</span>
                <p className="desc">{this.props.description}</p>
            </article>
        );
    }
}