import { createAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";


export const registerUser = createAsyncThunk ("auth/register", async (userData, thunkAPI) => {
    try{
        return await authService.register(userData)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const loginUser = createAsyncThunk ("auth/login", async (userData, thunkAPI) => {
    try{
        return await authService.login(userData)
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getUserProductWishlist = createAsyncThunk ("user/wishlist", async (thunkAPI) => {
    try{
        return await authService.getUserWishlist();
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})


export const addProductToCart = createAsyncThunk ("user/cart/add", async (cartData, thunkAPI) => {
    try{
        return await authService.addToCart(cartData);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getUserCart = createAsyncThunk ("user/cart/get", async (thunkAPI) => {
    try{
        return await authService.getCart();
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const removeCartProduct = createAsyncThunk ("user/cart/product/delete", async (cartItemId,thunkAPI) => {
    try{
        return await authService.removeProductFromCart(cartItemId);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const updateCartProduct = createAsyncThunk ("user/cart/product/update", async (cartDetail,thunkAPI) => {
    try{
        return await authService.updateProductFromCart(cartDetail);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const createAnOrder = createAsyncThunk ("user/cart/create-order", async (cartDetail,thunkAPI) => {
    try{
        return await authService.createOrder(cartDetail);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getUserOrder = createAsyncThunk ("user/orders/get", async (thunkAPI) => {
    try{
        return await authService.getUserOrders();
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const getCustomerfromLocalStorage = localStorage.getItem('customer')
? JSON.parse(localStorage.getItem
    ('customer')) : null;


const initialState = {
    user: getCustomerfromLocalStorage,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { builder
        
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.createdUser = action.payload;
            if (state.isSuccess === true){
                toast.info('User registered successfully');
            }
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true){
                toast.error(action.error);
            }
        })
        
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.user = action.payload;
            if (state.isSuccess === true){
                localStorage.setItem('token', action.payload.token);
                toast.info('User logged in successfully');
            }
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if (state.isError === true){
                toast.error(action.error);
            }
        })
        
        .addCase(getUserProductWishlist.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserProductWishlist.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.wishlist = action.payload;
        })
        .addCase(getUserProductWishlist.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
        .addCase(addProductToCart.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addProductToCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.cartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product added to Cart")
            }
        })
        .addCase(addProductToCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
        .addCase(getUserCart.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.productCart = action.payload;
            // if(state.isSuccess){
            //     toast.success("Product added to Cart")
            // }
        })
        .addCase(getUserCart.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
        .addCase(removeCartProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(removeCartProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.deleteCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Deleted From Cart Successfully!")
            }
        })
        .addCase(removeCartProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess===false){
                toast.error("Something went wrong!")
            }
        })
        
        .addCase(updateCartProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateCartProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.updatedCartProduct = action.payload;
            if(state.isSuccess){
                toast.success("Product Update From Cart Successfully!")
            }
        })
        .addCase(updateCartProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess===false){
                toast.error("Something went wrong!")
            }
        })
        
        .addCase(createAnOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createAnOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.orderdProduct = action.payload;
            if(state.isSuccess){
                toast.success("Ordered Successfully!")
            }
        })
        .addCase(createAnOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isSuccess===false){
                toast.error("Something went wrong!")
            }
        })
        
        .addCase(getUserOrder.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserOrder.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.getOrderdProduct = action.payload;
        })
        .addCase(getUserOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });  
    }
})

export default authSlice.reducer;

