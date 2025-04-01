import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalContentType{
    title:string,
    content:string,
    handleFunc:() => void
}


export default function YesOrNoModal({title,content,handleFunc}:ModalContentType) {
  const [show, setShow] = useState(false);

  const handleYes= () => {
    handleFunc()
    setShow(false);
  }
  const handleNo = () => {
    setShow(false);
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className='w-[5rem]'>
        {title}
      </Button>

      <Modal
        show={show}
        onHide={handleNo}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> {title} </Modal.Title>
        </Modal.Header>
        <Modal.Body> {content} </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={handleYes}>
                네
            </Button>
            <Button variant="secondary" onClick={handleNo}>
                아니요
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}