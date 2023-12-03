import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, content }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose(null);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (
      e.target.nodeName === 'DIV' &&
      e.target?.className.includes('overlay')
    ) {
      onClose(null);
    }
  };

  return createPortal(
    <div className={css.overlay} onMouseDown={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.modal_close_btn} onClick={() => onClose(null)}>
          +
        </button>
        {content}
      </div>
    </div>,
    modalRoot,
  );
};
