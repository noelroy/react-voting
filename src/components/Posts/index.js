import React, {Component} from 'react';
import {Link} from 'react-router';

import './style.css';

class Posts extends Component {

    handleUpvote = (post, key) => {
        this.props.firebaseRef.ref("posts/" + key).set({
            title: post.title,
            upvote: post.upvote + 1,
            downvote: post.downvote
        });
    }

    handleDownvote = (post, key) => {
        this.props.firebaseRef.ref("posts/"+ key).set({
            title: post.title,
            upvote: post.upvote,
            downvote: post.downvote - 1
        });
    }

    render() {
        let _this = this;
        let posts = this.props.posts;

        if (this.props.loading) {
            return (
                <div>..loading..</div>
            );
        }
        return (
            <div className="ListPosts">
                <Link className="Button" to="/add">Add Post</Link><br />>
                <div className="Posts">
                    {Object.keys(posts).map((key) => {
                        return(
                            <div className="Post" key={key}>
                                <h2>{posts[key].title}</h2>
                                <div><label>Upvotes:  </label><span>{posts[key].upvote}</span></div>
                                <div><label>Downvotes:  </label><span>{posts[key].downvote}</span></div>
                                <button
                                    onClick={_this.handleUpvote.bind(this, posts[key], key)}
                                    type="button"
                                >
                                    Upvote
                                </button>
                                <button
                                    onClick={_this.handleDownvote.bind(this, posts[key], key)}
                                    type="button"
                                >
                                    Downvote
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Posts;