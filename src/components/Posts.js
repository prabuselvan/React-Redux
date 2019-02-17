import React from 'react';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import propTypes from 'prop-types';

class Posts extends React.Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    // when receiving the props from the state
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         posts: []
    //     }
    // }
    // componentDidMount() {
        
    // }
    render() {
        return (
            <div>
                <h2> Posts </h2>
                {this.props.posts.map((post, index)=> {
                    return (
                        <div key={index}>
                               <strong> {post.title} </strong> 
                               <p> {post.body}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost: propTypes.object
}

const mapStateToProps = state=> ( {
    posts: state.posts.items, // posts comes from the rootreducer
    newPost: state.posts.item
})

// export default Posts;
export default connect(mapStateToProps, {fetchPosts})(Posts);

