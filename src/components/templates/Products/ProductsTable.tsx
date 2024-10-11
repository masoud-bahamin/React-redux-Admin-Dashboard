import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../../components/ui/pagination"
import { Button } from "../../ui/button"
import { Eye, Pencil, Star, Trash } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { DispatchType, StoreType } from "../../../store/store"
import { deleteAsyncProduct, getProductPagination } from "../../../store/products"
import { deleteSwal } from "../../../utils/SwalAction"
import { Link } from "react-router-dom"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../../components/ui/dialog"
import Rating from "./Rating";
import { useEffect, useState } from "react"
import { SkeletonList } from "../../mudules/SkeletonList"

export function ProductsTable() {
    const [page, setPage] = useState(1)
    const dispatch: DispatchType = useDispatch()

    const { paginationData, isLoading } = useSelector((store: StoreType) => store.products)

    const pageHandler = (page: number) => {
        setPage(page)
        dispatch(getProductPagination((page * 10) - 10))
    }

    useEffect(() => {
        if (!paginationData.length) {
            dispatch(getProductPagination(0))
        }
    }, [])

    const deleteproduct = (id: number) => {
        deleteSwal().then(res => {
            if (res.isConfirmed) {
                dispatch(deleteAsyncProduct(id))
            }
        })
    }

    return (
        <>
            {isLoading ? (
                <div className="py-4 space-y-4">
                    <SkeletonList />
                    <SkeletonList />
                    <SkeletonList />
                    <SkeletonList />
                </div>
            ) : (<>

                <Table>
                    <TableHeader>
                        <TableRow className="dark:border-dark-600 bg-dark-900">
                            <TableHead className="w-12">Id</TableHead>
                            <TableHead className="w-48">Product Image</TableHead>
                            <TableHead className="w-[500px]">Product Name</TableHead>
                            <TableHead className="w-48">Category</TableHead>
                            <TableHead className="w-40">Rating</TableHead>
                            <TableHead className="w-24">Price</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginationData.slice().reverse().map((product) => (
                            <TableRow className="dark:border-dark-600" key={product.id}>
                                <TableCell>{product.id}</TableCell>
                                <TableCell className="font-medium py-5">
                                    <img className="h-10" src={product.thumbnail} />
                                </TableCell>
                                <TableCell className="">{product.title}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>
                                    <div className="flex items-center"><Star className="mr-1" size={16} color="#83580b" /> {product.rating} {" "} (36) </div>
                                </TableCell>
                                <TableCell className="">{product.price}</TableCell>
                                <TableCell className="">
                                    <div className="flex justify-center gap-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button className="" size={"sm"} variant={"secondary"}>
                                                    <Eye size={16} strokeWidth={1} />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[725px] dark:text-gray-200">
                                                <DialogHeader className="">
                                                    <DialogTitle className="dark:text-gray-200">{product.title}</DialogTitle>
                                                </DialogHeader>
                                                <div className="py-4 flex flex-wrap gap-y-5 dark:text-gray-200">
                                                    <div className="md:w-1/2 p-2.5">
                                                        <img className="" src={product.thumbnail} alt="" />
                                                    </div>
                                                    <div className="md:w-1/2 p-2.5 space-y-2.5">
                                                        <DialogDescription>
                                                            {product.description}
                                                        </DialogDescription>
                                                        <Rating rate={product.rating} count={74} />
                                                        <div className="">
                                                            Price :  {product.price}
                                                        </div>
                                                        <div className="">
                                                            Rating : {product.rating}
                                                        </div>
                                                    </div>
                                                </div>
                                                <DialogFooter>

                                                    <Button variant={"edit"} type="submit">
                                                        <Link to={`/product-edit/${product.id}`}><Pencil size={16} strokeWidth={1} /></Link>
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Button size={"sm"} variant={"edit"}>
                                            <Link to={`/product-edit/${product.id}`}>
                                                <Pencil size={16} strokeWidth={1} />
                                            </Link>
                                        </Button>
                                        <Button onClick={() => deleteproduct(product.id)} size={"sm"} variant={"delete"}>
                                            <Trash size={16} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className="dark:border-dark-600">
                        <TableRow className="bg-dark-900">
                            <TableCell colSpan={6}>
                                Showing 5 of 90,521 orders
                            </TableCell>
                            <TableCell colSpan={6} className="text-right">
                                <Pagination className="mt-4">
                                    <PaginationContent>
                                        <PaginationItem className={page === 1 ? "hidden" : ""}>
                                            <PaginationPrevious onClick={() => pageHandler(page - 1)} href="#" size={"sm"} />
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => pageHandler(1)} href="#" size={"sm"} isActive={page === 1}>1</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => pageHandler(2)} href="#" size={"sm"} isActive={page === 2}>
                                                2
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={() => pageHandler(3)} href="#" size={"sm"} isActive={page === 3}>3</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext className={page === 3 ? "hidden" : ""} onClick={() => pageHandler(page + 1)} href="#" size={"sm"} />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </TableCell>
                        </TableRow>
                    </TableFooter>

                </Table>
            </>)}
        </>
    )
}
