import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'
import UserGetAllOrderHook from '../../hook/user/user-get-all-order-hook';
import Pagination from '../Uitily/Pagination';

const AdminAllOrders = () => {
    const  [userName , result , paginate , orderData , onPress] = UserGetAllOrderHook();
    if(orderData)
        console.log(orderData)
    
    if(paginate)
        console.log(paginate)
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع الطلبات</div>
            <Row className='justify-content-start'>
                {
                 orderData.length >= 1 ? (
                    orderData.map((item , index)=>{
                        return  <AdminAllOrdersItem key={index} orderItem={item}/>
                    })
                ) : <h3>لا يوجد طلبات لحد الان</h3>
                }

                <Pagination pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} onPress={onPress}/>

            </Row>
        </div>
    )
}

export default AdminAllOrders
