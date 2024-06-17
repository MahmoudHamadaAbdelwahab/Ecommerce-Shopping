import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { clearAllCartItem, deleteCartItem, updateCartItem } from '../../redux/actions/cartAction';
import notify from '../../hook/useNotifaction'

export default function DeleteCardHook(items) {
    const dispatch = useDispatch();
    const [loading , setLoading] = useState(true);
    const [itemCount , setItemCount] = useState(0);
    // delete all items
    const handelDeleteCart = async ()=>{
            setLoading(true)
            await dispatch(clearAllCartItem());
            setLoading(false)
    }
    useEffect(()=>{
        if(items)
        setItemCount(items.count)
    },[])
    const onChangeCount = (e)=>{
        setItemCount(e.target.value)
    }
    // delete all cart items
    const res = useSelector(state => state.cartReducer.clearAllCard)
    useEffect(()=>{
        if(loading === false){
            if(res === ""){
                console.log(res)
                notify('تم الحذف بنجاح','success')
                setTimeout(()=>{
                    window.location.reload(false)
                },1000)
            }
          }
    },[loading]);
    
    // delete one cart in items
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handelDeleteItem = async () => {
        await dispatch(deleteCartItem(items._id))
        setShow(false);
        window.location.reload(false);
    }
    
    // update cart price 
    const handleUpdateItem = async ()=>{
        await dispatch(updateCartItem(items._id , {
            "count": itemCount,
        }))
    }

  return [handelDeleteCart ,handleClose , handleShow , handelDeleteItem , show , itemCount , onChangeCount , handleUpdateItem]
}
