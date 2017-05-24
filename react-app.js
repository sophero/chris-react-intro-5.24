class HelloWorld extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>Hello World!</div> // note no string quptation marks!
    }

}

ReactDOM.render(
    <HelloWorld />, //what we want to render, can use
    document.getElementById('react') //where we want it to render -- a DOM object as you're used to!
)
