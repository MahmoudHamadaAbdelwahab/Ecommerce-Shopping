import { Col, Container, Row } from 'react-bootstrap'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Pagination from '../../Components/Uitily/Pagination'
import { useParams } from 'react-router-dom';
import ViewAllProductBrandHook from '../../hook/products/view-all-product-brand-hook';

export default function ProductByBrand() {
    const {id} = useParams();    
    const [item , pagination , onPress] = ViewAllProductBrandHook(id);
    let pageCount = 0;
    if(pagination)
         pageCount = pagination;
   
  return (
    <div style={{ minHeight: '670px' }}>
    <Container>
        <Row className='d-flex flex-row'>
            <Col sm="12">
                <CardProductsContainer products={item} title="" btntitle="" />
            </Col>
        </Row>
        <Pagination pageCount={pageCount} onPress={onPress} />
    </Container>
    </div>
  )
}
