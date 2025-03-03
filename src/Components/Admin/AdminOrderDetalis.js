import React from 'react'
import { Row,Col } from 'react-bootstrap'
// import CartItem from '../Cart/CartItem'
import { useParams } from 'react-router-dom'
import UserAllOrderItem from '../User/UserAllOrderItem'
import GetOrderDetailsHook from '../../hook/admin/get-order-details-hook'
import ChangeOrderStatusHook from '../../hook/admin/change-order-status-hook'
import { ToastContainer } from 'react-toastify';

const AdminOrderDetalis = () => {
    const {id} = useParams();
    const [orderData , cartItems] = GetOrderDetailsHook(id);
    // const [changePayOrder , formatDate , changePaid , changeDeliver] = ChangeOrderStatusHook(id);
    const [changePayOrder , formatDate , onChangePaid , onChangeDeliver , changeDeliverOrder] = ChangeOrderStatusHook(id);

    return (
        <div>
            <div className='admin-content-text'> تم بتاريخ {formatDate(orderData.createdAt)}</div>
            {/* <CartItem items={[]}/>
            <CartItem items={[]}/>
            <CartItem items={[]}/> */}
            <UserAllOrderItem orderItem={orderData} />
            <Row className="justify-content-center mt-4 user-data">
                <Col xs="12" className=" d-flex">
                    <div className="admin-content-text py-2">تفاصيل العميل</div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الاسم:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        {orderData.user.name ? orderData.user.name :''}
                    </div>
                </Col>

                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        {orderData.user.phone ? orderData.user.phone :''}
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                         {orderData.user.email ? orderData.user.email :''}
                    </div>
                </Col>
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        الايميل:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                        ahmed@gmail.com
                    </div>
                </Col>
                <div className="d-flex mt-2 justify-content-center">
                    <div>
                        <select
                            name="pay"
                            id="paid"
                            onChange={onChangePaid}
                            className="select input-form-area mt-1  text-center px-4 w-50">
                            <option value="0">حالة الدفع</option>
                            <option value="true">تم </option>
                            <option value="false">لم يتم </option>
                        </select>
                        <button onClick={changePayOrder} className="btn-a px-1 d-inline mx-1 ">حفظ </button>
                    </div>
    
                    <div>
                        <select
                            name="deliver"
                            id="deliver"
                            onChange={onChangeDeliver}
                            className="select input-form-area mt-1  text-center px-4 w-50">
                                <option value="0">حالة التواصل</option>
                                <option value="true">تم </option>
                                <option value="false">لم يتم </option>
                        </select>
                        <button onClick={changeDeliverOrder} className="btn-a px-1 d-inline mx-1 ">حفظ </button>
                    </div>

                </div>
                <ToastContainer/>
            </Row>
        </div>
    )
}

export default AdminOrderDetalis
