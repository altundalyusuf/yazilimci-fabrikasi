import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch((err) => { console.log("Err", err) })
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="ui grid container basic segment">
            <ProductComponent />
        </div>
    )
}

export default ProductListing;