import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import CardProductsContainer from './../Products/CardProductsContainer';
import { useDispatch, useSelector } from 'react-redux';
import { getProductWishList } from '../../redux/actions/wishListAction';
const UserFavoriteProduct = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
                await dispatch(getProductWishList())
                setLoading(false)
            }
        fetchData();
    }, [])

    const res = useSelector(state => state.addToWishListReducer.allWishList);
    useEffect(() => {
        if (loading === false) {
            if (res){
                console.log(res.data)
                setItems(res.data)
            }else{
                console.log('error res in UserFavoriteProduct file')
            }
        }
    }, [loading]);

    return (
        <div>
            <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
                {
                    items.length <= 0 ? (<h6>لا يوجد منتدات مفضله حاليا</h6>) : <CardProductsContainer products={items} title="" btntitle="" />
                }
            </Row>
        </div>
    )
}

export default UserFavoriteProduct
