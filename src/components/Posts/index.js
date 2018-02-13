import React, {Component} from 'react';

class Posts extends Component {
    render() {
        if (this.props.loading) {
            return (
                <div>..loading..</div>
            );
        }
        return (
            <div className="Posts">
                {this.props.posts.map((post, index) => {
                    return(
                        <div key={index}>{post.title}</div>
                    );
                })}
            </div>
        );
    }
}

export default Posts;