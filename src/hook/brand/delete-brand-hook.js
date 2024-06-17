import { useState ,useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { deleteBrand } from '../../redux/actions/brandAction';
import notify from '../useNotifaction';

export default function DeleteBrandHook(item) {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false);
    const [show, setShowDelete] = useState(false);
    const handleClose = () => setShowDelete(false);
    const handleShow = () => setShowDelete(true);

    const handelDelete = async () => {
        setLoading(true)
        await dispatch(deleteBrand(item._id))
        setLoading(false)
        window.location.reload(false);
        handleClose();
    }
    
    // const res = useSelector(state => state.brandReducer.deleteBrand)
    // useEffect(() => {
    //     if (loading === false) {
    //         if (res === "") {
    //             console.log(res);
    //             notify("تم حذف الماركه بنجاح", "success")
    //             setTimeout(() => {
    //                 window.location.reload(false)
    //             }, 1500);
    //         }
    //         else
    //             notify("هناك مشكله فى عملية المسح", "error")
    //     }
    // }, [loading])
    return [show, handleClose, handleShow, handelDelete]
}
