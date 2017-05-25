
class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts
        }
    }

    render() {

        let posts = this.state.posts.map(function(post, index) {
            return <div key={index}>{post.title}: {post.content}</div>
        });

        return(
            <div className="blog-container">
                <h2>Blog Posts:</h2>
                <div className="posts">{posts}</div>
            </div>
        )
    }
}
