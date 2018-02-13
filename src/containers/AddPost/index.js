import React, {Component} from 'react';
import {Link} from 'react-router';

import './style.css';

class AddPost extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.firebaseRef.ref("posts").push({
            title : this.state.title,
            upvote : 0,
            downvote : 0
        });

        this.setState({
            title: ''
        })
    }

    render() {
        return(
            <div className="AddPage">
                <div className="AddPost">
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.title}
                    />
                    <button
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        Submit
                    </button>
                </div><br/>
                <Link className="Button" to="/">Go back to Posts</Link>
            </div>
        );
    }
}

export default AddPost;