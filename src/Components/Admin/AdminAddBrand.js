import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import HomeCategoryHook from '../../hook/category/home-category-hook';
import AdminAllBrandCard from './AdminAllBrandCard';
import AddBrandHook from './../../hook/brand/add-brand-hook';
const AdminAddBrand = () => {
    const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] =AddBrandHook();
    const [category, , ] =HomeCategoryHook();
    let allCategory = [];
    try{
        if(category && category.data.length >=1 ){
            allCategory = category.data;
        }
    }catch(e){}
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <div>
                        <label for="upload-photo">
                            <img
                                src={img}
                                alt="fzx"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input
                        type="text"
                        value={name}
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                        onChange={onChangeName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="">
                    {
                        allCategory ? (allCategory.map((item , index)=>{
                            return <AdminAllBrandCard key={index} item={item}/>
                        }) ) : <h6>لا يوجد ماركات حتي الان </h6>
                    }
                </Col>
            </Row>
            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddBrand
