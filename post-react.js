class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: "",
                content: ""
            }
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }

    render() {
        return  <div className="post-module">
                    <div className="post-input">
                        <div className="post-input__title">
                            <input onChange={this.updateTitle} type="text" placeholder="Post title"/>
                        </div>
                        <div className="post-input__content">
                            <textarea onChange={this.updateContent} type="text" placeholder="Type your post content here."></textarea>
                        </div>
                        <button onClick={this.updatePost} className="post-input__submit">Update post</button>
                    </div>
                    <div className="post-display">
                        <div className="post-display__title">
                            {this.state.post.title}
                        </div>
                        <div className="post-display__content">
                            {this.state.post.content}
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

    updatePost(event) {
        this.setState({
            post: {
                title: this.state.title,
                content: this.state.content
            }
        });
    }

}

ReactDOM.render(
    <Post />,
    document.getElementsByClassName('post-container')[0]
)
