import * as yup from "yup"


export const signinSchima = yup.object({
    email : yup.string().email().min(4).max(15).required(),
    password : yup.string().min(3).max(15).required(),
})

export const ProductSchema = yup.object({
    "title": yup.string().required().min(5),
    "price": yup.number().required(),
   })