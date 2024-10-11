import { Field, Form, Formik } from "formik";
import { signinSchima } from "../utils/validations";

export default function SignIn() {
    return (
        <div className="p-8">
            <Formik
                onSubmit={values => console.log(values)}
                initialValues={{ email: "", password: "" }}
                validationSchema={signinSchima}
            >{({errors , touched}) => (
                <Form className="max-w-sm mx-auto border p-8">
                    <div className="mb-5">
                        {touched.email && errors.email && <p className="text-red-400">{errors.email}</p>}
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your email
                        </label>
                        <Field
                            name="email"
                            type="email"
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="name@flowbite.com"

                        />
                    </div>
                    <div className="mb-5">
                    {touched.password && errors.password && <p className="text-red-400">{errors.password}</p>}
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                            Your password
                        </label>
                        <Field
                            name="password"
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="remember"
                                type="checkbox"
                                defaultValue=""
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"

                            />
                        </div>
                        <label
                            htmlFor="remember"
                            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Remember me
                        </label>
                    </div>
                    <button
                        type="submit"
                        className={` ${errors.email || errors.password ? "bg-blue-200" : "bg-blue-700"} text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center `}
                    >
                        Submit
                    </button>
                </Form>
            )}
                
            </Formik>

        </div>
    )
}