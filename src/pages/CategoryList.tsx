import { useDispatch, useSelector } from "react-redux"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../src/components/ui/select"
import { SkeletonList } from "../components/mudules/SkeletonList"
import CategoresTable from "../components/templates/Category/CategoresTable"
import CategoryBox from "../components/templates/Category/CategoryBox"
import { Button } from "../components/ui/button"
import { DispatchType, StoreType } from "../store/store"
import { useEffect } from "react"
import { getCategories } from "../store/category"
import Loader from "../components/mudules/Loader"


export default function CategoryList() {
    const categores = [
        {
            "slug": "beauty",
            "name": "Beauty",
            "url": "https://dummyjson.com/products/category/beauty"
        },
        {
            "slug": "fragrances",
            "name": "Fragrances",
            "url": "https://dummyjson.com/products/category/fragrances"
        },
        {
            "slug": "furniture",
            "name": "Furniture",
            "url": "https://dummyjson.com/products/category/furniture"
        },
        {
            "slug": "groceries",
            "name": "Groceries",
            "url": "https://dummyjson.com/products/category/groceries"
        },
        {
            "slug": "home-decoration",
            "name": "Home Decoration",
            "url": "https://dummyjson.com/products/category/home-decoration"
        },
        {
            "slug": "kitchen-accessories",
            "name": "Kitchen Accessories",
            "url": "https://dummyjson.com/products/category/kitchen-accessories"
        },
        {
            "slug": "laptops",
            "name": "Laptops",
            "url": "https://dummyjson.com/products/category/laptops"
        },
        {
            "slug": "mens-shirts",
            "name": "Mens Shirts",
            "url": "https://dummyjson.com/products/category/mens-shirts"
        },
        {
            "slug": "mens-shoes",
            "name": "Mens Shoes",
            "url": "https://dummyjson.com/products/category/mens-shoes"
        },
        {
            "slug": "mens-watches",
            "name": "Mens Watches",
            "url": "https://dummyjson.com/products/category/mens-watches"
        },
        {
            "slug": "mobile-accessories",
            "name": "Mobile Accessories",
            "url": "https://dummyjson.com/products/category/mobile-accessories"
        },
        {
            "slug": "motorcycle",
            "name": "Motorcycle",
            "url": "https://dummyjson.com/products/category/motorcycle"
        },
        {
            "slug": "skin-care",
            "name": "Skin Care",
            "url": "https://dummyjson.com/products/category/skin-care"
        },
        {
            "slug": "smartphones",
            "name": "Smartphones",
            "url": "https://dummyjson.com/products/category/smartphones"
        },
        {
            "slug": "sports-accessories",
            "name": "Sports Accessories",
            "url": "https://dummyjson.com/products/category/sports-accessories"
        },
        {
            "slug": "sunglasses",
            "name": "Sunglasses",
            "url": "https://dummyjson.com/products/category/sunglasses"
        },
        {
            "slug": "tablets",
            "name": "Tablets",
            "url": "https://dummyjson.com/products/category/tablets"
        },
        {
            "slug": "tops",
            "name": "Tops",
            "url": "https://dummyjson.com/products/category/tops"
        },
        {
            "slug": "vehicle",
            "name": "Vehicle",
            "url": "https://dummyjson.com/products/category/vehicle"
        },
        {
            "slug": "womens-bags",
            "name": "Womens Bags",
            "url": "https://dummyjson.com/products/category/womens-bags"
        },
        {
            "slug": "womens-dresses",
            "name": "Womens Dresses",
            "url": "https://dummyjson.com/products/category/womens-dresses"
        },
        {
            "slug": "womens-jewellery",
            "name": "Womens Jewellery",
            "url": "https://dummyjson.com/products/category/womens-jewellery"
        },
        {
            "slug": "womens-shoes",
            "name": "Womens Shoes",
            "url": "https://dummyjson.com/products/category/womens-shoes"
        },
        {
            "slug": "womens-watches",
            "name": "Womens Watches",
            "url": "https://dummyjson.com/products/category/womens-watches"
        }
    ]
    const dispatch: DispatchType = useDispatch()
    const { Categories, isLoading } = useSelector((store: StoreType) => store.categories)

    useEffect(() => {
        if (!Categories.length) {
            dispatch(getCategories())
        }

    }, [])

    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">

            {
                isLoading ? (
                   <div className="w-full flex justify-center py-6"> <Loader /></div>
                ) : (
                    <div className="flex gap-5 justify-between">
                        {
                            categores?.slice(0, 4).map(category => (
                                <CategoryBox key={category.name} name={category.name} />
                            ))
                        }
                    </div>
                )
            }
            <div className="p-5 bg-dark-800 rounded-xl mt-5">
                <div className="py-4 flex items-center">
                    <p>All Category List</p>
                    <Button variant="outline" className="ml-auto mr-4">Add Category</Button>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Download</SelectItem>
                                <SelectItem value="banana">Export</SelectItem>
                                <SelectItem value="blueberry">Import</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                {isLoading ? (
                    <div className="py-4 space-y-4">
                        <SkeletonList />
                        <SkeletonList />
                        <SkeletonList />
                        <SkeletonList />
                    </div>
                ) : (<CategoresTable categories={Categories} />)}

            </div>
        </main >
    )
}
