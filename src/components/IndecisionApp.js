import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        optionsArray: [],
        selectedOption: undefined
    }

    handleRemoveAll = () => {
        this.setState(() => ({ optionsArray: [] }));
    };

    handleRemoveSelectedOption = (optionText) => {
        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.filter(option => option !== optionText) }));
    };

    addElement = (enteredValue) => {
        if (!enteredValue) {
            return 'Enter a valid value to add item!'
        }
        if (this.state.optionsArray.indexOf(enteredValue) > -1) {
            return 'The option already exists!'
        }
        this.setState((prevState) => ({ optionsArray: prevState.optionsArray.concat(enteredValue) }));
    };
    
// Math.random() will generate a random number between 0 and 1. 
// We want a random number between 0th element and the last element of the array so we will multiply it with length of the array. 
// The number generated is in decimal between 0 and last element n+1 so we will use Math.floor for a whole random number.
// It will not round off but just take the whole number. 
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * (this.state.optionsArray.length));
        const randomOption = this.state.optionsArray[randomNum];
        this.setState(() => ({
            selectedOption: randomOption
        }));
        const selectedOption = this.state.selectedOption;
        console.log(selectedOption, randomOption);
    };

    handleClearSelection = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    };

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

    render() {
        const subtitleValue = 'Put your life in the hands of a computer!';
        return (
            <div>
                <Header subtitle={subtitleValue} />
                <div className="container">
                    <Action options={this.state.optionsArray} methodHandlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.optionsArray}
                            methodRemoveAll={this.handleRemoveAll}
                            methodRemoveSelectedOption={this.handleRemoveSelectedOption}
                        />
                        <AddOption addElementMethod={this.addElement} />
                    </div>
                </div>
                <OptionModal selectedOption={this.state.selectedOption} methodClearSelection={this.handleClearSelection} />
            </div>
        )
    }
}