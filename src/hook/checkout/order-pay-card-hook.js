import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GetAllUserCardHook from '../card/get-all-user-card-hook';
import notify from '../useNotifaction';
import { createOrderCard } from '../../redux/actions/checkoutAction';

export default function OrderPayCardHook(addressDetails) {
    const [ ,  ,  ,  ,  , cartID] = GetAllUserCardHook();
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(false);

    // when user click pay
    const handleOrderCard = async ()=>{
        if(cartID === '0'){
            notify('من فضلك اضف منتجات الي العربه ','warn')
            return;
        }

        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }

        setLoading(true)
            await dispatch(createOrderCard(cartID , {
                shippingAddress:{
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: ""
                    }
                 }))
        setLoading(false)
    }

    // get response for create order card 
    const resOrderCard = useSelector(state => state.checkoutReducer.createOrderCard)
    useEffect(() => {
        if (loading === false) {
            if(resOrderCard && resOrderCard.status === "success"){
                if(resOrderCard.session.url)
                    window.open(resOrderCard.session.url)
                // notify('تم انشاء طلبك بنجاح','success');
                // setTimeout(()=>{
                //     navigate('/user/allorders')
                // },1500)
            }}else{
            notify('فشل ف اكمال الطلب حاول مره اخري','warn')
            }
    }, [loading])

   return [handleOrderCard];
}
