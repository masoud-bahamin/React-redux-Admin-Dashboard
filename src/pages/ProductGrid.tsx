import { useDispatch, useSelector } from "react-redux"
import { DispatchType, StoreType } from "../store/store"
import {  getproducts } from "../store/products"
import ProductCard from "../components/templates/Products/ProductCard"
import { useEffect } from "react"
import { Button } from "../components/ui/button"
import { Filter, Plus, Settings, StarIcon } from "lucide-react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import { Checkbox } from "../components/ui/checkbox"
import { SkeletonCard } from "../components/mudules/SkeletonCard"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../components/ui/pagination"

export default function ProductsGrid() {

    const dispatch: DispatchType = useDispatch()

    const {products , isLoading} = useSelector((store: StoreType) => store.products)

    useEffect(() => {
        if (!products.length) {
            dispatch(getproducts())
        }
    }, [])


    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">
            <div className=" lg:bg-dark-800 rounded-xl lg:p-6">
                <div className=" flex flex-wrap gap-2 items-center">
                    <p>All Product Grid</p>
                    <div className="ml-auto space-y-2">
                        <Button variant="secondary" className="mr-4">
                            <Settings size={16} className="mr-2" />
                            More Setting
                        </Button>
                        <Button variant="secondary" className="mr-4">
                            <Filter size={16} className="mr-2" />
                            Filters
                        </Button>
                        <Button variant="outline" className="mr-4">
                            <Plus size={16} className="mr-2" />
                            Add Product
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap space-y-5 lg:space-y-0 mt-8">
                <div className="w-full lg:w-[24%]">
                    <div className="hidden lg:block bg-dark-800 p-4 rounded-xl">
                        <Accordion type="multiple" defaultValue={["category", "price", "Gender", "Rating"]} className="w-full">
                            <AccordionItem value="category" className='border-b-0 mb-8'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Category
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms" defaultChecked />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            All Categories
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms2" />
                                        <label
                                            htmlFor="terms2"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Fashion Men , Women & Kid's
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms3" />
                                        <label
                                            htmlFor="terms3"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Eye Ware & Sunglass
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms4" />
                                        <label
                                            htmlFor="terms4"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Watches
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms5" />
                                        <label
                                            htmlFor="terms5"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Electronics Items
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms6" />
                                        <label
                                            htmlFor="terms6"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Furniture
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms6" />
                                        <label
                                            htmlFor="terms6"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Headphones
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms7" />
                                        <label
                                            htmlFor="terms7"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Beauty & Health

                                        </label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="price" className='border-b-0 mb-8'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Price
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms20" defaultChecked />
                                        <label
                                            htmlFor="terms20"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            All Price
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms21" />
                                        <label
                                            htmlFor="terms21"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Below $200 (145)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms22" />
                                        <label
                                            htmlFor="terms22"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $200 - $500 (1,885)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms23" />
                                        <label
                                            htmlFor="terms23"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $500 - $800 (2,276)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms24" />
                                        <label
                                            htmlFor="terms24"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $800 - $1000 (12,676)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms25" />
                                        <label
                                            htmlFor="terms25"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $1000 - $1100 (13,123)
                                        </label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Gender" className='border-b-0 mb-8'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Gender
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms30" />
                                        <label
                                            htmlFor="terms30"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Men (1,834)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms31" defaultChecked />
                                        <label
                                            htmlFor="terms31"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Women (2,890)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms32" />
                                        <label
                                            htmlFor="terms32"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Kid's (1,231)
                                        </label>
                                    </div>

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Rating" className='border-b-0 mb-8'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Rating
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms40" />
                                        <label
                                            htmlFor="terms40"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            1 <StarIcon className=" inline-block mb-1" size={16} />  & Above (437)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms41" />
                                        <label
                                            htmlFor="terms41"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            2 <StarIcon className=" inline-block mb-1" size={16} />  & Above (657)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms42" defaultChecked />
                                        <label
                                            htmlFor="terms42"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            3 <StarIcon className=" inline-block mb-1" size={16} />  & Above (1,897)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms43" />
                                        <label
                                            htmlFor="terms43"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            4 <StarIcon className=" inline-block mb-1" size={16} />  & Above (3,571)
                                        </label>
                                    </div>

                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                    {/* mobil filter */}
                    <div className="lg:hidden  w-full">
                        <Accordion type="single" collapsible className="">
                            <AccordionItem value="category" className='border-b-0 mb-2'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Category
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms" defaultChecked />
                                        <label
                                            htmlFor="terms"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            All Categories
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms2" />
                                        <label
                                            htmlFor="terms2"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Fashion Men , Women & Kid's
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms3" />
                                        <label
                                            htmlFor="terms3"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Eye Ware & Sunglass
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms4" />
                                        <label
                                            htmlFor="terms4"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Watches
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms5" />
                                        <label
                                            htmlFor="terms5"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Electronics Items
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms6" />
                                        <label
                                            htmlFor="terms6"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Furniture
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms6" />
                                        <label
                                            htmlFor="terms6"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Headphones
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms7" />
                                        <label
                                            htmlFor="terms7"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Beauty & Health

                                        </label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="price" className='border-b-0 mb-2'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Price
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms20" defaultChecked />
                                        <label
                                            htmlFor="terms20"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            All Price
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms21" />
                                        <label
                                            htmlFor="terms21"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Below $200 (145)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms22" />
                                        <label
                                            htmlFor="terms22"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $200 - $500 (1,885)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms23" />
                                        <label
                                            htmlFor="terms23"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $500 - $800 (2,276)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms24" />
                                        <label
                                            htmlFor="terms24"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $800 - $1000 (12,676)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms25" />
                                        <label
                                            htmlFor="terms25"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            $1000 - $1100 (13,123)
                                        </label>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Gender" className='border-b-0 mb-2'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Gender
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms30" />
                                        <label
                                            htmlFor="terms30"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Men (1,834)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms31" defaultChecked />
                                        <label
                                            htmlFor="terms31"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Women (2,890)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms32" />
                                        <label
                                            htmlFor="terms32"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            Kid's (1,231)
                                        </label>
                                    </div>

                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="Rating" className='border-b-0 mb-2'>
                                <AccordionTrigger className='bg-dark-700 p-3 rounded-lg mt-0.5 text-lg dark:hover:bg-gray-700'>
                                    Rating
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 text-gray-300">
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms40" />
                                        <label
                                            htmlFor="terms40"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            1 <StarIcon className=" inline-block mb-1" size={16} />  & Above (437)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms41" />
                                        <label
                                            htmlFor="terms41"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            2 <StarIcon className=" inline-block mb-1" size={16} />  & Above (657)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms42" defaultChecked />
                                        <label
                                            htmlFor="terms42"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            3 <StarIcon className=" inline-block mb-1" size={16} />  & Above (1,897)
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-2 mt-4">
                                        <Checkbox id="terms43" />
                                        <label
                                            htmlFor="terms43"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            4 <StarIcon className=" inline-block mb-1" size={16} />  & Above (3,571)
                                        </label>
                                    </div>

                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </div>
                <div className="lg:w-[76%]" >
                    {isLoading ? (
                        <div className="flex flex-wrap gap-8 p-8">
                            <SkeletonCard />
                            <SkeletonCard />
                            <SkeletonCard />
                        </div>
                    ) : (
                        <div className="pl-4 grid gap-4 lg:grid-cols-3 xl:grid-cols-4">
                            {[...products].reverse().map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}

                        </div>)}
                    <Pagination className="mt-8">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" size={"sm"} />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" size={"sm"}>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" size={"sm"} isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" size={"sm"}>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" size={"sm"} />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </main>
    )
}