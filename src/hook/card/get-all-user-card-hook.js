import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { getAllUserCardItems } from '../../redux/actions/cartAction';

export default function GetAllUserCardHook() {
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true);
    const [itemNum,setItemNum] = useState(0);
    const [cartItem,setCartItem] = useState([]);
    const [cartID,setCartID] = useState('0');
    const [couponName,setCouponName] = useState('');
    const [totalCartPrice,setTotalCartPrice] = useState(0);
    const [totalCartPriceAfterDiscount,setTotalCartPriceAfterDiscount] = useState(0);

    useEffect(()=>{
        const get = async ()=>{
            setLoading(true)
            await dispatch(getAllUserCardItems())
            setLoading(false)
        }
        get();
    },[]);

    const res = useSelector(state => state.cartReducer.getAllUserCard);
    useEffect(()=>{
        if(loading === false)
            if(res && res.status === 'success'){
                setItemNum(res.numOfCartItems);
                setCartItem(res.data.products);
                setTotalCartPrice(res.data.totalCartPrice);
                setCartID(res.data._id);
                if(res.data.coupon){
                    console.log(res.data)
                    setCouponName(res.data.coupon)
                }else{
                    setCouponName('')
                }
                if(res.data.totalAfterDiscount){
                    setTotalCartPriceAfterDiscount(res.data.coupon)
                }else{
                    setTotalCartPriceAfterDiscount('')
                }
            }else{
                setCartID('0')
                setItemNum(0);
                setCartItem([]);
                setTotalCartPrice(0);
                setCouponName('');
                setTotalCartPriceAfterDiscount('')
            }
         
    },[loading])

  return [itemNum , cartItem , totalCartPrice , couponName , totalCartPriceAfterDiscount , cartID];
}
