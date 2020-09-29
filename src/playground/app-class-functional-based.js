const Header = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision App!'
};

const Action = (props) => {
    return (
        <div>
            <button disabled={props.options.length === 0}
                onClick={props.methodHandlePick}>What should I do?</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault(); // prevents refresh of whole page and appending submitted data to URL.
        console.log(e.target.elements);
        const enteredValue = e.target.elements.option.value.trim();
        const error = this.props.addElementMethod(enteredValue);
        if (!error) {
            e.target.elements.option.value = '';
        }
        else {
            this.setState(() => ({ error }));
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.methodRemoveAll}>Remove All</button>
            {props.options.length > 0 ? 'Here are your options:' : 'Please add an option!'}
            {props.options.map((element) => {
                return (<Option
                    key={element}
                    element={element}
                    methodRemoveSelectedOption={props.methodRemoveSelectedOption}
                />);
            })}
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <li key={props.element}>{props.element}</li>
            <button onClick={() => {
                props.methodRemoveSelectedOption(props.element)
            }} >Remove</button>
        </div>
    );
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.addElement = this.addElement.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveSelectedOption = this.handleRemoveSelectedOption.bind(this);
        this.state = {
            optionsArray: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('optionsArray');
            const optionsArray = JSON.parse(json);
            if (optionsArray) {
                this.setState(() => ({ optionsArray }));
            }
        }
        catch (ex) {
            console.log(ex.getMessage());
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.optionsArray.length !== this.state.optionsArray.length) {
            const json = JSON.stringify(this.state.optionsArray);
            localStorage.setItem('optionsArray', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleRemoveAll() {
        this.setState(() => ({ optionsArray: [] }));
    }

    handleRemoveSelectedOption(optionText) {
        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.filter(option => option !== optionText) }));
    }

    addElement(enteredValue) {
        if (!enteredValue) {
            return 'Enter a valid value to add item!'
        }
        if (this.state.optionsArray.indexOf(enteredValue) > -1) {
            return 'The option already exists!'
        }
        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.concat(enteredValue) }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * (this.state.optionsArray.length));
        const randomOption = this.state.optionsArray[randomNum];
        alert(randomOption);
    }

    render() {
        const subtitleValue = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header subtitle={subtitleValue} />
                <Action options={this.state.optionsArray} methodHandlePick={this.handlePick} />
                <Options
                    options={this.state.optionsArray}
                    methodRemoveAll={this.handleRemoveAll}
                    methodRemoveSelectedOption={this.handleRemoveSelectedOption}
                />
                <AddOption addElementMethod={this.addElement} />
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));