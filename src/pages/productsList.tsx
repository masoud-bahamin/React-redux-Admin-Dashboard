
import { Link } from "react-router-dom"
import { ProductsTable } from "../components/templates/Products/ProductsTable"
import { Button } from "../components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"

export default function ProductsList() {

    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">
            <div className="p-6 bg-dark-800 rounded-xl">
                <div className="py-4 flex items-center">
                    <p>All Product List</p>
                    <Button variant="outline" className="ml-auto mr-4"><Link to="/product-create">Add Product</Link></Button>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="This Month" />
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
                <ProductsTable />
            </div>

        </main>
    )
}