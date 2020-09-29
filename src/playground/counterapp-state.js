let count = 0;
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        //step 1: add default
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
            const count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        //step 3: update the state using the first argument which can be named anything
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        //step 4: auto reRender
        //step 5: repeat step 3
    }

    handleMinusOne() {
        //step 3: update the state using the first argument which can be named anything
        this.setState((oldState) => {
            return {
                count: oldState.count - 1
            };
        });
        //step 4: auto reRender
        //step 5: repeat step 3
    }

    handleReset() {
        //step 3: update the state using the first argument which can be named anything
        this.setState(() => {
            return {
                count: 0
            };
        });
        //step 4: auto reRender
        //step 5: repeat step 3
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1> {/** step 2: render default value to screen*/}
                <button id="addCount" className="button" onClick={this.handleAddOne}>+1</button>
                <button id="subtractCount" className="button" onClick={this.handleMinusOne}>-1</button>
                <button id="resetCount" className="button" onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));