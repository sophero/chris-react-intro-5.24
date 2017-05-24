class Post extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     title: this.props.title,
        //     content: this.props.content
        // };
        this.updateTitle = this.updateTitle.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    render() {
        return  <div className="post-input">
                    <div className="post-input__title">
                        <input onChange={this.updateTitle} type="text" placeholder="Post title"/>
                    </div>
                    <div className="post-input__content">
                        <textarea onChange={this.updateContent} type="text" placeholder="Type your post content here."></textarea>
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

}

ReactDOM.render(
    <Post />,
    document.getElementsByClassName('post-container')[0]
)
