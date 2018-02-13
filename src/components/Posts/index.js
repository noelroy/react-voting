import React, {Component} from 'react';

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

        if(!posts) return false;

        if (this.props.loading) {
            return (
                <div>..loading..</div>
            );
        }
        return (
            <div className="Posts">
                {Object.keys(posts).map((key) => {
                    return(
                        <div key={key}>
                            <label>Title</label><div>{posts[key].title}</div>
                            <label>Upvote</label><div>{posts[key].upvote}</div>
                            <label>Downvote</label><div>{posts[key].downvote}</div>
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
        );
    }
}

export default Posts;