import React, { useEffect, useState } from 'react'
import { Container,Row ,Col} from 'react-bootstrap'
import AllCategoryHook from '../../hook/category/all-category-page-hook';
import { Link } from 'react-router-dom';

const CategoryHeader = () => {
  const [category,,,] = AllCategoryHook();
  const [itemCat , setItemCat] = useState([]);
  useEffect(()=>{
    if(category)
      setItemCat(category.data);
  },[category])

    return (
        <div className="cat-header">
      <Container>
        <Row>
          <Col className="d-flex justify-content-start py-2 flex-wrap">
            <div className="cat-text-header ">الكل</div>
              {
                  itemCat ? itemCat.map((item , index)=>{
                    return (
                      <Link to={`/products/category/${item._id}`} style={{textDecoration:'none'}}>
                        <div key={index} className="cat-text-header ">{item.name.slice(5)}</div>
                      </Link>
                    )
                  }):null
              }
            <Link to="/allcategory" style={{textDecoration:"none"}}>
              <div className="cat-text-header">المزيد</div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default CategoryHeader
