'use client';

import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { Toaster } from 'react-hot-toast'

const page = () => {
    const router = useRouter();
    let emailRef,
        passwordRef = useRef();

    const handleSubmit = async (e) => {
        console.log("first")
        e.preventDefault();
        let email = emailRef.value;
        let password = passwordRef.value;
        if (IsEmpty(email)) {
            ErrorToast("Email Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Email address is not valid!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else {
            let res = await axios.post("api/user/login", { email, password });
            if (res.data.status === "success") {
                SuccessToast("Login Success!");
                router.replace("/dashboard");
            } else {
                ErrorToast("Email or Password Wrong!");
            }
        }
    };
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <section className="bg-[var(--bg)] min-h-screen flex justify-center items-center">
                <div className="w-full md:w-1/2 lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mx-auto shadow-lg rounded-lg bg-gray-200 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-gray-500 text-sm font-bold">Sign in with</h6>
                            </div>
                            <div className="text-center">
                                <button
                                    className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <img
                                        alt="..."
                                        className="w-5 mr-1"
                                        src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
                                    />
                                    Github
                                </button>
                                <button
                                    className="bg-white active:bg-gray-50 text-gray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                    type="button"
                                >
                                    <img
                                        alt="..."
                                        className="w-5 mr-1"
                                        src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
                                    />
                                    Google{" "}
                                </button>
                            </div>
                            <hr className="mt-6 border-b-1 border-gray-300" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-gray-400 text-center mb-3 font-bold">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Email"
                                        ref={(input) => (emailRef = input)}

                                    />
                                </div>
                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        placeholder="Password"
                                        ref={(input) => (passwordRef = input)}

                                    />
                                </div>
                                <div>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                                        />
                                        <span className="ml-2 text-sm font-semibold text-gray-600">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                        type="submit"
                                    >Sign In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page