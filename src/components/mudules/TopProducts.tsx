import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table"


const invoices = [
    {
        name: "Product1",
        invoice: "INV001",
        date: "29 April 2024",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        name: "Product2",
        invoice: "INV002",
        date: "28 April 2024",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        name: "Product3",
        invoice: "INV003",
        date: "27 April 2024",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        name: "Product4",
        invoice: "INV004",
        date: "25 April 2024",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },

]

export function TopProductsTable() {
    return (
        <Table>
            <TableHeader>
                <TableRow className="dark:border-dark-600 bg-dark-900">
                    <TableHead className="w-[100px]">Product Image</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Date</TableHead>
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
                        <TableCell>{invoice.date}</TableCell>
                        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
         

        </Table>
    )
}
