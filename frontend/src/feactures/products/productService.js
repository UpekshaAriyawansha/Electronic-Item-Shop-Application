import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";


const getProducts = async (userData) => {
    const response = await axios.get (`${base_url}product/`, userData);
    if(response.data){
        return response.data;
    }
};

const getSingleProduct = async (id) => {
    const response = await axios.get (`${base_url}product/${id}`);
    if(response.data){
        return response.data;
    }
};

const addToWishlist = async (productId) => {
    const response = await axios.get (`${base_url}product/wishlist/`, {productId}, config);
    if(response.data){
        return response.data;
    }
};

export const ProductService = {
    getProducts,
    addToWishlist,
    getSingleProduct,
}