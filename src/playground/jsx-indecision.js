console.log('App.js is running!');

const app = {
    title: 'Indecision App!!',
    subtitle: 'Put your life in the hands of a computer.',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault(); // prevents refresh of whole page and appending submitted data to URL.
    console.log('Form is submitted');
    const enteredValue = e.target.elements.option.value;
    if (enteredValue) {
        app.options.push(enteredValue);
        e.target.elements.option.value = '';
        reRenderApp();
    }
};

const removeAll = () => {
    app.options=[];
    reRenderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * (app.options.length));
    const randomOption = app.options[randomNum];
    alert(randomOption);
}

const appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000]

const reRenderApp = () => {
    //JSX
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            {app.options.length > 0 ? 'Here are your options:' : 'No Options'}
            <ol>
              {/*  {numbers.map((num) => {
                    return <p key={num}>{num}</p>;
                })}*/}
               {
                app.options.map((element) => {
                    return <li key={element}>{element}</li>;
                })
               }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
reRenderApp();