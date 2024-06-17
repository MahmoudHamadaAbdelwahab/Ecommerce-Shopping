import deleteicon from '../../images/delete.png'
import editicon from '../../images/edit.png'
import DeleteBrandHook from '../../hook/brand/delete-brand-hook';
import { Row, Col, Modal, Button } from 'react-bootstrap';

export default function AdminAllBrandCard({key,item}) {
    const [show, handleClose, handleShow, handelDelete] =  DeleteBrandHook(item);
  return (
    <div key={key} >
        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
            </Modal.Header>
            <Modal.Body><div className='font'>هل انتا متاكد من عملية الحذف الماركه</div></Modal.Body>
            <Modal.Footer>
                <Button className='font' variant="success" onClick={handleClose}>
                    تراجع
                </Button>
                <Button className='font' variant="dark" onClick={handelDelete}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>

      <Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex justify-content-center">
                    <div className="p-2">اسم الماركه: {item.name}</div>
                    <img src={item.image} style={{width:'150px',height:'150px'}}/>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end" >
                    <div className="d-flex p-2">
                        <div onClick={handleShow} className="d-flex mx-2" style={{cursor:'pointer'}}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={editicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> تعديل</p>
                        </div>
                        <div onClick={handleShow} className="d-flex" style={{cursor:'pointer'}}>
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> ازاله</p>
                        </div>
                    </div>
                </Col>
            </Row>
    </div >
  )
}
