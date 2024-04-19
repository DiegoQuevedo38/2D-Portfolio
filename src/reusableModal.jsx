import React, { useState } from 'react';

function Modal(id) {
  const [modalVisible, setModalVisible] = useState(false);

  const idRentify = "924729366"

  const abrirModal = () => {
    setModalVisible(true);
  }

  const cerrarModal = () => {
    setModalVisible(false);
  }

  return (
    <div>
      <button onClick={abrirModal}>Ver Video demo</button>

      {modalVisible && (
        <div className="modal">
          <div className="modal-contenido">
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            <iframe src={`https://player.vimeo.com/video/${id}`} frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
