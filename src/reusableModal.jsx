import React, { useState } from 'react';

function Modal() {
  const [modalVisible, setModalVisible] = useState(false);

  // Función para abrir el modal
  const abrirModal = () => {
    setModalVisible(true);
  }

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalVisible(false);
  }

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={abrirModal}>Abrir modal</button>

      {/* Modal */}
      {modalVisible && (
        <div className="modal">
          {/* Contenido del modal */}
          <div className="modal-contenido">
            {/* Botón para cerrar el modal */}
            <span className="cerrar" onClick={cerrarModal}>&times;</span>
            {/* Video */}
            <video controls>
              <source src="ruta/al/video.mp4" type="video/mp4" />
              Tu navegador no admite el elemento de video.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
