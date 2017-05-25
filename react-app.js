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

// Note that JS Classes are NOT hoisted. Need to declare in desired/necessary order.

class Message extends React.Component {

    constructor(props) {
        super(props);   // props for properties - must be called props - contains the arguments/parameters
        // this.text = props.text;
        this.state = {
            text: this.props.text
        };

        this.changeMessage = this.changeMessage.bind(this);
        // necessary so that this. within changeMessage refers to the instance of this class.
        // Unfortunately in React need to write this line for every single method where you invoke this!
    }

    // this. refers to the instance of this class....

    render() {
        return  <div>
                    <div className="message">{this.state.text}</div>
                    <input onChange={this.changeMessage} type="text" value={this.state.text} />
                </div>
    }
    // in the HTML block in the return in render(),
        // use className="" to set the classes.
        // use onChange={this.funcName} to add an event listener to that element.


    changeMessage(event) {
        // event listener so it takes an event argument!
        this.setState({text: event.target.value})
        // this.setState() is inherited from the React.Component class.
        // references the this.state object set up in the constructor method.
    }

}

ReactDOM.render(
    <Message text="Welcome to my site." />, // this line intsantiates an instance of the Message class!
    document.getElementById('react')
)
