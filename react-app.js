class HelloWorld extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>Hello World!</div> // note no string quptation marks!
    }

}

ReactDOM.render(
    <HelloWorld />, //what we want to render, note use of ending slash!
    document.getElementById('react') //where we want it to render -- a DOM object as you're used to!
)

class Message extends React.Component {

    constructor(props) {
        super(props);   // props for properties - call it what you want, contains the arguments/parameters
        this.text = props.text;
    }

    render() {
        return <div>{this.text}</div>
    }

}

ReactDOM.render(
    <Message text="Welcome to my site." />,
    document.getElementById('react')
)
