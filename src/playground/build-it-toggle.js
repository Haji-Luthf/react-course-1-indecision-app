const appRoot = document.getElementById('app');

let showText = false;

const showOrHideText = () => {
    showText = !showText;
    reRenderApp();
}

const reRenderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showOrHideText}>{!showText ? 'Show Details' : 'Hide Details'}</button>
            <br></br>
            {showText && <p>Some Conditional Text!!!</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
reRenderApp();