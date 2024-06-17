import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'
const UserAllOrderItem = ({orderItem}) => {
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    return (
        <div className="user-order mt-2">
            <Row>
                <div className="py-2 order-title">طلب رقم #{orderItem.id}</div>
                <div className="py-2 order-title"> تم بتاريخ {formatDate(orderItem.createdAt)}</div>
            </Row>
            {
                orderItem.cartItems ? ( orderItem.cartItems.map((item , index)=>{
                    return   <UserAllOrderCard key={index} item={item}/>
                })) : null
            }
          
       
            <Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex">
                    <div>
                        <div className="d-inline"> التوصيل</div>
                        <div className="d-inline mx-2 stat">{orderItem.isDeliver === true ? 'تم التوصيل' : "لم يتم التوصيل"}</div>
                    </div>
                    <div>
                        <div className="d-inline">الدفع</div>
                        <div className="d-inline mx-2 stat">{orderItem.isPaid === true ? 'تم الدفع' : "لم يتم الدفع"}</div>
                    </div>
                    <div>
                        <div className="d-inline">طريقه الدفع</div>
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
    )
}

export default UserAllOrderItem
