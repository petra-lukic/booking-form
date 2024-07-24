import './Styles/Modal.scss'; 

// Modal component, receives onClose function and children as props
export default function Modal({ onClose, children }) {
  return (
    // Overlay for the modal, closes modal when clicked
    <div className='modal-overlay' onClick={onClose}>
      {/* Modal content container, prevents closing when clicking inside */}
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {/* Close button for the modal */}
        <button className='modal-close' onClick={onClose}>&times;</button>
        {/* Render the children elements passed to the Modal */}
        {children}
      </div>
    </div>
  );
};

