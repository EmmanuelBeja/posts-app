import axios from 'axios';
import { toast } from 'react-toastify';
import * as types from '../constants/actionTypes';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

// ACTIONS
export const FetchPostsSuccess = (posts) => {
  return {
    type: types.GET_POSTS_SUCCESS,
    payload: posts
  };
}

export const FetchPostsFail = (error) => {
  return {
    type: types.GET_POSTS_FAIL,
    error
  };
}

// Queries
export const getAllPosts = dispatch => {
  return axios.get(endpoint, {
    headers: {
      Accept: 'application/json'
    }
  })
  .then(res => {
      dispatch(FetchPostsSuccess(res.data));
  })
  .catch(error => {
      dispatch(FetchPostsFail(error));
  });
}

export const addPost = (params) => {
  return axios.post(endpoint, params, {
    headers: {
      Accept: 'application/json'
    }
  })
  .then(res => {
      if (res.status === 201) {
        toast.success('Post created successfully');
      }
  })
  .catch(error => {
      toast.success(error);
  });
}
