import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "../Types";
import Swal from "sweetalert2";


const baseUrl = 'https://dummyjson.com/products'


export const getCategories = createAsyncThunk(
    "getCategories",
    async () => {
        try {
            const data = await fetch(`${baseUrl}/categories`).then(res => res.json())
            return data
        } catch (error) {
            console.log("catch error on store/Categories", error);
            return []
        }
    })

export const getSingelCategory = createAsyncThunk(
    "getSigelCategory",
    async (name: string) => {
        try {
            const data = await fetch(`${baseUrl}/category/${name}`).then(res => res.json())
            return data
        } catch (error) {
            console.log("catch error on store/Categories", error);
            return null
        }

    })

export const createAsyncCategory = createAsyncThunk("createCategory",
    async (Category: CategoryType) => {
        try {
            await fetch(`${baseUrl}/add`, {
                method: "POST",
                body: JSON.stringify(Category)
            })
            return Category
        } catch (error) {
            console.log("catch error on store/Categories", error);
            return Category
        }

    }
)

export const deleteAsyncCategory = createAsyncThunk("deleteCategory",
    async (id: string) => {
        try {
            await fetch(`${baseUrl}/${id}`, {
                method: "DELETE",
            })
            return id
        } catch (error) {
            console.log("catch error on store/Categories", error);
            return id
        }

    }
)

export const editAsyncCategory = createAsyncThunk("editCategory",
    async (Category: CategoryType) => {
        try {
            await fetch(`${baseUrl}/${Category.name}`, {
                method: "PUT",
                body: JSON.stringify(Category)
            })
            return Category
        } catch (error) {
            console.log("catch error on store/Categories", error);
            return Category
        }

    }
)

const initialState: {
    Categories: CategoryType[],
    isLoading: boolean,
    isSuccess: boolean,
    error: string,
    singleCategory: null | CategoryType
} = {
    Categories: [],
    isLoading: false,
    isSuccess: false,
    error: "",
    singleCategory: null
}

const slice = createSlice({
    name: "Categories",
    initialState,
    reducers: {
        createCategory: (state, action) => {
            state.Categories = [...state.Categories, action.payload]
        }
    },
    extraReducers: builder => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.Categories = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = "There is an error"
        })
        builder.addCase(createAsyncCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createAsyncCategory.fulfilled, (state, action) => {
            state.Categories = [...state.Categories, action.payload]
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Created successfully"
            })
        })
        builder.addCase(createAsyncCategory.rejected, (state) => {
            state.isSuccess = false;
            state.error = "There is an error";
            state.isLoading = false;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "error",
                text: "unsuccessfull"
            })
        })
        builder.addCase(deleteAsyncCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteAsyncCategory.fulfilled, (state, action) => {
            const filterArray = state.Categories.filter(i => i.name !== action.payload)
            state.Categories = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Deleted successfully"
            })
        })
        builder.addCase(deleteAsyncCategory.rejected, (state) => {
            state.isSuccess = false;
            state.error = "There is an error";
            state.isLoading = false;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "error",
                text: "unsuccessfull"
            })
        })


        builder.addCase(editAsyncCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(editAsyncCategory.fulfilled, (state, action) => {
            const filterArray = state.Categories.map(i => i.name === action.payload.name ? action.payload : i)
            state.Categories = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "edited successfully"
            })
        })
        builder.addCase(editAsyncCategory.rejected, (state) => {
            state.isSuccess = false;
            state.error = "There is an error";
            state.isLoading = false;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "error",
                text: "unsuccessfull"
            })
        })


        builder.addCase(getSingelCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getSingelCategory.fulfilled, (state, action) => {
            state.singleCategory = action.payload
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getSingelCategory.rejected, (state) => {
            state.isSuccess = false;
            state.error = "There is an error";
            state.isLoading = false;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "error",
                text: "unsuccessfull"
            })
        })
    }
})

export const { createCategory } = slice.actions

export { slice }