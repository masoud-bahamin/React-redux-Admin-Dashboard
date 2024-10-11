import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../Types";
import Swal from "sweetalert2";


const baseUrl = 'https://dummyjson.com/users'


export const getUsers = createAsyncThunk(
    "getUser",
    async () => {
        try {
            const data = await fetch(baseUrl).then(res => res.json())
            return data.users
        } catch (error) {
            console.log("catch error on store/Users", error);
            return []
        }
    })

    export const getUserPagination = createAsyncThunk("getUserPage",
        async (page: number = 1) => {
            try {
                const res = await fetch(`https://dummyjson.com/users?limit=10&skip=${page}`)
                const data = await res.json()
                return data.users
            } catch (error) {
                console.log("catch error on store/users", error);
                return []
            }
        }
    )

export const getSingelUser = createAsyncThunk(
    "getSigelUser",
    async (id: string) => {
        try {
            const data = await fetch(`${baseUrl}/${id}`).then(res => res.json())
            return data
        } catch (error) {
            console.log("catch error on store/Users", error);
            return null
        }

    })

export const createAsyncUser = createAsyncThunk("createUser",
    async (User: UserType) => {
        try {
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(User)
            })
            return User
        } catch (error) {
            console.log("catch error on store/Users", error);
            return User
        }

    }
)

export const deleteAsyncUser = createAsyncThunk("deleteUser",
    async (id: number) => {
        try {
            await fetch(`${baseUrl}/${id}`, {
                method: "DELETE",
            })
            return id
        } catch (error) {
            console.log("catch error on store/Users", error);
            return id
        }

    }
)

export const editAsyncUser = createAsyncThunk("editUser",
    async (User: UserType) => {
        try {
            await fetch(`${baseUrl}/${User.id}`, {
                method: "PUT",
                body: JSON.stringify(User)
            })
            return User
        } catch (error) {
            console.log("catch error on store/Users", error);
            return User
        }

    }
)

const initialState: {
    Users: UserType[],
    isLoading: boolean,
    isSuccess: boolean,
    error: string,
    singleUser: null | UserType,
    paginationData:UserType[],
} = {
    Users: [],
    isLoading: false,
    isSuccess: false,
    error: "",
    singleUser: null,
    paginationData : []
}

const slice = createSlice({
    name: "UserS",
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.Users = [...state.Users, action.payload]
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state) => {
            state.isLoading = true;
            state.isSuccess = false;
        })
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.Users = action.payload;
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getUsers.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = "There is an error"
        })
        builder.addCase(createAsyncUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(createAsyncUser.fulfilled, (state, action) => {
            state.Users = [...state.Users, action.payload]
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Created successfully"
            })
        })
        builder.addCase(createAsyncUser.rejected, (state) => {
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
        builder.addCase(deleteAsyncUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteAsyncUser.fulfilled, (state, action) => {
            const filterArray = state.Users.filter(i => i.id !== action.payload)
            state.Users = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "Deleted successfully"
            })
        })
        builder.addCase(deleteAsyncUser.rejected, (state) => {
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


        builder.addCase(editAsyncUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(editAsyncUser.fulfilled, (state, action) => {
            const filterArray = state.Users.map(i => i.id === action.payload.id ? action.payload : i)
            state.Users = filterArray
            state.isLoading = false;
            state.isSuccess = true;
            Swal.fire({
                background: "#222",
                color: "#fff",
                icon: "success",
                text: "edited successfully"
            })
        })
        builder.addCase(editAsyncUser.rejected, (state) => {
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


        builder.addCase(getSingelUser.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getSingelUser.fulfilled, (state, action) => {
            state.singleUser = action.payload
            state.isLoading = false;
            state.isSuccess = true;
        })
        builder.addCase(getSingelUser.rejected, (state) => {
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

        builder.addCase(getUserPagination.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getUserPagination.fulfilled, (state, action) => {
            state.isLoading = false;
            state.paginationData = action.payload;
            state.isSuccess = true;
        })
        builder.addCase(getUserPagination.rejected, (state) => {
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

export const { createUser } = slice.actions

export { slice }