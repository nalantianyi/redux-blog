/**
 * Created by nalantianyi on 2016/12/21.
 */
import React, {Component, PropTypes} from 'react';
import Preview from './Preview';
export default class PreviewList extends Component {
    static propTypes = {
        loading: PropTypes.bool,
        error: PropTypes.bool,
        articleList: PropTypes.arrayOf(React.PropTypes.object),
        loadActicles: PropTypes.func
    };

    componentDidMount() {
        this.props.loadActicles();
    }

    render() {
        const {loading, error, articleList}=this.props;
        if (error) {
            return <p className="message">Oops,something is wrong.</p>;
        }
        if (loading) {
            return <p className="message">Loading...</p>;
        }
        return this.props.articleList.map(item => (
            <Preview {...item} key={item.id}></Preview>
        ));
    }
}