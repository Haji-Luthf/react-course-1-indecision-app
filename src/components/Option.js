import React from 'react';

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.element}</p>
        {// <li key={props.element}>{props.element}</li>
        }
        <button className="button button--link" onClick={() => {
            props.methodRemoveSelectedOption(props.element)
        }} >Remove</button>
    </div>
);

export default Option;