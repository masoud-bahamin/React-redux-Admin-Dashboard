import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../../src/components/ui/select"
import { Button } from "../components/ui/button"
import UsersTable from "../components/templates/Users/UsersTable"
import { Link } from "react-router-dom"

export default function UsersList() {

    return (
        <main className="dark:bg-dark-900 font-play p-6 dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">
            <div className="p-5 bg-dark-800 rounded-xl mt-5">
                <div className="py-4 flex items-center">
                    <p>All Users List</p>
                    <Button variant="outline" className="ml-auto mr-4"><Link to="/user-create">Add User</Link></Button>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All users" />
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

                <UsersTable />
            </div>
        </main>
    )
}
