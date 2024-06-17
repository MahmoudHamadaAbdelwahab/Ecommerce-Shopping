import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon, getAllCoupon } from '../../redux/actions/couponAction';
import notify from './../useNotifaction';

const AddCouponHook = () => {
    const dispatch = useDispatch();
    const [couponName,setCouponName] = useState('');
    const [couponDate,setCouponDate] = useState('');
    const [couponValue,setCouponValue] = useState(0);
    const [loading,setLoading] = useState(true);

    //to change name state
    const onChangeName = (event) => {
        event.persist();
        setCouponName(event.target.value)
    }

    //to change name state
    const onChangeDate = (event) => {
        event.persist();
        setCouponDate(event.target.value)
    }
    
    //to change name state
    const onChangeValue = (event) => {
         event.persist();
        setCouponValue(event.target.value)
    }

    const onSubmit = async () => {
        if(couponName === "" || couponDate === "" || couponValue <= 0){
            notify("من فضلك اكمل البيانات","warn");
            return;
        }
        setLoading(true);
        await dispatch(addCoupon({
            "name": couponName,
            "expire": couponDate,
            "discount": couponValue
        }));
        setLoading(false);
    }
    
    const res = useSelector(state => state.couponReducer.addCoupon);
    useEffect(()=>{
        if(loading === false ){
            if(res && res.status === 201){
                notify("تم اضافه الكوبون بنجاح","success")
                // it's empty the data after sent data to data base 
                setCouponName(''); setCouponDate(''); setCouponValue(0);
                window.location.reload(false)
            }else if(res && res.state === 400){
                 notify("هذا الكوبون مكرر من قبل","error")
            }else if(res && res.state === 403){
                notify("غير مسموح لك بالاضافه","error")
           }
        }
    },[loading]);

    
    useEffect(()=>{
        const gitData = async ()=>{
            await dispatch(getAllCoupon());
        }
        gitData();
    },[])
   
    const allCoupon = useSelector(state => state.couponReducer.allCoupon);

    let coupons = [];
    try{
        if(allCoupon && allCoupon.data.length >= 1 ){
            coupons = allCoupon.data;
        }
    }catch (e){
    }

    return [couponName, couponDate, couponValue, onChangeName, onChangeDate, onChangeValue, onSubmit , coupons];
}

export default AddCouponHook