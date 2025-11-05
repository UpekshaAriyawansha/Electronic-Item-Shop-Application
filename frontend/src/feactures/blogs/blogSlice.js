import { createAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { BlogService } from "./blogService";
import { toast } from "react-toastify";

export const getallBlogs = createAsyncThunk ("blogs/get", async (thunkAPI) => {
    try{
        return await BlogService.getBlogs();
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

export const getaBlog = createAsyncThunk ("blog/get", async (id, thunkAPI) => {
    try{
        return await BlogService.getBlog(id);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    blog: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const blogSlice = createSlice({
    name: "blog",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { builder
        
        .addCase(getallBlogs.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getallBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.blog = action.payload;
        })
        .addCase(getallBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        })
        
        .addCase(getaBlog.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getaBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.singleBlog = action.payload;
        })
        .addCase(getaBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
        });
        
    }
})

export default blogSlice.reducer;