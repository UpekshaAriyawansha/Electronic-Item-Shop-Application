import {configureStore } from "@reduxjs/toolkit";
import authReducer from "../feactures/user/userSlice";
import productReducer from "../feactures/products/productSlice";
import blogReducer from "../feactures/blogs/blogSlice";
import contactReducer from "../feactures/contact/contactSlice";

export const store = configureStore  ({
    reducer:{
        auth: authReducer,
        product: productReducer,
        blog: blogReducer,
        contact: contactReducer,
    },
});