import  {FETCH_POSTS, NEW_POST} from '../actions/types';

const initialState = {
    items : [],
    item : {}
};

export default function (state= initialState,  action) {
    console.log(action.type);
    switch(action.type) {
        // console.log(action.type);
        case FETCH_POSTS:
        console.log('Fetch posts reducer');
            return {
                    ...state, // returning the new  state
                    items: action.payload
            };
        case NEW_POST: 
        console.log('New Post Reducer');
            return {
                ...state,
                item: action.payload
            }
        default :
            return state;
    }
}
