import React from 'react';
import ReactModal from 'react-modal';
import "./WorkModal.css";

const WorkModal = ({showModal, setShowModal}) => {
  return (
    <div>
      <ReactModal isOpen={showModal} >
        <button onClick={()=>setShowModal(false)}>Close</button>
      </ReactModal>
    </div>
  )
}

export default WorkModal
