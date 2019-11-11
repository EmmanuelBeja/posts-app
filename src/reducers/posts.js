import initialState from './initialState';

const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
      case 'GET_POSTS_SUCCESS':
        return {
          ...state,
          data: action.payload,
        };
      case 'GET_POSTS_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
  }
}

export default postsReducer;
