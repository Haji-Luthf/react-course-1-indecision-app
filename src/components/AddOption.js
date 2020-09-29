import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault(); // prevents refresh of whole page and appending submitted data to URL.
        console.log('testing');
        console.log(e.target.elements);
        const enteredValue = e.target.elements.option.value.trim();
        const error = this.props.addElementMethod(enteredValue);
        if (!error) {
            e.target.elements.option.value = '';
            this.setState(() => ({error: undefined}));
        }
        else {
            this.setState(() => ({ error }));
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}