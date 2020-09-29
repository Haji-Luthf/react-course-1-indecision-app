import React from 'react';

import Option from './Option';

const Options = (props) => (
        <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button className="button button--link" onClick={props.methodRemoveAll}>Remove All</button>
            </div>
            {props.options.length === 0 && <h4 className="widget__message">Please add an option!</h4>}
            {props.options.map((element, index) => (
                <Option
                    key={element}
                    element={element}
                    count = {index + 1}
                    methodRemoveSelectedOption={props.methodRemoveSelectedOption}
                />
            ))}
        </div>
    );

export default Options;