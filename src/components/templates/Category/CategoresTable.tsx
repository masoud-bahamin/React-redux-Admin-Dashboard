import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../components/ui/table"

import { CategoryType } from "../../../Types"
import { Button } from "../../ui/button"
import { Eye, Pencil,  Trash } from "lucide-react"
import { useDispatch } from "react-redux"
import { DispatchType } from "../../../store/store"
import { deleteSwal } from "../../../utils/SwalAction"
import { Link } from "react-router-dom"
import { deleteAsyncCategory } from "../../../store/category"


export default function CategoresTable({ categories }: { categories: CategoryType[] }) {

    const dispatch: DispatchType = useDispatch()

    const deletecategory = (id: string) => {
        deleteSwal().then(res => {
            if (res.isConfirmed) {
                dispatch(deleteAsyncCategory(id))
            }
        })
    }

    return (
        <Table>
            <TableHeader>
                <TableRow className="dark:border-dark-600 bg-dark-900">
                    <TableHead colSpan={2} className="">Id</TableHead>
                    <TableHead colSpan={2} className="">Category Image</TableHead>
                    <TableHead colSpan={2} className="">Category Name</TableHead>
                    <TableHead colSpan={2} className="">Category Slug</TableHead>
                    <TableHead colSpan={2} className="text-center">Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {[...categories].reverse().map((category , index) => (
                    <TableRow className="dark:border-dark-600" key={category.name}>
                        <TableCell colSpan={2}>{index}</TableCell>
                        <TableCell colSpan={2} className="font-medium py-5">
                            <img className="h-10" src={"https://techzaa.in/larkon/admin/assets/images/product/p-1.png"} />
                        </TableCell>
                        <TableCell colSpan={2} className="">{category.name}</TableCell>
                        <TableCell colSpan={2}>{category.url}</TableCell>
                    
                        <TableCell colSpan={2} className="">
                            <div className="flex justify-center gap-2">
                                        <Button className="" size={"sm"} variant={"secondary"}>
                                            <Eye size={16} strokeWidth={1} />
                                        </Button>
                              
                                <Button size={"sm"} variant={"edit"}>
                                    <Link to={`/category-edit/${category.slug}`}>
                                        <Pencil size={16} strokeWidth={1} />
                                    </Link>
                                </Button>
                                <Button onClick={() => deletecategory(category.name)} size={"sm"} variant={"delete"}>
                                    <Trash size={16} strokeWidth={1} />
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            
        </Table>
    )
}
