"use client";
import DashboardMaster from "@/components/DashboardMaster";
import { SuccessToast } from "@/utility/FormHelper";
import { QuillScript } from "@/utility/QuillScript";
import {
  create_service__Request__API,
  read_all_service__Request__API,
} from "@/utility/api";
import Link from "next/link";
import { useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import ReactQuill from "react-quill";

export default function Page() {
  let titleRef,
    imgCDNRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    let title = titleRef.value;
    let imgCDN = imgCDNRef.value;

    create_service__Request__API({ title, imgCDN }).then((res) => {
      if (res) {
        SuccessToast("Service add successful!");
        titleRef.value = "";
        imgCDNRef.value = "";
        read_all_service__Request__API().then((res) => {
          setService(res.data);
        });
      }
    });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <DashboardMaster>
        {/* Service Input Form */}

        <div>
          <Link href="all-services">
            <button className="mx-5 mt-7 mb-4 bg-green-600 text-white rounded-sm px-4 py-2">
              All Services
            </button>
          </Link>
        </div>
        <div className="grid ">
          <div className="p-5">
            <h1 className="text-xl font-semibold">
              Add Service - please fill in your information to continue
            </h1>
            <div className="mt-6">
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Service Title
                  </label>
                  <input
                    ref={(input) => (titleRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Service Title"
                    autoComplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-gray-600 uppercase"
                  >
                    Image CDN
                  </label>
                  <input
                    ref={(input) => (imgCDNRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Image CDN"
                    autoComplete="given-name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                    required=""
                  />
                </div>
              </div>
              <button
                onClick={submit}
                type="submit"
                className="w-full py-3 mt-[40px] font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      </DashboardMaster>
    </>
  );
}
