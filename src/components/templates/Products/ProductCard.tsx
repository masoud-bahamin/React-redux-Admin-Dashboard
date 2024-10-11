import { useDispatch } from "react-redux";
import { ProductType } from "../../../Types";
import { DispatchType } from "../../../store/store";
import { deleteAsyncProduct } from "../../../store/products";
import { Eye, Pencil, Trash } from "lucide-react";
import { Button } from "../../ui/button";
import { deleteSwal } from "../../../utils/SwalAction";
import { Link } from "react-router-dom";
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

export default function PostCard({ product }: { product: ProductType }) {

    const dispatch: DispatchType = useDispatch()

    const deleteProduct = (id: number) => {
        deleteSwal().then(res => {
            if (res.isConfirmed) {
                dispatch(deleteAsyncProduct(id))
            }
        })
    }

    return (
        <div className="max-w-xs bg-white rounded-lg shadow dark:bg-dark-800 ">
            <a className="" href="#">
                <img className="rounded-t-lg w-40 h-32 m-8 mx-auto" src={product.thumbnail} alt="" />
            </a>
            <div className="p-5 h-58">
                <a href="#">
                    <h5 className="mb-2 font-medium tracking-tight text-gray-900 dark:text-gray-200 line-clamp-1">
                        {product.title}
                    </h5>
                </a>
                <Rating rate={product.rating} count={69}/>
                <div className="flex justify-between py-2">
                    <span>${product.price}</span>
                    <span className="text-gray-400">30% off</span>
                </div>
                <div className="flex justify-center gap-4 py-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-1/3" size={"sm"} variant={"secondary"}>
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
                                    <Rating rate={product.rating} count={48}/>
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

                    <Button className="w-1/3" size={"sm"} variant={"edit"}>
                        <Link to={`/product-edit/${product.id}`}>
                            <Pencil size={16} strokeWidth={1} />
                        </Link>
                    </Button>
                    <Button className="w-1/3" onClick={() => deleteProduct(product.id)} size={"sm"} variant={"delete"}>
                        <Trash size={16} strokeWidth={1} />
                    </Button>
                </div>

            </div>
        </div>

    )
}