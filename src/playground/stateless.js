const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}


ReactDOM.render(<User name="Hajira Raheem" age={32} />, document.getElementById('app'));