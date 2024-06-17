import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderDeliver, changeOrderPay} from '../../redux/actions/orderAction';
import notify from '../../hook/useNotifaction'

export default function ChangeOrderStatusHook(id){
    const dispatch = useDispatch()
    const [loading , setLoading] = useState(true);
    const [loadingDeliver , setLoadingDeliver] = useState(true);
    const [pay , setPay] = useState(0);
    const [deliver, setDeliver] = useState(0);

    const changePayOrder = async ()=>{
        if(pay === 'true'){
            setLoading(true);
            await dispatch(changeOrderPay(id))
            setLoading(false)
        }else if(pay === '0'){
            notify('من فضلك اضف قيمه','warn')
        }
    }    

    const changeDeliverOrder = async ()=>{
        if(deliver === 'true'){
            setLoadingDeliver(true);
            await dispatch(changeOrderDeliver(id))
            setLoadingDeliver(false)
        }else if(deliver === '0'){
            notify('من فضلك اضف قيمه','warn')
        }
    }    

    
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "numeric", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    const onChangePaid = (e)=>{
        setPay(e.target.value)
    }

    // get order pay change 
    const changePar = useSelector(state => state.OrderReducer.changeOrderPay)
    useEffect(() => {
        if (loading === false) {
             if(changePar && changePar.status === 200){
                 console.log(changePar)
                 notify('تم تغيير الحاله الدفع بنجاح','success')
                 setTimeout(()=>{
                    window.location.reload(false)
                 },1000)
             }else{
                notify('هناك مشكله في حاله الدفع','error')
             }
            }
    }, [loading])

    const onChangeDeliver = (e)=>{
        setDeliver(e.target.value)
    }
    // get order deliver change
    const changeDeli = useSelector(state => state.OrderReducer.changeOrderDeliver)
    useEffect(() => {
        if (loading === false) {
             if(changeDeli){
                 console.log(changeDeli)
                 notify('تم تغيير الحاله التوصيل بنجاح','success')
                 setTimeout(()=>{
                    window.location.reload(false)
                 },1000)
             }else{
                notify('هناك مشكله في حاله التوصيل','error')
             }
            }
    }, [loadingDeliver])

    return [changePayOrder , formatDate , onChangePaid , onChangeDeliver , changeDeliverOrder]
}
