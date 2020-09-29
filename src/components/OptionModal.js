import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>  (
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.methodClearSelection} // For ESC key and if user clicks outside the pop up
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal">
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.methodClearSelection}>Okay</button>
        </Modal>
    );

export default OptionModal;