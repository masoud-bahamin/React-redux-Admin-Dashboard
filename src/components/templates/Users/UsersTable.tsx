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
import { Eye, Pencil, Trash } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { DispatchType, StoreType } from "../../../store/store"
import { deleteSwal } from "../../../utils/SwalAction"
import { Link } from "react-router-dom"

import { Checkbox } from "../../ui/checkbox"
import { deleteAsyncUser, getUserPagination } from "../../../store/users"
import { useEffect, useState } from "react"
import { SkeletonList } from "../../mudules/SkeletonList"


export default function UsersTable() {
    const [page, setPage] = useState(1)
    const dispatch: DispatchType = useDispatch()

    const { paginationData, isLoading } = useSelector((store: StoreType) => store.users)

    useEffect(() => {
        dispatch(getUserPagination(0))
    }, [])

    const pageHandler = (page: number) => {
        setPage(page)
        dispatch(getUserPagination((page * 10) - 10))
    }

    const deleteUser = (id: number) => {
        deleteSwal().then(res => {
            if (res.isConfirmed) {
                dispatch(deleteAsyncUser(id))
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
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow className="dark:border-dark-600 bg-dark-900">
                            <TableHead colSpan={2} className=""><Checkbox /></TableHead>
                            <TableHead colSpan={2} className="">Image</TableHead>
                            <TableHead colSpan={2} className="">Name</TableHead>
                            <TableHead colSpan={2} className="">Email</TableHead>
                            <TableHead colSpan={2} className="">Role</TableHead>
                            <TableHead colSpan={2} className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[...paginationData].reverse().map((user) => (
                            <TableRow className="dark:border-dark-600" key={user.id}>
                                <TableCell colSpan={2}>{user.id} - <Checkbox /></TableCell>
                                <TableCell colSpan={2} className="font-medium py-5">
                                    <img className="h-10" src={user.image} />
                                </TableCell>
                                <TableCell colSpan={2} className="">{user.firstName}</TableCell>
                                <TableCell colSpan={2} className="">{user.email}</TableCell>
                                <TableCell colSpan={2}>{user.role}</TableCell>

                                <TableCell colSpan={2} className="">
                                    <div className="flex justify-center gap-2">
                                        <Button className="" size={"sm"} variant={"secondary"}>
                                            <Eye size={16} strokeWidth={1} />
                                        </Button>

                                        <Button size={"sm"} variant={"edit"}>
                                            <Link to={`/user-edit/${user.id}`}>
                                                <Pencil size={16} strokeWidth={1} />
                                            </Link>
                                        </Button>
                                        <Button onClick={() => deleteUser(user.id)} size={"sm"} variant={"delete"}>
                                            <Trash size={16} strokeWidth={1} />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter className="dark:border-dark-600">
                        <TableRow className="bg-dark-900">
                            <TableCell colSpan={8}>
                                Showing 5 of 90,521 orders
                            </TableCell>
                            <TableCell colSpan={4} className="text-right">
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
                                            <PaginationLink onClick={() => pageHandler(21)} href="#" size={"sm"} isActive={page === 21}>4</PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationNext className={page === 21 ? "hidden" : ""} onClick={() => pageHandler(page + 1)} href="#" size={"sm"} />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>)}
        </>
    )
}
