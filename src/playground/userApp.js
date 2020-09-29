console.log('UserApp.js is running!');

const user = {
    name: 'Hajira Raheem',
    age: 32,
    location: 'India'
};

function validateLocation(location) {
    if (location) // checks if string's length is > 0
        return <p>Location: {location}</p>;
    // By default else will return undefined
}

const template2 = (
    <div>
        <h1>{user.name ? user.name + '!' : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {validateLocation(user.location)}
    </div>
);

const appRoot2 = document.getElementById('app2');
ReactDOM.render(template2, appRoot2);