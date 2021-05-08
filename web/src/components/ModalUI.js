import {React, useState} from 'react'
//react-bootstrap
import { Modal } from 'react-bootstrap';

const ModalUI = ({ size, onHide, show, title, children }) => {
    //const [lgShow, setLgShow] = useState(false);
 
    return (
        <>
          <Modal
            size={size}
            onHide={onHide}
            show={show}
          >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
          </Modal>  
        </>
    )
}

export default ModalUI
