import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import notify from '../useNotifaction'
import { applyCouponCart } from '../../redux/actions/cartAction';
import { useNavigate } from 'react-router-dom'

export default function ApplyCouponHook(cartItems) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [couponNum , setCouponNum] = useState('');
    const [loading , setLoading] = useState(true);

    const onChangeCoupon = (e)=>{
      setCouponNum(e)
    }

    const handleSubmitCoupon = async ()=>{
      if(couponNum === ''){
        notify('من فضلك ادخل الكوبون','warn');
        return
      }

      await dispatch(applyCouponCart({
        "couponName":couponNum,
      }));
      setLoading(false);
    }

  const res = useSelector(state => state.cartReducer.applyCouponCart)
    useEffect(()=>{
        if(loading === false){
          if(res){
            console.log(res)
              notify('تمت اضافه الكوبون بنجاح','success')
              setTimeout(()=>{
                window.location.reload(false);
              },1000)
            }else{
            notify('هذا الكوبون غير صحيح' , 'warn');
          }
        }
    },[loading])

    const handleCheckOut = ()=>{
      if(cartItems.length >= 1)
          navigate("/order/paymethoud")         
      else
          notify("من فضلك اضف منتجات للعربه الاول","warn")   
  };

  return [couponNum , onChangeCoupon , handleSubmitCoupon , handleCheckOut]
}
