import React from 'react';
import ReactDOM from 'react-dom';

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibility = this.handleVisibility.bind(this);
        this.state = {
            showText: false
        }
    }

    handleVisibility() {
        this.setState(() => {
            return {
                showText: !this.state.showText
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibility}>{!this.state.showText ? 'Show Details' : 'Hide Details'}</button>
                <br></br>
                {this.state.showText && <p>Some Conditional Text!!!</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));