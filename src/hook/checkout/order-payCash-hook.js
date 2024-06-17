import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getOneUserAddress} from './../../redux/actions/userAddressesAction';
import GetAllUserCardHook from '../card/get-all-user-card-hook';
import notify from '../useNotifaction';
import { createOrderCash } from '../../redux/actions/checkoutAction';
import { useNavigate } from 'react-router-dom';

export default function OrderPayCashHook() {
    const [ ,  ,  ,  ,  , cartID] = GetAllUserCardHook();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(true);
    const [loadingCreate, setLoadingCreate] = useState(true);
    const [addressDetails , setAddressDetails] = useState([]);

    const handleChoseAddress = (e)=>{
        setAddressDetails([]);
        if(e.target.value != "0"){
            get(e.target.value);
        }
    }

    const get = async (id) => {
        setLoading(true)
        await dispatch(getOneUserAddress(id))
        setLoading(false)
    }

    // get address details for user 
    const resAddress = useSelector(state => state.userAddressesReducer.oneAddress)
    useEffect(() => {
        if (loading === false) {
            if (resAddress && resAddress.status === "success") {
                setAddressDetails(resAddress.data)
            }else{
                setAddressDetails([]);
            }
        }
    }, [loading])

    // when user click pay
    const handleOrderCash = async ()=>{
        if(cartID === '0'){
            notify('من فضلك اضف منتجات الي العربه ','warn')
            return;
        }

        if (addressDetails.length <= 0) {
            notify("من فضلك اختر عنوان اولا", "warn")
            return
        }

        setLoadingCreate(true)
            await dispatch(createOrderCash(cartID , {
                shippingAddress:{
                    details: addressDetails.alias,
                    phone: addressDetails.phone,
                    city: "",
                    postalCode: ""
                    }
                 }))
        setLoadingCreate(false);
    }

    // get response for create order cash  
    const resOrderCash = useSelector(state => state.checkoutReducer.createOrderCash)
    useEffect(() => {
        if (loadingCreate === false) {
            if(resOrderCash && resOrderCash.status === 201){
                console.log(resOrderCash.status)
                notify('تم انشاء طلبك بنجاح','success');
                setTimeout(()=>{
                    navigate('/user/allorders')
                },1500)
            }else{
                notify('فشل ف اكمال الطلب حاول مره اخري','warn')
            }
        }
    },[loadingCreate]);

   return [handleChoseAddress , addressDetails , handleOrderCash];
}
