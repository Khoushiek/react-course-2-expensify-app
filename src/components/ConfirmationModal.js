import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = (props) => (
  <Modal
    isOpen = {props.isModalOpen}
    contentLabel="Remove Expense Modal"
    onRequestClose={props.handleModalClose}
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Do you really want to remove the expense?</h3>
    <div className="btn-grp">
      <button className="box-layout__button button--confimation" onClick={props.onRemoveExpense}>
        Confirm
      </button>
      <button className="box-layout__button button--confimation" onClick={props.handleModalClose}>
        Cancel
      </button>
    </div>
  </Modal>
);

export default ConfirmationModal;
