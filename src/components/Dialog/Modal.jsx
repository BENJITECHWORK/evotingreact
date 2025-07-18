import React, { useRef, useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, hasCloseBtn = true, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  };

 const handleKeyDown = (event) => {
    if (event.key === "Escape") {
       event.preventDefault();
    }
    // event.preventDefault();
 };

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isModalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isModalOpen]);

  return (
    <dialog ref={modalRef} onKeyDown={handleKeyDown} >
      {hasCloseBtn && (
        <button  onClick={handleCloseModal}>
          Close
        </button>
      )}
      {children}
    </dialog>
  );
};

export default Modal;
