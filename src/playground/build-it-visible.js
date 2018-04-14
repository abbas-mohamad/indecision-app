class VisbilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button
                    onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Some details to show</p>
                    </div>)
                }
            </div>
        );
    }

}

ReactDOM.render(<VisbilityToggle/>, document.getElementById('app'));


/*
document.title = 'build it'

let visibility = false;

const toggleMethod = () => {
    visibility = !visibility;
    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleMethod}>{visibility ? 'Hide details' : 'Show details'}</button>
            {visibility && (
                <div>
                    <p>Some details to show</p>
                </div>)}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
};

renderApp();*/
