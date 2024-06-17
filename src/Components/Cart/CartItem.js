import React from 'react'
import { Button, Col,Modal,Row } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import mobile from '../../images/mobile.png'
import "react-image-gallery/styles/css/image-gallery.css";
import DeleteCardHook from '../../hook/card/delete-card-hook'

const CartItem = ({items , key}) => {
  const [ ,handleClose , handleShow , handelDeleteItem , show ,itemCount , onChangeCount , handleUpdateItem] = DeleteCardHook(items);
  console.log(items.product.imageCover);
  return (
    <Col key={key} xs="12" className="cart-item-body my-2 d-flex px-2">

        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
            </Modal.Header>
            <Modal.Body><div className='font'>هل انت متأكد من حذف المنتج من العربه</div></Modal.Body>
            <Modal.Footer>
                <Button className='font' variant="success" onClick={handleClose}>
                    تراجع
                </Button>
                <Button className='font' variant="dark" onClick={handelDeleteItem}>
                    حذف
                </Button>
            </Modal.Footer>
        </Modal>
        <div>
         <img width="160px" height="197px" src={items.product ? items.product.imageCover : mobile} alt="products image" />
        </div>
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{items.product.category.name}</div>
              <div onClick={handleShow} className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">تعديل</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {items.product.title}
              </div>
              <div className="d-inline pt-2 cat-rate me-2">{items.product.ratingsAverage || 0}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">{items.product.brand ? items.product.brand.name : ""}</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex">
              {
                items.color === "" ? null :( <div className="color ms-2 border" style={{ backgroundColor:items.color }}> </div> ) 
              }
            </Col>
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text  d-inline">الكميه</div>
                <input
                  value={itemCount}
                  onChange={onChangeCount}
                  className="mx-2 "
                 type='number'
                  style={{ width: "60px", height: "40px" }}
                />
                <button onClick={handleUpdateItem} className='btn btn-dark'>تطبيق</button>
              </div>
              <div className="d-inline pt-2 barnd-text">{items.price}جنية</div>
            </Col>
          </Row>
        </div>
      </Col>
    )
}

export default CartItem
