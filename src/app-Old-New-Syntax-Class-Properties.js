import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Raheem';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting() {
        return `Hi! I am ${this.name}.`;
    }
}
const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting()); // No need of binding
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting()); // Requires binding

class NewSyntax {
    name = 'Hajira'; // No need of var const or let
    getGreeting = () => { // No need of binding as arrow functions are always bound to the class instance
        return `Hi! I am ${this.name}.`;
    }
}
const newSyntax = new NewSyntax();
console.log(newSyntax);
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting()); // Without binding
