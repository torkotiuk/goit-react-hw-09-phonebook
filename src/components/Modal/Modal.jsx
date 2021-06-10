import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const modalRootRef = document.getElementById('modal-root');

export default function Modal({ onClose, children }) {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.Modal__content}>
        <button className={styles.button_x} onClick={() => onClose()}>
          X
        </button>
        {children}
      </div>
    </div>,
    modalRootRef,
  );
}

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div
//         className={styles.Modal__backdrop}
//         onClick={this.handleBackdropClick}
//       >
//         <div className={styles.Modal__content}>
//           <button
//             className={styles.button_x}
//             onClick={() => this.props.onClose()}
//           >
//             X
//           </button>
//           {this.props.children}
//         </div>
//       </div>,
//       modalRootRef,
//     );
//   }
// }

// export default Modal;
