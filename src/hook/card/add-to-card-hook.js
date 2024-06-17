import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { addProductToCard } from '../../redux/actions/cartAction';
import notify from '../../hook/useNotifaction'

export default function AddToCardHook(id, item) {
    const dispatch = useDispatch();
    const [indexColor , setIndexColor] = useState('');
    const [colorText , setColorText] = useState('');
    const [loading , setLoading] = useState(true);
  
    const colorClick = (index , color)=>{
      setIndexColor(index);
      setColorText(color);
      console.log(index,color)
    }
    // add to product in cart
    const addToCard = async ()=>{
      console.log(item)
      if(item.availableColors.length >= 1){
        if(colorText === ''){
          notify('من فضلك اختر لون للمنتج','warn');
          return
        }
      }else{
        setColorText('');
      }
        setLoading(true)
        await dispatch(addProductToCard({
            "productId": id,
            "color": colorText,
        }));
        setLoading(false)
    }
  const res = useSelector(state => state.cartReducer.addToCart)
    useEffect(()=>{
        if(loading === false){
            if(res && res.status === 200){
              notify('قد تمت الاضافه الي العربه بنجاح','success');
              setTimeout(()=>{
                window.location.reload(false);
              },1000)
            }
            else{
              notify('قم بتسجيل الدخول اولا','warn');
            }
          }
    },[loading])


  return [indexColor,colorText,colorClick,addToCard]
}
