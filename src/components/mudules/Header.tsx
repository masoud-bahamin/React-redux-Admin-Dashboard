export default function Header() {
    return (
        <nav
            className="relative xl:ml-[17rem] lg:pl-6 flex flex-wrap items-center justify-between px-0 py-2 lg:mx-6 transition-all ease-in shadow-none duration-300 rounded-2xl lg:flex-nowrap lg:justify-start"
            navbar-main=""
            navbar-scroll="false"
        >
            <div className="flex items-center justify-between w-full px-6 lg:px-4 py-1 mx-auto flex-wrap">
                <nav>
                    {/* breadcrumb */}
                    <ol className="hidden lg:flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="text-sm leading-normal">
                            <a className="text-white opacity-50" href="#">
                                Pages
                            </a>
                        </li>
                        <li
                            className="text-sm pl-2 capitalize leading-normal text-white before:float-left before:pr-2 before:text-white before:content-['/']"
                            aria-current="page"
                        >
                            Dashboard
                        </li>
                    </ol>
                    <h6 className="mb-0 font-bold text-white capitalize">Dashboard</h6>
                </nav>
                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                    <div className="flex items-center md:ml-auto pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease">
                            <span className="text-sm ease leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="m16.893 16.92l3.08 3.08m-.889-8.419c0 4.187-3.383 7.581-7.556 7.581c-4.172 0-7.555-3.394-7.555-7.58C3.973 7.393 7.356 4 11.528 4c4.173 0 7.556 3.394 7.556 7.581Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="pl-9 dark:bg-dark-800 dark:border-dark-600 text-sm focus:shadow-primary-outline ease w-1/12 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 dark:bg-slate-850 dark:text-gray-200 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:transition-shadow"
                                placeholder="Type here..."
                            />
                        </div>
                    </div>
                    <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                        <li className="flex items-center">
                            <a
                                href="./pages/sign-in.html"
                                className="flex items-center gap-1 px-0 py-2 text-sm font-semibold text-white transition-all ease-out"
                            >

                                <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                                    <g fill="none">
                                        <path d="M4.929 19.071a10 10 0 1 0 0-14.142" stroke="currentColor" strokeWidth="2" />
                                        <path d="m15 12l.78-.625l.5.625l-.5.625zM3 13a1 1 0 1 1 0-2zm8.78-6.625l4 5l-1.56 1.25l-4-5zm4 6.25l-4 5l-1.56-1.25l4-5zM15 13H3v-2h12z" fill="currentColor" />
                                    </g>
                                </svg>
                            </a>
                        </li>
                        <li className="flex items-center px-4">
                            <a

                                className="block p-0 text-sm text-white transition-all ease-out"
                                sidenav-trigger=""
                            >
                                <div className="w-5 overflow-hidden">

                                    <svg className="relative block rounded-sm transition-all" height="20" width="20" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088l-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36l-116.224-25.088l-65.28 113.152l79.68 88.192l-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136l-79.808 88.192l65.344 113.152l116.224-25.024l22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152l24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296l116.288 25.024l65.28-113.152l-79.744-88.192l1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136l79.808-88.128l-65.344-113.152l-116.288 24.96l-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384a192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256a128 128 0 0 0 0-256z" fill="currentColor" />
                                    </svg>

                                    <i />

                                </div>
                            </a>
                        </li>

                        {/* notifications */}
                        <li className="relative flex items-center px-2">
                            <a
                                href="#"
                                className="block p-0 text-sm text-white transition-all ease-out"
                                dropdown-trigger=""
                                aria-expanded="false"
                            >
                                <svg height="20" width="20" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M2.316 12h10.368c-.188-.704-.28-1.691-.348-3.037c-.07-1.382-.103-1.888-.19-2.612c-.028-.236-.06-.462-.096-.68c-.31-1.892-1.506-2.923-3.708-3.131a1 1 0 1 0-1.684 0c-2.202.208-3.397 1.24-3.708 3.13a16.01 16.01 0 0 0-.096.68c-.087.725-.12 1.23-.19 2.613c-.068 1.346-.16 2.333-.348 3.037m10.843 1H1.84c-.308.353-.737.5-1.341.5a.5.5 0 1 1 0-1c.786 0 1.024-.783 1.166-3.587c.07-1.407.105-1.926.196-2.681c.03-.25.063-.49.102-.724c.334-2.041 1.546-3.313 3.556-3.792a2 2 0 0 1 3.96 0c2.01.479 3.222 1.75 3.557 3.792a17 17 0 0 1 .102.724c.09.755.125 1.274.196 2.681c.14 2.804.379 3.587 1.165 3.587a.5.5 0 1 1 0 1c-.604 0-1.033-.147-1.341-.5M5.5 14h4a2 2 0 1 1-4 0" fill="currentColor" fillRule="evenodd" />
                                </svg>
                            </a>
                            <ul
                                dropdown-menu=""
                                className=" opacity-0 text-sm lg:shadow-2xl duration-200 min-w-44 before:sm:right-8 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent dark:shadow-dark-xl dark:bg-slate-850 bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer"
                            >
                                {/* add show class on dropdown open js */}
                                <li className="relative mb-2">
                                    <a
                                        className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img
                                                    src="./assets/img/team-2.jpg"
                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white h-9 w-9 max-w-none rounded-xl"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal dark:text-gray-200">
                                                    <span className="font-semibold">New message</span>{" "}
                                                    from Laur
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-gray-200/80">
                                                    <i className="mr-1 fa fa-clock" />
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="relative mb-2">
                                    <a
                                        className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div className="my-auto">
                                                <img
                                                    src="./assets/img/small-logos/logo-spotify.svg"
                                                    className="inline-flex items-center justify-center mr-4 text-sm text-white bg-gradient-to-tl from-zinc-800 to-zinc-700 dark:bg-gradient-to-tl dark:from-slate-750 dark:to-gray-850 h-9 w-9 max-w-none rounded-xl"
                                                />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal dark:text-gray-200">
                                                    <span className="font-semibold">New album</span> by
                                                    Travis Scott
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-gray-200/80">
                                                    <i className="mr-1 fa fa-clock" />1 day
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a
                                        className="dark:hover:bg-slate-900 ease py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700"
                                        href="#"
                                    >
                                        <div className="flex py-1">
                                            <div className="inline-flex items-center justify-center my-auto mr-4 text-sm text-white transition-all duration-200 ease-out bg-gradient-to-tl from-slate-600 to-slate-300 h-9 w-9 rounded-xl">
                                                <svg
                                                    width="12px"
                                                    height="12px"
                                                    viewBox="0 0 43 36"
                                                    version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                    <title>credit-card</title>
                                                    <g
                                                        stroke="none"
                                                        strokeWidth={1}
                                                        fill="none"
                                                        fillRule="evenodd"
                                                    >
                                                        <g
                                                            transform="translate(-2169.000000, -745.000000)"
                                                            fill="#FFFFFF"
                                                            fillRule="nonzero"
                                                        >
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(453.000000, 454.000000)">
                                                                    <path
                                                                        className="color-background"
                                                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                        opacity="0.593633743"
                                                                    />
                                                                    <path
                                                                        className="color-background"
                                                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                                                    />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h6 className="mb-1 text-sm font-normal leading-normal dark:text-gray-200">
                                                    Payment successfully completed
                                                </h6>
                                                <p className="mb-0 text-xs leading-tight text-slate-400 dark:text-gray-200/80">
                                                    <i className="mr-1 fa fa-clock" />2 days
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}