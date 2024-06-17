import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetalis from '../../Components/Products/ProductDetalis'
import RateContainer from '../../Components/Rate/RateContainer'
import ViewProductsDetalisHook from './../../hook/products/view-products-detalis-hook';
const ProductDetalisPage = () => {
    const {id} = useParams();
    const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
        if (prod)
          var proItem = prod.slice(0, 4);

        if (item) { 
            var rateAvg = item.quantity;
            var rateQty = item.ratingsQuantity;
        }
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <ProductDetalis />
                <RateContainer rateAvg={rateAvg} rateQty={rateQty} />
                <CardProductsContainer products={proItem} title="منتجات قد تعجبك" />
            </Container>
        </div>
    )
}

export default ProductDetalisPage
