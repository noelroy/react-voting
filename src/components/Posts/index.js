import React, {Component} from 'react';

class Posts extends Component {
    render() {
        let posts = this.props.posts;
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
                            {posts[key].title}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Posts;