class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={this.props.options.length === 0} 
                onClick={this.props.methodHandlePick}>What should I do?</button>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
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
            this.setState(() => {
                return {
                    error // error: error
                }
            });
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

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.methodRemoveAll}>Remove All</button>
                {this.props.options.length > 0 ? 'Here are your options:' : 'No Options'}
                {this.props.options.map((element) => {
                    return <Option key={element} element={element} />;
                })}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li key={this.props.element}>{this.props.element}</li>
            </div>
        );
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.addElement = this.addElement.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            optionsArray: []
        }
    }

    handleRemoveAll() {
        this.setState(() => {
            return {
                optionsArray : []
            }
        });
    }

    addElement(enteredValue) {
        if(!enteredValue){
            return 'Enter a valid value to add item!'
        }
        if(this.state.optionsArray.indexOf(enteredValue) > -1){
            return 'The option already exists!'
        }
        this.setState((prevState) => {
            //prevState.optionsArray.push(enteredValue)
            return {
                optionsArray : prevState.optionsArray.concat(enteredValue)//prevState.optionsArray
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * (this.state.optionsArray.length));
        const randomOption = this.state.optionsArray[randomNum];
        alert(randomOption);
    }

    render() {
        const titleValue = 'Indecision App!';
        const subtitleValue = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header title={titleValue} subtitle={subtitleValue} />
                <Action options={this.state.optionsArray} methodHandlePick={this.handlePick}/>
                <Options options={this.state.optionsArray} methodRemoveAll={this.handleRemoveAll}/>
                <AddOption addElementMethod={this.addElement}/>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));