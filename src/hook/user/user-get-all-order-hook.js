
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { orderAction } from '../../redux/actions/orderAction';
export default function UserGetAllOrderHook() {
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(true);
    const [result , setResult] = useState(0);
    const [paginate , setPaginate] = useState({});
    const [orderData , setOrderData] = useState({});
    const user = JSON.parse(localStorage.getItem('user'))
    let userName = '';

    if(user != null)
        userName = user.name;

    const getData = async ()=>{
        setLoading(true);
        await dispatch(orderAction('',5))
        setLoading(false)
    }    
    useEffect(()=>{
        getData();
    },[])

    const onPress = async (page)=>{
        setLoading(true);
        await dispatch(orderAction(page,5))
        setLoading(false)
    }

    // get address details for user 
    const resAllOrder = useSelector(state => state.OrderReducer.getAllOrders)
    useEffect(() => {
        if (loading === false) {
            if(resAllOrder){
                console.log(resAllOrder)
                setResult(resAllOrder.result)
            }
        
            if(resAllOrder.paginationResult)
                setPaginate(resAllOrder.paginationResult)

            if(resAllOrder.data){
                console.log(resAllOrder.data)
                setOrderData(resAllOrder.data)
            }

        }
    }, [loading])

    return [userName , result , paginate , orderData , onPress]
}
