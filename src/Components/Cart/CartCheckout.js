import {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import DeleteCardHook from '../../hook/card/delete-card-hook'
import { ToastContainer } from 'react-toastify';
import ApplyCouponHook from '../../hook/card/apply-coupon-hook';

const CartCheckout = ({couponName , totalCartPrice , totalCartPriceAfterDiscount , cartItems}) => {
    
    const [handelDeleteCart ] = DeleteCardHook();
    const [couponNum , onChangeCoupon , handleSubmitCoupon , handleCheckOut] = ApplyCouponHook(cartItems);

    useEffect(()=>{
        if(couponName){
            onChangeCoupon(couponName)
        }
    },[couponName])

    return (
        <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        value={couponNum}
                        onChange={(e)=> onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button onClick={handleSubmitCoupon} className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    {
                        totalCartPriceAfterDiscount >= 1 ? `${totalCartPriceAfterDiscount} جنية` :   `${totalCartPrice} جنية` 
                    }
                </div>
                <button onClick={handleCheckOut} className="product-cart-add  d-inline "> اتمام الشراء</button>
                <button onClick={handelDeleteCart} className="product-cart-add w-100 px-2 my-2"> مسح العربه</button>
            </Col>
            <ToastContainer/>
        </Row>
    )
}

export default CartCheckout
