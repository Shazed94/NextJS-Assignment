"use client";

import DashboardMaster from "@/components/DashboardMaster";
import { ServiceUpdateDialog } from "@/components/ServiceUpdateDialog";
import { DeleteAlertServicePost } from "@/utility/DeleteAlert";
import { read_all_service__Request__API } from "@/utility/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Page() {
  const [service, setService] = useState([]);

  const deleteServiceControl = (id) => {
    DeleteAlertServicePost(id).then((res) => {
      if (res) {
        read_all_service__Request__API().then((res) => {
          setService(res.data);
        });
      }
    });
  };

  useEffect(() => {
    read_all_service__Request__API().then((res) => {
      setService(res.data);
    });
  }, []);
  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />
      <DashboardMaster>
        {/* Service Input Form */}
        <div>
          <div>
            <Link href="add-new">
              <button className="mx-5 mt-7 mb-4 bg-green-600 text-white rounded-sm px-4 py-2">
                Add new Service
              </button>
            </Link>
          </div>
          {/* Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Service Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Service Image
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-4 font-medium text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {service.map((item, index) => (
                  <tr className="hover:bg-gray-50" key={index}>
                    <td className="px-6 py-4">{item.title}</td>
                    <td className="px-6 py-4">
                      {item.updateAt.split("T", 1)[0]}
                    </td>

                    <td className="px-6 py-4">
                      <img
                        src={item.imgCDN}
                        alt=""
                        className="w-[50px] h-[50px] object-cover"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-4">
                        <span
                          className="cursor-pointer"
                          x-data="{ tooltip: 'Delete' }"
                          onClick={() => deleteServiceControl(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                            x-tooltip="tooltip"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </span>
                        <ServiceUpdateDialog id={item.id} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardMaster>
    </main>
  );
}
