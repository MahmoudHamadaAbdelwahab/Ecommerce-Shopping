import { useState, useEffect } from 'react'
import ViewSearchProductsHook from './../products/view-search-products-hook';

const NavbarSearchHook = () => {
    // There is an error here. The data I am looking for should appear
    const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();
    const [searchWord, setSearchWord] = useState('');
    const [loading, setLoading] = useState(false);

    //when user type search word
    const OnChangeSearch = (e) => {
         setLoading(true)
            localStorage.setItem("searchWord", e.target.value)
            setSearchWord(e.target.value)
            const path = window.location.pathname;
            if (path != "/products") {
                window.location.href = "/products"
            }
        setLoading(false);
    }

    useEffect(() => {
            setTimeout(() => {
                getProduct();
            }, 1000);
    }, [searchWord])

    return [OnChangeSearch, searchWord]
}

export default NavbarSearchHook