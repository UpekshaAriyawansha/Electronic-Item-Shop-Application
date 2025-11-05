import { createAction, createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { ContactService } from "./contactService";
import { toast } from "react-toastify";

export const createQuiry = createAsyncThunk ("contact/post", async (contactData, thunkAPI) => {
    try{
        return await ContactService.postQuery(contactData);
    }catch(err){
        return thunkAPI.rejectWithValue(err)
    }
})

const initialState = {
    contact: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
}

export const contactSlice = createSlice({
    name: "contact",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => { builder
        
        .addCase(createQuiry.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(createQuiry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = true;
            state.contact = action.payload;
            if(state.isSuccess === true) {
                toast.success("Contact from Submitted Successfully")
            }
        })
        .addCase(createQuiry.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
            if(state.isError === true) {
                toast.success("Something went wrong")
            }
        });
        
    }
})

export default contactSlice.reducer;