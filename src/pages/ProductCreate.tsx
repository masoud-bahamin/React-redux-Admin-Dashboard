import { useDispatch } from "react-redux"
import { DispatchType } from "../store/store"
import { createAsyncProduct } from "../store/products"
import { Button } from "../components/ui/button"
import { CloudUpload } from "lucide-react"
import { Field, Form, Formik } from "formik"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"
import { ProductSchema } from "../utils/validations"
import { useState } from "react"
import ProductSize from "../components/templates/Products/ProductSize"
import ProductColor from "../components/templates/Products/ProductColor"

export default function ProductCreate() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)

    const dispatch: DispatchType = useDispatch()

    const postProduct = () => {
        dispatch(createAsyncProduct({
            "id": 101,
            "title": title,
            "price": price,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": 4.3
        }))
    }

    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">

            <div className="flex flex-wrap gap-y-5 mt-8">
                <div className="w-full md:w-[24%]">
                    <div className="bg-dark-800 p-5 rounded-xl space-y-5">
                        <div>
                            <img className="w-64 mx-auto mt-5" src="https://techzaa.in/larkon/admin/assets/images/product/p-1.png" alt="" />
                        </div>
                        <p className="text-lg font-medium">{title || "Product Title"}</p>
                        <p>Price: <span className="font-semibold ml-1 text-lg">${price || "249"} </span></p>
                        <ProductSize />
                        <ProductColor />
                        <div className="flex gap-2">
                            <Button onClick={postProduct} variant={"outline"} >Save Product</Button>
                            <Button variant={"secondary"} >Cancel</Button>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[76%] md:pl-5">
                    <div className="bg-dark-800 rounded-xl">
                        <p className="p-5 border-b border-dark-700">Add Product Photo</p>
                        <div className="p-5">
                            <input className="hidden" type="file" name="" id="input-file" />
                            <label htmlFor="input-file" className=" cursor-pointer p-5 rounded-xl border border-dashed dark:border-dark-500 flex flex-col gap-2 justify-center items-center h-64 w-full">
                                <CloudUpload className="text-gold-300" size={48} />
                                <p className="text-xl font-semibold">Drop your images here, or <span className="text-gold-300">click to browse</span></p>
                                <p className="text-sm">1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                            </label>
                        </div>
                    </div>
                    <div className=" mt-5">
                        <div className="">
                            <Formik
                                initialValues={{ title: "", price: "", }}
                                onSubmit={(v) => {
                                    setPrice(+v.price)
                                    setTitle(v.title)
                                }}
                                validationSchema={ProductSchema}
                            >
                                {({ touched, errors }) => (
                                    <Form >
                                        <div className="text-gray-300 bg-dark-800 rounded-xl pb-5">
                                            <p className="p-5 border-b  border-dark-700">Product Information</p>
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/2 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="name">Product Name:</label>
                                                    <Field
                                                        name="title"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="name"
                                                        placeholder="Name"
                                                    />
                                                    {touched.title && errors.title && <p className="mb-1 text-rose-400">{errors.title}</p>}
                                                </div>
                                                <div className="w-full md:w-1/2 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="category">Product Category:</label>
                                                    <Select>
                                                        <SelectTrigger className="w-full border border-dark-600">
                                                            <SelectValue placeholder="Choose a categores" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="apple">Fashions</SelectItem>
                                                                <SelectItem value="banana">Phones</SelectItem>
                                                                <SelectItem value="blueberry">Clothes</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="brand">Brand:</label>
                                                    <Field
                                                        name="brand"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="brand"
                                                        placeholder="Brand"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/3 p-5 md:px-2.5">
                                                    <label className="block mb-1 text-sm" htmlFor="weight">Weight:</label>
                                                    <Field
                                                        name="weight"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="weight"
                                                        placeholder="In Kg"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="gender">Gender:</label>
                                                    <Select>
                                                        <SelectTrigger className="w-full border border-dark-600">
                                                            <SelectValue placeholder="Select Gender" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectGroup>
                                                                <SelectItem value="apple">Male</SelectItem>
                                                                <SelectItem value="banana">Female</SelectItem>
                                                            </SelectGroup>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="p-5 flex flex-wrap gap-y-5 md:space-x-5">
                                                <ProductSize />
                                                <ProductColor />
                                            </div>

                                            <div className="w-full p-5">
                                                <label className="block mb-1 text-sm" htmlFor="desc">Description:</label>
                                                <textarea
                                                    rows={6}
                                                    name="desc"
                                                    className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                    id="desc"
                                                    placeholder="Short description about the product"
                                                />
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="Tag Number">Tag Number:</label>
                                                    <Field
                                                        name="TagNumber"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Tag Number"
                                                        placeholder="#*****"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/3 p-5 md:px-2.5">
                                                    <label className="block mb-1 text-sm" htmlFor="Stock">Stock:</label>
                                                    <Field
                                                        name="Stock"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Stock"
                                                        placeholder="Quantity"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="Tag">Tag:</label>
                                                    <Field
                                                        name="Tag"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Tag"
                                                        placeholder="Tag"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-gray-300 bg-dark-800 rounded-xl mt-5 pb-5">
                                            <p className="p-5 border-b  border-dark-700">Pricing Details</p>
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="Price">Price:</label>
                                                    <Field
                                                        type="number"
                                                        name="price"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Price"
                                                        placeholder="0.00"
                                                    />
                                                    {touched.price && errors.price && <p className="mb-1 text-rose-400">{errors.price}</p>}
                                                </div>
                                                <div className="w-full md:w-1/3 p-5 md:px-2.5">
                                                    <label className="block mb-1 text-sm" htmlFor="Discount">Discount:</label>
                                                    <Field
                                                        name="Discount"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Discount"
                                                        placeholder="0.00"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="Tex">Tex:</label>
                                                    <Field
                                                        name="Tex"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="Tex"
                                                        placeholder="0.00"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="text-gray-300 bg-dark-800 rounded-xl mt-5 px-5 py-10">
                                            <div className="flex justify-end gap-5">
                                                <Button type="submit" variant={"outline"} >Create Product</Button>
                                                <Button variant={"secondary"} >Cancel</Button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}