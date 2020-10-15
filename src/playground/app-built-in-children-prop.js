import React from 'react';
import ReactDOM from 'react-dom';

const Layout = (props) => {
    return (
        <div>
            <p>Header</p>
            {props.children}
            <p>Footer</p>
        </div>
    )
};

ReactDOM.render((
    <Layout>
        <div>
            <h1>Page Title</h1>
            <p>This is my page content</p>
        </div>
    </Layout>
),
    document.getElementById('app'));