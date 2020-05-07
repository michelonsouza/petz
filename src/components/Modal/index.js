import React, { useCallback, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { Container, Overlay, ModalContainer, ModalContent } from './styles';

function Modal({ id, onDelete, onClose }) {
  const [closing, setClosing] = useState(false);

  const classClosing = useMemo(() => {
    return closing ? 'closing' : '';
  }, [closing]);

  const handleClose = useCallback(() => {
    setClosing(true);

    setTimeout(() => {
      onClose();
    }, 1000);
  }, [onClose]);

  const handleDelete = useCallback(() => {
    onDelete(id);
    handleClose();
  }, [onDelete, handleClose, id]);

  return (
    <Container>
      <Overlay onClick={handleClose} className={classClosing} />
      <ModalContainer className={classClosing}>
        <header>
          <p title="Excluir post">Excluir post</p>
        </header>
        <ModalContent>
          <p title="Tem certeza que deseja deletar este Post?">
            Tem certeza que deseja excluir o post <b>#{id}</b>?
          </p>
          <div>
            <Button variant="primary" title="Cancelar" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="danger"
              title={`Excluir post #${id}`}
              onClick={() => handleDelete(id)}
            >
              Excluir
            </Button>
          </div>
        </ModalContent>
      </ModalContainer>
    </Container>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
