import React, { useState } from "react";
import "./ButtonStyles.css";
import Form from "./AddForm";
import Modal from "./Modal";

const Button = ({ onDeleteModeChange }) => {
  const [showModal, setShowModal] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);

  const handleAddClick = () => {
    setShowModal(true);
  };

  const handleAddClose = () => {
    setShowModal(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteMode(!isDeleteMode);
    onDeleteModeChange(!isDeleteMode);
  };

  return (
    <div className="parrent">
      <button onClick={handleAddClick} className="my-button rounded-button">
        Thêm
      </button>
      <Modal show={showModal} onClose={handleAddClose}>
        <Form />
      </Modal>
      <button onClick={handleDeleteClick} className="my-button rounded-button">
        Xóa
      </button>
      <button className="my-button rounded-button">Sửa</button>
      <button className="my-button rounded-button">Lọc</button>
    </div>
  );
};

export default Button;
