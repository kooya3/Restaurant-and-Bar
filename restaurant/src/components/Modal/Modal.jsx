import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  return (
    <>
      {show ? (
        <div className="modal__overlay" onClick={onClose}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal__title">Copyright Notice:</h2>
            <p className="modal__text">All content and materials on AMPM Restaurant's website, including but not limited to text, images, graphics, logos, and software, are the property of AMPM Restaurant and are protected by copyright laws. You may not copy, reproduce, distribute, or modify any part of this website without the prior written consent of AMPM Restaurant.</p>
            <h2 className="modal__title">Disclaimer:</h2>
            <p className="modal__text">AMPM Restaurant makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, suitability, or reliability of the information or content on this website. The information and content are provided "as is" and without warranty of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            <p className="modal__text">AMPM Restaurant does not warrant that the website will be uninterrupted or error-free, that defects will be corrected, or that the website or the server that makes it available are free of viruses or other harmful components. AMPM Restaurant shall not be liable for any damages arising from the use of, or inability to use, this website, or any content or materials provided on or through this website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
            <p className="modal__text">AMPM Restaurant reserves the right to make changes, corrections, or updates to this website, or to discontinue it at any time without notice. AMPM Restaurant assumes no responsibility to update or modify the content or materials on this website.</p>
            <p className="modal__text">By accessing and using this website, you agree to these terms and conditions. If you do not agree to these terms and conditions, please do not use this website.</p>
            <button className="modal__close" onClick={onClose}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
