import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'
import GetAllUserCardHook from '../../hook/card/get-all-user-card-hook'

const CartPage = () => {
    const [itemNum , cartItem , totalCartPrice , couponName , totalCartPriceAfterDiscount]= GetAllUserCardHook();
    return (
        <Container style={{ minHeight: '670px' }}>
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>
                <Col xs="12" md="9">
                    {
                        cartItem.length >= 1 ? (cartItem.map((item , index)=>{
                            return(<CartItem items={item} key={index}/>)
                        })
                        ) : <h6>لا توجد منتجات في العربه</h6>
                    }
                </Col>

                <Col xs="6" md="3">
                    <CartCheckout cartItems={cartItem} couponName={couponName} totalCartPriceAfterDiscount={totalCartPriceAfterDiscount} totalCartPrice={totalCartPrice}/>
                </Col>

            </Row>
        </Container>
    )
}

export default CartPage
