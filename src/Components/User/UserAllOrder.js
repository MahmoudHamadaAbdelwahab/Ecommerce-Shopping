import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'
import Pagination from '../Uitily/Pagination'
import UserGetAllOrderHook from '../../hook/user/user-get-all-order-hook';

const UserAllOrder = () => {
    const  [userName , result , paginate , orderData , onPress] = UserGetAllOrderHook();
        console.log(orderData.data)
        console.log(paginate.numberOfPages)    

    return (
        <div>
        <div className="admin-content-text pb-4">اهلا {userName}</div>
        <div className="admin-content-text pb-4">عدد الطلبات #{result}</div>
        <Row className='justify-content-between'>
            {
                orderData.length >= 1 ? (
                    orderData.map((item , index)=>{
                        return  <UserAllOrderItem key={index} orderItem={item}/>
                    })
                ) : <h3>لا يوجد طلبات لحد الان</h3>
            }
            {
                paginate.numberOfPages >= 2 ? (
                    <Pagination pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0} onPress={onPress}/>         
                ) :null
            }
        </Row>
        </div>
    )
}

export default UserAllOrder
