/**
 * Created by nalantianyi on 2016/12/21.
 */
const initialState = {
    loading: true,
    error: false,
    articleList: []
};

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

//action creator
export function loadArticles() {
    //返回的是一个action
    return {
        types: [LOAD_ARTICLES, LOAD_ARTICLES_SUCCESS, LOAD_ARTICLES_ERROR],
        url: '/api/articles.json'
    }
}
//reducer
function previewList(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES: {
            return {...state, loading: true, error: false};
        }
        case LOAD_ARTICLES_SUCCESS: {
            return {...state, loading: false, error: false, articleList: action.payload.articleList};
        }
        case LOAD_ARTICLES_ERROR: {
            return {...state, loading: false, error: true};
        }
        default:
            return state;
    }

}
export default previewList;