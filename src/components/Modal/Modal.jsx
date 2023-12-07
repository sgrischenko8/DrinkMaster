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
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
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
        {content}      
    </div>,
    modalRoot,
  );
};
