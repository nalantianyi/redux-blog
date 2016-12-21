/**
 * Created by nalantianyi on 2016/12/20.
 */
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PreviewList from '../components/Home/PreviewList';
import {listActions} from './HomeRedux';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <PreviewList {...this.props.list} {...this.props.listActions}>
                </PreviewList>
            </div>
        );
    }
}
export default connect(state => {
    return {
        list: state.home.list
    };
}, dispatch => {
    return {listActions: bindActionCreators(listActions, dispatch)};
})(Home);