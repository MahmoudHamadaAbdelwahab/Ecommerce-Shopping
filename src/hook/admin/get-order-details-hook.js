import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneOrder} from '../../redux/actions/orderAction';
export default function GetOrderDetailsHook(id){
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(true);
    const [orderData , setOrderData] = useState({});
    const [cartItems , setCartItems] = useState({});

    const getData = async ()=>{
        setLoading(true);
        await dispatch(getOneOrder(id))
        setLoading(false)
    }    
    useEffect(()=>{
        getData();
    },[])

    // get address details for user 
    const resOneOrder = useSelector(state => state.OrderReducer.getOneOrders)
    useEffect(() => {
        if (loading === false) {
            if(resOneOrder.data){
                setOrderData(resOneOrder.data)
                setCartItems(resOneOrder.data.cartItems)
            }
        }
    }, [loading])

    return [orderData , cartItems]
}
