import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "../../components/ui/pagination"

const invoices = [
    {
        CustomerName:"Customer Name1",
        name: "Product1",
        invoice: "INV001",
        date: "29 April 2024",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        CustomerName:"Customer Name2",
        name: "Product2",
        invoice: "INV002",
        date: "28 April 2024",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        CustomerName:"Customer Name3",
        name: "Product3",
        invoice: "INV003",
        date: "27 April 2024",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        CustomerName:"Customer Name4",
        name: "Product4",
        invoice: "INV004",
        date: "25 April 2024",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },

]

export function OrdersTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow className="dark:border-dark-600 bg-dark-900">
                    <TableHead className="w-[150px]">Order ID.</TableHead>
                    <TableHead className="w-[150px]">Product</TableHead>
                    <TableHead className="w-[200px]">Customer Name</TableHead>
                    <TableHead className="w-[200px]">Date</TableHead>
                    <TableHead className="w-[150px]">Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow className="dark:border-dark-600" key={invoice.invoice}>
                        <TableCell className="font-medium py-5">
                        <img className="w-10" src="https://techzaa.in/larkon/admin/assets/images/product/p-7.png" />
                        </TableCell>
                        <TableCell>{invoice.name}</TableCell>
                        <TableCell>{invoice.CustomerName}</TableCell>
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell>{invoice.paymentMethod}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter className="dark:border-dark-600">
                <TableRow className="bg-dark-900">
                    <TableCell colSpan={5}>
                        Showing 5 of 90,521 orders
                    </TableCell>
                    <TableCell className="text-right">
                        <Pagination className="mt-4">
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
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
