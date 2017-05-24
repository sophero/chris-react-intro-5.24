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
        // this.text = props.text;
        this.state = {
            text: this.props.text
        }

        this.changeMessage = this.changeMessage.bind(this);
        // necessary so that this. within changeMessage refers to the instance of this class.
    }

    // this. refers to the instance of this class....

    render() {
        return  <div>
                    <div className="message">{this.state.text}</div>
                    <input onChange={this.changeMessage} type="text" value={this.state.text} />
                </div>
    }
    // in the HTML in the return in render(),
    // use className= to set the classes.
    // use onChange to addEventListener to that object.


    changeMessage(event) {
        // event listener so it takes an event argument!
        this.setState({text: event.target.value})
        // this.setState() is inherited from the React.Component class.
        // references the this.state object set up in the constructor function.
    }

}

ReactDOM.render(
    <Message text="Welcome to my site." />,
    document.getElementById('react')
)
