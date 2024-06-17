import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const AdminAllOrdersItem = ({orderItem , key}) => {
    console.log(orderItem);
    return (
        <Col sm="12">
            <Link
                to={`/admin/orders/${orderItem._id}`}
                className="cart-item-body-admin my-2 px-1 d-flex px-2"
                style={{ textDecoration: "none" }}>
                <div className="w-100">
                    <Row className="justify-content-between">
                        <Col sm="12" className=" d-flex flex-row justify-content-between">
                            <div className="d-inline pt-2 cat-text">طلب رقم #{orderItem.id}</div>
                            <div className="d-inline pt-2 cat-text">ازاله</div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-2">
                        <Col sm="12" className=" d-flex flex-row justify-content-start">
                            <div className="d-inline pt-2 cat-title">
                                {orderItem.user.name || ''}
                            </div>
                            <div  className="d-inline pt-2 cat-rate me-2">{orderItem.user.email || ''}</div>
                        </Col>
                    </Row>

                    <Row className="d-flex justify-content-between">
                        <Col xs="6" className="d-flex">
                            <div>
                                <div style={{color:'black'}} className="d-inline"> التوصيل</div>
                                <div className="d-inline mx-2 stat">{orderItem.isDeliver === true ? 'تم التوصيل' : "لم يتم التوصيل"}</div>
                            </div>
                            <div>
                                <div style={{color:'black'}} className="d-inline">الدفع</div>
                                <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'تم الدفع' : "لم يتم الدفع"}</div>
                            </div>
                            <div>
                                <div style={{color:'black'}} className="d-inline">طريقه الدفع</div>
                                <div className="d-inline mx-2 stat">{orderItem.paymentMethodType === 'cash' ? 'كاش' : "بطاقه ائتمانية"}</div>
                            </div>
                        </Col>
                        <Col xs="6" className="d-flex justify-content-end">
                            <div>
                                <div className="barnd-text">{orderItem.totalOrderPrice} جنيه</div>
                            </div>
                        </Col>
                  </Row>
                </div>
            </Link>
        </Col>
    )
}

export default AdminAllOrdersItem
