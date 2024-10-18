import { Shirt, Users, LayoutDashboard, UserPen, TreeDeciduous, Table,  ListOrderedIcon, ListCheck, Package, Inbox } from 'lucide-react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import { Link } from 'react-router-dom'

export default function Aside() {
    return (
        <aside
            className="fixed font-play w-full inset-y-0 flex-wrap items-center justify-between block p-0 overflow-y-auto antialiased transition-transform duration-200 -translate-x-full bg-white border-0 shadow-xl dark:shadow-none dark:bg-dark-800 dark:text-white max-w-[17rem] ease-out z-50 xl:left-0 xl:translate-x-0"
            aria-expanded="false"
            style={{
                scrollbarColor: "gray",
                scrollbarWidth: "thin"
            }}
        >
            <div className="h-20 ">
                <i
                    className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times dark:text-white text-slate-400 xl:hidden"
                    sidenav-close=""
                />
                <a
                    className="flex items-center gap-2 px-8 py-6 m-0 text-sm whitespace-nowrap dark:text-white text-slate-700"
                    href="#"
                >
                    {/* <TreeDeciduous color='#83580b' size={32} /> */}
                    <img src='/logo.png' width={32}/>
                    <span className="ml-1 font-semibold transition-all duration-200 ease-nav-brand">
                        Bahamin
                    </span>
                </a>
            </div>
            <hr className="h-px mt-0 mb-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:border-gray-600 dark:" />
            <div  className="items-center block w-auto overflow-auto h-sidenav grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="w-full mt-4">
                        <h6 className="pl-6 ml-2 mb-4 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
                            General
                        </h6>
                    </li>
                    <li className="mt-0.5 w-full">
                        <Link to={"/"}
                            className="py-1 bg-blue-100 dark:bg-gray-900 dark:hover:bg-gray-700 hover:bg-gray-200 dark:text-white dark:opacity-80 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap rounded-lg px-4 font-semibold text-slate-700 transition-colors"
                        >
                            <div className="dark:text-gold-300 mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                <LayoutDashboard size={20} strokeWidth={1} />
                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="products" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <Shirt size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Products
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/products-list" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/products-grid" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Grid</Link>
                                <Link to="/product-edit/1" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/product-create" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="category" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <Table size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Category
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/category-list" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/category-edit/1" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/category-create" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="orders" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <ListOrderedIcon size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Orders
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="inventory" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <ListCheck size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Inventory
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="purchases" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <Package size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Purchases
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="invoices" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <Inbox size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Invoices
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/category-list" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/category-edit/1" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/category-create" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>
                        <li className="w-full mt-4">
                            <h6 className="pl-6 ml-2 mb-4 text-xs font-bold leading-tight uppercase dark:text-white opacity-60">
                                Account pages
                            </h6>
                        </li>
                        <AccordionItem value="users" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <Users size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Users
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/user-list" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/user-edit/1" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Edit</Link>
                                <Link to="/user-create" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>Create</Link>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="profile" className='border-b-0'>
                            <AccordionTrigger className='py-0 pr-2 rounded-lg mt-0.5 mx-2 dark:hover:bg-gray-700'>
                                <li className=" w-full -mx-2">
                                    <a
                                        className=" dark:text-white dark:hover:bg-gray-700 hover:bg-gray-200 dark:opacity-80 rounded-lg py-1 text-sm ease-nav-brand my-0 mx-2 flex items-center whitespace-nowrap px-4 transition-colors"

                                    >
                                        <div className="mr-2 flex items-center justify-center rounded-lg bg-center stroke-0 text-center xl:p-2.5">
                                            <UserPen size={20} strokeWidth={1} />
                                        </div>
                                        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-out">
                                            Profile
                                        </span>
                                    </a>
                                </li>
                            </AccordionTrigger>
                            <AccordionContent>
                                <Link to="/products" className='block mt-2 mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                                <Link to="/products" className='block mb-4 pl-[75px] dark:text-gray-300 dark:hover:text-gray-500 hover:scale-105'>List</Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </ul>
            </div>
            <div className="mx-4 mt-4">
                <a
                    href="#"
                    className="inline-block w-full px-8 py-2 mb-4 text-xs font-bold leading-normal text-center text-white capitalize transition-all ease-in rounded-lg shadow-md bg-slate-700 bg-150 hover:shadow-xs hover:-translate-y-px"
                >
                    Setting
                </a>
            </div>
        </aside>
    )
}