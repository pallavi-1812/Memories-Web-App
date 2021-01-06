import { FETCH_ALL, CREATE_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../actions/types';

const reducer = (posts = [], action) => { // (state, action), since state is posts which is empty array
    try {
        switch (action.type) {
            case DELETE_POST:
                console.log("del");
                return posts.filter((post) => post._id !== action.payload);
            case UPDATE_POST:
            case LIKE_POST:
                return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            case FETCH_ALL:
                return action.payload;
            case CREATE_POST:
                return [...posts, action.payload];
            default:
                return posts;
        };
    } catch (error) {
        console.log(error);
    }
};

export default reducer;