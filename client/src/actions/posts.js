import axios from 'axios';
import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from './types';

const url = 'http://localhost:5000/posts'

// action creators
export const getPosts = () => (dispatch) => {
    axios.get(url)
        .then(res =>
            dispatch({
                type: FETCH_ALL,
                payload: res.data
            }))
        .catch(err => console.log(err));
};

export const createPosts = (post) => (dispatch) => {
    try {
        axios.post(url, post)
            .then(res =>
                dispatch({
                    type: CREATE_POST,
                    payload: res.data
                }));
    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, updatedPost) => (dispatch) => {
    axios.patch(`${url}/${id}`, updatedPost)
        .then(res =>
            dispatch({
                type: UPDATE_POST,
                payload: res.data
            }))
        .catch(err => console.log(err));
};

export const deletePost = (id) => (dispatch) => {
    axios.delete(`${url}/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_POST,
                payload: id
            }))
        .catch(err => console.log(err));
};

export const likePost = (id) => (dispatch) => {
    axios.patch(`${url}/${id}/likePost`)
        .then(res =>
            dispatch({
                type: LIKE_POST,
                payload: res.data
            }))
        .catch(err => console.log(err));
}

