'use client';
import { ErrorToast, IsEmail, IsEmpty, SuccessToast } from '@/utility/FormHelper';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { Toaster } from 'react-hot-toast';

const page = () => {
    const router = useRouter();
    let nameRef,
        emailRef,
        passwordRef,
        confirmPasswordRef = useRef();


    const handelSubmit = async (e) => {
        e.preventDefault();

        let name = nameRef.value;
        let email = emailRef.value;
        let password = passwordRef.value;
        let confirm_password = confirmPasswordRef.value;

        if (IsEmpty(email)) {
            ErrorToast("Email is Required!");
        } else if (IsEmail(email)) {
            ErrorToast("Email address is not valid!");
        } else if (IsEmpty(name)) {
            ErrorToast("Name is Required!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password is Required!");
        } else if (IsEmpty(confirm_password)) {
            ErrorToast("Confirm Password is Required!");
        } else if ((password !== confirm_password)) {
            ErrorToast("Confirm Password does not match!");
        }

        else {
            let res = await axios.post("api/user/sign-up", {
                name,
                email,
                password,
                confirm_password,
            });
            if (res.data.status === "Success") {
                SuccessToast("Registration Success!");
                router.replace("/login");
            } else {
                ErrorToast("Something Went Wrong");
            }
        }
    };

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="container mx-auto py-8">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign Up Form</h1>
                <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" onSubmit={handelSubmit}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:border-indigo-500"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            ref={(input) => (nameRef = input)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:border-indigo-500"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            ref={(input) => (emailRef = input)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:border-indigo-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            ref={(input) => (passwordRef = input)}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="confirm-password"
                        >
                            Confirm Password
                        </label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none focus:border-indigo-500"
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            placeholder="********"
                            ref={(input) => (confirmPasswordRef = input)}

                        />
                    </div>
                    <button
                        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                        type="submit"
                    >
                        Register
                    </button>
                </form>
            </div>

        </div>
    )
}

export default page