import React from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {createPost} from '../actions/postActions';
class Postform extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            title: '',
            body: ''
        }
    }

    onHandleChange=(e)=> {
        this.setState( {
            [e.target.name] : [e.target.value]
        })
    }
    
// Form Submission
    formSubmit=(e)=> {
       e.preventDefault();
        const {title, body} =this.state;
       const post = {
           title : title,
           body :  body
       };

       this.props.createPost(post); // createPost is in the action

    //    fetch('https://jsonplaceholder.typicode.com/posts', {
    //        method: 'POST',
    //        headers: {
    //            'content-type' :'application/json',
    //        },
    //        body: JSON.stringify(post)
    //    })
    //    .then(res=> res.json())
    //    .then(data => console.log(data));


    }

    render () {
        return (
            <div>
                <h2> Add Post</h2>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label>  Title </label> <br/>
                        <input type='text' placeholder='Title' name='title' onChange={this.onHandleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label> Post </label> <br/>
                        <textarea name='body' placeholder='body' onChange={this.onHandleChange} value={this.state.body} />
                    </div>
                        <button className='btn btn-primary'> Submit </button>
                </form>
            </div>
        )
    }
}

// export default Postform;

Postform.propTypes = {
    createPost : propTypes.func.isRequired
}

export default connect (null,{createPost}) (Postform);