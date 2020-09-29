console.log('CounterApp.js is running!');

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    return count;
}
const minusOne = () => {
    count--;
    renderCounterApp();
    return count;
}
const reset = () => {
    count = 0;
    renderCounterApp();
    return count;
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template = (
        <div>
            <h1>Count: {count}</h1>
            <button id="addCount" className="button" onClick={addOne}>+1</button>
            <button id="subtractCount" className="button" onClick={minusOne}>-1</button>
            <button id="resetCount" className="button" onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderCounterApp();