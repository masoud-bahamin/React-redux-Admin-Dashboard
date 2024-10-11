import { useDispatch, useSelector } from "react-redux"
import { DispatchType, StoreType } from "../store/store"
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
import { useState } from "react"
import Loader from "../components/mudules/Loader"
import { createAsyncCategory} from "../store/category"



export default function CategoryCreates() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")


    const dispatch: DispatchType = useDispatch()

    const { isLoading } = useSelector((store: StoreType) => store.categories)


    const editProduct = () => {
        if (title && slug) {
            dispatch(createAsyncCategory({
                "name": title,
                "slug": slug,
                url : ""
            }))
        }
    }

    if (isLoading) return <div className="flex pl-72 h-screen"><Loader /></div>

    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">

            <div className="flex flex-wrap gap-y-5 mt-8">
                <div className="w-full lg:w-[24%]">
                    <div className="bg-dark-800 p-5 rounded-xl space-y-5">
                        <div>
                            <img className="w-40 mx-auto mt-5" src="https://techzaa.in/larkon/admin/assets/images/product/p-1.png" alt="" />
                        </div>
                        <p className="text-lg font-medium line-clamp-2">{title || "Category Title"}</p>
                        <p>Created By: <span className="font-semibold ml-1 text-lg">Masoud Bahamin </span></p>
                        <p>Name: <span className="font-semibold ml-1 text-lg">{title || "Category Name"} </span></p>
                        <p>Slug: <span className="font-semibold ml-1 text-lg">{slug || "Category Slug"} </span></p>

                        <div className="flex gap-2">
                            <Button onClick={editProduct} variant={"outline"} >Save Category</Button>
                            <Button variant={"secondary"} >Cancel</Button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[76%] md:pl-5">
                    <div className="bg-dark-800 rounded-xl">
                        <p className="p-5 border-b border-dark-700">Change Category Photo</p>
                        <div className="p-5">
                            <input className="hidden" type="file" name="" id="input-file" />
                            <label htmlFor="input-file" className=" cursor-pointer rounded-xl p-5 border border-dashed dark:border-dark-500 flex flex-col gap-2 justify-center items-center h-64 w-full">
                                <CloudUpload className="text-gold-300" size={48} />
                                <p className="text-xl font-semibold">Drop your images here, or <span className="text-gold-300">click to browse</span></p>
                                <p className="text-sm">1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</p>
                            </label>
                        </div>
                    </div>
                    <div className=" mt-5">
                        <div className="">
                            <Formik
                                initialValues={{ title: "", slug: "", }}
                                onSubmit={(v) => {
                                    setSlug(v.slug)
                                    setTitle(v.title)
                                }}
                            >
                                {({ touched, errors, resetForm }) => (
                                    <Form >
                                        <div className="text-gray-300 bg-dark-800 rounded-xl pb-5">
                                            <p className="p-5 border-b  border-dark-700">Edit Vategory Information</p>
                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/2 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="name">Category Name:</label>
                                                    <Field
                                                        name="title"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="name"
                                                        placeholder="Name"
                                                    />
                                                    {touched.title && errors.title && <p className="mb-1 text-rose-400">{errors.title}</p>}
                                                </div>
                                                <div className="w-full md:w-1/2 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="category">Created By:</label>
                                                    <Select>
                                                        <SelectTrigger className="w-full border border-dark-600">
                                                            <SelectValue placeholder="Choose a creater" />
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
                                            
                                            <div className="w-full p-5">
                                                <label className="block mb-1 text-sm" htmlFor="desc">Description:</label>
                                                <textarea
                                                    rows={6}
                                                    name="desc"
                                                    className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                    id="desc"
                                                    placeholder="Short description about the Category"
                                                />
                                            </div>

                                            <div className="flex flex-wrap">
                                                <div className="w-full md:w-1/3 p-5">
                                                    <label className="block mb-1 text-sm" htmlFor="slug">Slug:</label>
                                                    <Field
                                                        name="slug"
                                                        className="w-full p-2 rounded-lg border border-dark-600 bg-transparent outline-none"
                                                        id="slug"
                                                        placeholder="slug"
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
                                        
                                        <div className="text-gray-300 bg-dark-800 rounded-xl mt-5 px-5 py-10">
                                            <div className="flex justify-end gap-5">
                                                <Button type="submit" variant={"outline"} >Create Category</Button>
                                                <Button onClick={() => resetForm()} variant={"secondary"} >Cancel</Button>
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