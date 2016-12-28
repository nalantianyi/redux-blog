/**
 * Created by nalantianyi on 2016/12/20.
 */
import React from 'react';
import {connect} from 'react-redux';
import {actions} from './HomeRedux';
import {push} from 'react-router-redux';
import PreviewList from '../components/Home/PreviewList';

@connect(state => {
    return {
        articleList: state.home.list.articleList,
    };
}, {
    push,
    ...actions,
})
class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList push={this.props.push} {...this.props} />
            </div>
        );
    }
}
export default Home;
