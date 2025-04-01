import { Button, Modal, ModalProps } from "react-bootstrap";

interface ZoomInProps{
    show:{check:boolean,img:string},
    onHide:() => void
}
export default function ZoomInModal({show,onHide}:ZoomInProps){
    return(
        <Modal
        show={show.check}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <img src={show.img} alt="이미지"/>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}