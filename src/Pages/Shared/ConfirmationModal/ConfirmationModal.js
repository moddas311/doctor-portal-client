import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, successAction, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-600">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-circle border-none bg-green-600">✔</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-circle border-none bg-red-600">✘</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;