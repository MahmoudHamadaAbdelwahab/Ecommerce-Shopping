import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductByCategory } from '../../redux/actions/productsAction';

export default function ViewAllProductCategoryHook(brandID) {
    let limit = 8;
    const dispatch = useDispatch();

    const getProduct = async ()=>{
        await dispatch(getAllProductByCategory('',limit,brandID))
    };

    const onPress = async (page)=>{
        await dispatch(getAllProductByCategory(page,limit,brandID))
    };

    useEffect(()=>{
        getProduct();
    },[]);

    const allProCat = useSelector(state=>state.allproducts.allProductCat)
    let item = [] , pagination = [];
    try {
        if (allProCat.data)
            item = allProCat.data
    } catch (e) { }

    try{
        if(allProCat.paginationResult)
            pagination = allProCat.paginationResult
        else
            pagination = [];

    }catch(e){}
    return [item , pagination , onPress]
}
