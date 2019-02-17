import {FETCH_POSTS, NEW_POST} from  '../actions/types';

// Actions we are writing code for getting the data from the server
// dispatch the data to reducer

// using Es6
export const fetchPosts = ()=> dispatch => {
    console.log('fetching from postAction.js');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(posts=> 
        dispatch({
            type: FETCH_POSTS,
            payload:posts
    }));
};

// export function fetchPosts() {
    // return function (dispatch) {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res=> res.json())
    //     .then(posts=> dispatch({
    //         type: FETCH_POSTS,
    //         payload: posts
    //     }));
    // }
// }

export const createPost = (postData)=> dispatch=> {
    console.log('createPost in post Action.js');
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(postData)
        
    })
    .then (res=> res.json())
    .then(post => dispatch ( {
        type: NEW_POST,
        payload: post
    }))
}