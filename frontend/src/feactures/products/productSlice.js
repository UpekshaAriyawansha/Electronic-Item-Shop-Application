import { createAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { ProductService } from "./productService";
import { toast } from "react-toastify";

export const getallProducts = createAsyncThunk ("product/get", async (thunkAPI) => {
    try{
        return await ProductService.getProducts();
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const addWishlist = createAsyncThunk ("product/wishlist", async (productId, thunkAPI) => {
    try{
        return await ProductService.addToWishlist(productId);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getsingleProduct = createAsyncThunk ("product-single/get", async (id, thunkAPI) => {
    try{
        return await ProductService.getSingleProduct(id);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    product: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { builder
        
        .addCase(getallProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getallProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.product = action.payload;
        })
        .addCase(getallProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })

        .addCase(addWishlist.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.Wishlist = action.payload;
            state.message = "Product added to wishlist!"
        })
        .addCase(addWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })

        .addCase(getsingleProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getsingleProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleproduct = action.payload;
            state.message = "Product Fetched Successfully!"
        })
        .addCase(getsingleProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
        
    }
})

export default productSlice.reducer;