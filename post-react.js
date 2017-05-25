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

ReactDOM.render(
    <Post exampleProp="I was passed in as a prop."/>,
    document.getElementsByClassName('post-container')[0]
)

ReactDOM.render(
    <Blog posts={postArray} />,
    document.getElementsByClassName('blog-container')[0]
)
