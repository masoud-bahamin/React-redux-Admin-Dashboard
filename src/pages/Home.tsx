import { Alert, AlertDescription } from "../components/ui/alert";
import { FirstChart } from "../components/mudules/Charts/FirstChart";
import { Card, CardFooter } from "../components/ui/card";
import { OrdersTable } from "../components/mudules/OrdersTable";
import { TopProductsTable } from "../components/mudules/TopProducts";
import { RedialChart } from "../components/mudules/Charts/RedialChart";
import { PieChartCompenent } from "../components/mudules/Charts/PieChart";

export default function Home() {
    return (
        <main className="dark:bg-dark-900 font-play dark:text-gray-100 min-h-screen transition-all duration-200 ease-in-out xl:ml-[17rem] rounded-xl">
            <div className="w-full p-6 mx-auto">
                {/* row 1 */}
                <div className="flex flex-wrap justify-between">
                    <div className="lg:w-2/5 p-4">
                        <Alert variant="default">
                            <AlertDescription>
                                We regret to inform you that our server is currently experiencing technical difficulties.
                            </AlertDescription>
                        </Alert>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <Card className="w-full max-w-full pt-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 rounded-2xl bg-clip-border">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-row -mx-3">
                                            <div className="flex-none w-2/3 max-w-full px-3">
                                                <div>
                                                    <p className="mb-0 font-sans text-gray-600 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                                        Today's Money
                                                    </p>
                                                    <h5 className="mb-2 font-bold dark:text-white">$53,000</h5>

                                                </div>
                                            </div>
                                            <div className="px-3 text-right basis-1/3">
                                                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-blue-500 to-violet-500">
                                                    <svg className="mx-auto text-lg relative top-3.5 text-white" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardFooter className="bg-gray-900 p-4 mt-4">
                                        <p className="mb-0 text-gray-500 dark:text-white dark:opacity-80">
                                            <span className="text-sm mr-1 font-bold leading-normal text-emerald-500">
                                                +55%
                                            </span>
                                            since yesterday
                                        </p>
                                    </CardFooter>
                                </div>
                            </Card>
                            <Card className="w-full max-w-full pt-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 rounded-2xl bg-clip-border">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-row -mx-3">
                                            <div className="flex-none w-2/3 max-w-full px-3">
                                                <div>
                                                    <p className="mb-0 font-sans text-gray-600 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                                        Today's Users
                                                    </p>
                                                    <h5 className="mb-2 font-bold dark:text-white">2,300</h5>

                                                </div>
                                            </div>
                                            <div className="px-3 text-right basis-1/3">
                                                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-red-600 to-orange-600">
                                                    <svg className="mx-auto text-lg relative top-3.5 text-white" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardFooter className="bg-gray-900 p-4 mt-4">
                                        <p className="mb-0 text-gray-500 dark:text-white dark:opacity-80">
                                            <span className="text-sm mr-1 font-bold leading-normal text-emerald-500">
                                                +3%
                                            </span>
                                            since last week
                                        </p>
                                    </CardFooter>
                                </div>
                            </Card>
                            <Card className="w-full max-w-full pt-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 rounded-2xl bg-clip-border">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-row -mx-3">
                                            <div className="flex-none w-2/3 max-w-full px-3">
                                                <div>
                                                    <p className="mb-0 font-sans text-gray-600 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                                        New Clients
                                                    </p>
                                                    <h5 className="mb-2 font-bold dark:text-white">+3,462</h5>

                                                </div>
                                            </div>
                                            <div className="px-3 text-right basis-1/3">
                                                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-emerald-500 to-teal-400">
                                                    <svg className="mx-auto text-lg relative top-3.5 text-white" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardFooter className="bg-gray-900 p-4 mt-4">
                                        <p className="mb-0 text-gray-500 dark:text-white dark:opacity-80">
                                            <span className="text-sm mr-1 font-bold leading-normal text-red-600">
                                                -2%
                                            </span>
                                            since last quarter
                                        </p>
                                    </CardFooter>
                                </div>
                            </Card>
                            <Card className="w-full max-w-full pt-4">
                                <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 rounded-2xl bg-clip-border">
                                    <div className="flex-auto p-4">
                                        <div className="flex flex-row -mx-3">
                                            <div className="flex-none w-2/3 max-w-full px-3">
                                                <div>
                                                    <p className="mb-0 font-sans text-gray-600 text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60">
                                                       ALL TODAYS Sales
                                                    </p>
                                                    <h5 className="mb-2 font-bold dark:text-white">$103,430</h5>

                                                </div>
                                            </div>
                                            <div className="px-3 text-right basis-1/3">
                                                <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-orange-500 to-yellow-500">
                                                    <svg className="mx-auto text-lg relative top-3.5 text-white" height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                                        <path d="M16 16c0-1.105-3.134-2-7-2s-7 .895-7 2s3.134 2 7 2s7-.895 7-2ZM2 16v4.937C2 22.077 5.134 23 9 23s7-.924 7-2.063V16M9 5c-4.418 0-8 .895-8 2s3.582 2 8 2M1 7v5c0 1.013 3.582 2 8 2M23 4c0-1.105-3.1-2-6.923-2c-3.824 0-6.923.895-6.923 2s3.1 2 6.923 2S23 5.105 23 4Zm-7 12c3.824 0 7-.987 7-2V4M9.154 4v10.166M9 9c0 1.013 3.253 2 7.077 2C19.9 11 23 10.013 23 9" fill="none" stroke="currentColor" strokeWidth="2" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <CardFooter className="bg-gray-900 p-4 mt-4">
                                        <p className="mb-0 text-gray-500 dark:text-white dark:opacity-80">
                                            <span className="text-sm mr-1 font-bold leading-normal text-emerald-500">
                                                +5%
                                            </span>
                                            than last month
                                        </p>
                                    </CardFooter>
                                </div>
                            </Card>
                        </div>
                    </div>
                    <div className="p-4 w-full lg:w-3/5">
                        <FirstChart />
                    </div>
                </div>
                {/* row 2 */}
                <div className="flex flex-wrap mt-6">
                    <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-1/3 lg:flex-none">
                        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 border-0 border-solid shadow-xl dark:bg-slate-850 border-black-125 rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 rounded-t-4">
                                <div className="flex justify-between">
                                    <h6 className="mb-2 dark:text-white">Visitors</h6>
                                </div>
                            </div>
                            <div className="overflow-x-auto p-4">
                                <RedialChart />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-1/3 lg:flex-none">
                        <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 border-0 border-solid shadow-xl dark:bg-slate-850 border-black-125 rounded-2xl bg-clip-border">
                            <div className="p-4 pb-0 mb-0 rounded-t-4">
                                <div className="flex justify-between">
                                    <h6 className="mb-2 dark:text-white">Locations</h6>
                                </div>
                            </div>
                            <div className="overflow-x-auto p-4">
                                <PieChartCompenent />
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-full px-3 mt-0 lg:w-1/3 lg:flex-none">
                        <div className="dark:bg-dark-800 dark:text-gray-200 border-black/12.5 shadow-xl dark:bg-slate-850 relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
                            <div className="p-4 pb-0 rounded-t-4">
                                <h6 className="mb-2 dark:text-white">Top Products</h6>
                            </div>
                            <div className="flex-auto p-4">
                                <TopProductsTable />
                            </div>
                        </div>
                    </div>


                </div>
                {/* row 3 */}
                <div className="w-full mt-6 max-w-full px-3 mb-6 lg:mb-0 lg:flex-none">
                    <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-dark-800 dark:text-gray-200 border-0 border-solid shadow-xl dark:bg-slate-850 border-black-125 rounded-2xl bg-clip-border">
                        <div className="p-4 pb-0 mb-0 rounded-t-4">
                            <div className="flex justify-between">
                                <h6 className="mb-2 dark:text-white">Recent Orders</h6>
                            </div>
                        </div>
                        <div className="overflow-x-auto p-4">
                            <OrdersTable />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}