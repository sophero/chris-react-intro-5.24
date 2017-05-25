class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.exampleProp,
            post: {
                title: "",
                content: ""
            }
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.addPost = this.addPost.bind(this);
    }

    render() {
        return  <div className="post-module">
                    <div className="post-preview">
                        Post Preview:
                        <div className="post-preview__title">
                            Title: {this.state.title}
                        </div>
                        <div className="post-preview__content">
                            Content: {this.state.content}
                        </div>
                    </div>
                    <div className="post-input">
                        <div className="post-input__title">
                            <input onChange={this.updateTitle} type="text" placeholder="Post title"/>
                        </div>
                        <div className="post-input__content">
                            <textarea onChange={this.updateContent} type="text" placeholder="Type your post content here."></textarea>
                        </div>
                        <button onClick={this.updatePost} className="post-input__submit">Update post</button>
                        <button onClick={this.addPost} className="blog-input__submit">Post to Blog</button>
                    </div>
                    <div className="post-display">
                        Latest Post:
                        <div className="post-display__title">
                            Title: {this.state.post.title}
                        </div>
                        <div className="post-display__content">
                            Content: {this.state.post.content}
                        </div>
                    </div>
                </div>
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    updateContent(event) {
        this.setState({
            content: event.target.value
        });
    }

    updatePost() {
        this.setState({
            post: {
                title: this.state.title,
                content: this.state.content
            }
        });
    }

    addPost() {
        let post = {
            title: this.state.title,
            content: this.state.content
        }

        postArray.push(post);

        ReactDOM.render(
            <Blog posts={postArray} />,
            document.getElementsByClassName('blog-container')[0]
        )
    }

}

ReactDOM.render(
    <Post exampleProp="I was passed in as a prop."/>,
    document.getElementsByClassName('post-container')[0]
)

let postArray = [
    {
        title: "hey",
        content: "you"
    },
    {
        title: "peace",
        content: "love"
    }
];

console.log(postArray);

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts
        }
        console.log(this.state);
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

ReactDOM.render(
    <Blog posts={postArray} />,
    document.getElementsByClassName('blog-container')[0]
)
