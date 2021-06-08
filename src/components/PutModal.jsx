import { Modal, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import EditComment from './EditComment'

const PutModal = (props)=> {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" id="editBtn" onClick={handleShow} className="mr-3">
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>  {props.bookName}</Modal.Title>
          </Modal.Header>
       
          <Row className="justify-content-center mt-3">
          <Col xs={12} md={6}>
             <img className="img-fluid" style={{height:'250px'}} src={props['image']} alt={props['bookName']}/>
         </Col>
         <Col xs={12} md={6}>
         <EditComment elementId={props.elementId} commentId={props.commentId} comment={props.comment} rate={props.rate}/>
         </Col>
            </Row> 
        </Modal>
      </>
    );
  }

  export default PutModal
  