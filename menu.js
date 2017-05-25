class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className='side-menu'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementsByClassName('menu')[0]
)

class Hamburger extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

    }
}
