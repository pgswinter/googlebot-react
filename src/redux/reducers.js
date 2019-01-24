import { combineReducers } from 'redux';
import { FETCH_POSTS_PENDING, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE, 
    UPDATE_POST_SUCCESS, 
    UPDATE_POST_PENDING, 
    UPDATE_POST_FAILURE } from './actions';

function users(state = {items: [], loading: true}, action) {
    switch(action.type) {
        case FETCH_POSTS_PENDING:
        case UPDATE_POST_PENDING:
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            // console.log(action);
            return {
              items: action.payload.data.reverse(),
              loading: false
            }
        case FETCH_POSTS_FAILURE:
            return {
              items: [],
              loading: false
            }
        case UPDATE_POST_SUCCESS: {
            const { id, ...rest } = action.payload
            return  {
                items: state.items.map(post => {
                    if (post.id === id) {
                        return { ...post, ...rest }
                    }
                    return post
                }),
                loading: false
            }
        }
        case UPDATE_POST_FAILURE:
            return {
            ...state,
            loading: false
            }
        default:
            return state;
    }
}

const entitiesReducer = combineReducers({
    users
})
  
const rootReducer = combineReducers({
    entities: entitiesReducer
})
  
export default rootReducer;