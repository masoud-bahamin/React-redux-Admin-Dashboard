import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../Types";
import Swal from "sweetalert2";


const baseUrl = "https://dummyjson.com/products"


export const getproducts = createAsyncThunk(
    "getproduct",
    async () => {
        try {
            const data = await fetch(baseUrl).then(res => res.json())
            return data.products
        } catch (error) {
            console.log("catch error on store/products", error);
            return []
        }
    })

export const getProductPagination = createAsyncThunk("getProductPage",
    async (page: number = 1) => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page}`)
            const data = await res.json()
            return data.products
        } catch (error) {
            console.log("catch error on store/products", error);
            return []
        }

    }
)

export const getSingelproduct = createAsyncThunk(
    "getSigelProduct",
    async (id: string) => {
        try {
            const data = await fetch(`${baseUrl}/${id}`).then(res => res.json())
            return data
        } catch (error) {
            console.log("catch error on store/products", error);
            return null
        }

    })

export const createAsyncProduct = createAsyncThunk("createProduct",
    async (product: ProductType) => {
        try {
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(product)
            })
            return product
        } catch (error) {
            console.log("catch error on store/products", error);
            return product
        }

    }
)

export const deleteAsyncProduct = createAsyncThunk("deleteProduct",
    async (id: number) => {
        try {
            await fetch(`${baseUrl}/${id}`, {
                method: "DELETE",
            })
            return id
        } catch (error) {
            console.log("catch error on store/products", error);
            return id
        }

    }
)

export const editAsyncProduct = createAsyncThunk("editProduct",
    async (product: ProductType) => {
        try {
            await fetch(`${baseUrl}/${product.id}`, {
                method: "PUT",
                body: JSON.stringify(product)
            })
            return product
        } catch (error) {
            console.log("catch error on store/products", error);
            return product
        }

    }
)

const initialState: {
    products: ProductType[],
    isLoading: boolean,
    isSuccess: boolean,
    error: string,
    singleProduct: null | ProductType,
    paginationData: ProductType[]
} = {
    products: [],
    isLoading: false,
    isSuccess: false,
    error: "",
    singleProduct: null,
    paginationData: []
}

const slice = createSlice({
    name: "PRODUCTS",
    initialState,
    reducers: {
        createProduct: (state, action) => {
            state.products = [...state.products, action.payload]
        }
    },
    extraReducers: builder => {
        builder.addCase(getproducts.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        builder.addCase(getproducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getproducts.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = "There is an error"
        })
        builder.addCase(createAsyncProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createAsyncProduct.fulfilled, (state, action) => {
            state.products = [...state.products, action.payload]
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Created successfully"
            })
        })
        builder.addCase(createAsyncProduct.rejected, (state) => {
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
        builder.addCase(deleteAsyncProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteAsyncProduct.fulfilled, (state, action) => {
            const filterArray = state.products.filter(i => i.id !== action.payload)
            state.products = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Deleted successfully"
            })
        })
        builder.addCase(deleteAsyncProduct.rejected, (state) => {
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


        builder.addCase(editAsyncProduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(editAsyncProduct.fulfilled, (state, action) => {
            const filterArray = state.products.map(i => i.id === action.payload.id ? action.payload : i)
            state.products = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "edited successfully"
            })
        })
        builder.addCase(editAsyncProduct.rejected, (state) => {
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


        builder.addCase(getSingelproduct.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getSingelproduct.fulfilled, (state, action) => {
            state.singleProduct = action.payload
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getSingelproduct.rejected, (state) => {
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
        builder.addCase(getProductPagination.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProductPagination.fulfilled, (state, action) => {
            state.isLoading = false;
            state.paginationData = action.payload;
            state.isSuccess = true;
        })
        builder.addCase(getProductPagination.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.paginationData = []
            state.error = "Error in fetch data"
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "error",
                text: "unsuccessfull"
            })
        })
    }
})

export const { createProduct } = slice.actions

export { slice }