import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductByBrand } from '../../redux/actions/productsAction';

export default function ViewAllProductBrandHook(catID) {
    let limit = 8;
    const dispatch = useDispatch();

    const getProduct = async ()=>{
        await dispatch(getAllProductByBrand('',limit,catID))
    };

    const onPress = async (page)=>{
        await dispatch(getAllProductByBrand(page,limit,catID))
    };

    useEffect(()=>{
        getProduct();
    },[]);

    const allProBrand = useSelector(state=>state.allproducts.allProductCat)
    let item = [] , pagination = [];
    try {
        if (allProBrand.data)
            item = allProBrand.data
    } catch (e) { }

    try{
        if(allProBrand.paginationResult)
            pagination = allProBrand.paginationResult
        else
            pagination = [];

    }catch(e){}
    return [item , pagination , onPress]
}
