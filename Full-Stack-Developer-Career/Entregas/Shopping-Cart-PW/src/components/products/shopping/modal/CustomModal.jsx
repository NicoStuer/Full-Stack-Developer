import Modal from "react-modal";
import "./CustomModal.css";

function CustomModal({ isOpen, onRequestClose, selectedProduct }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      {selectedProduct && (
        <div className="modal-content">
          <img src={selectedProduct.image} />
          <h2 className="text-xl font-bold mb-4">{selectedProduct.title}</h2>
          <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
          <p className="text-gray-900 font-semibold mb-4">
            Price: U$S {selectedProduct.price}
          </p>
        </div>
      )}
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={onRequestClose}
      >
        Close
      </button>
    </Modal>
  );
}

export default CustomModal;
