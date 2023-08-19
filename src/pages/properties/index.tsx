import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { getProperties } from "@/services/Api";
import { PropertyProps } from "@/constant/types";
import { Loading } from "@/components/Loading";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

export default function Property() {
  const [loading, setLoading] = useState(false);
  const [propertyList, setPropertyList] = useState<[PropertyProps]>([
    {
      unit: "",
      street_number: "",
      street_name: "",
      suburb: "",
      state: "",
      country: "",
      postcode: "",
      include_address_in_copy: false,
      property_type: 1,
      land_size: 0,
      land_size_unit: 1,
      target_market: "",
      features: "",
    },
  ]);

  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc"); // "asc" or "desc"

  useEffect(() => {
    onGetPropertyList();
  }, []);

  const onGetPropertyList = async () => {
    setLoading(true);
    const { data } = await getProperties();
    setPropertyList(data);
    setLoading(false);
  };

  const handleSortChange = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedPropertyList = [...propertyList].sort((a, b) => {
    const aValue = a[sortColumn as keyof PropertyProps];
    const bValue = b[sortColumn as keyof PropertyProps];

    if (typeof aValue === "undefined" || typeof bValue === "undefined") {
      return 0;
    }

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <Layout>
      <Seo templateTitle="Property" />

      <div className="bg-gray-50 px-5 py-5 lg:px-10 lg:py-10 ">
        <div className="mx-10 mx-auto mb-10 bg-white shadow">
          <div className="mx-auto border">
            <div className="border-b p-5">
              <h5 className="text-1xl m-0 font-bold uppercase text-gray-900">
                Properties
              </h5>
            </div>

            <div className="flex flex-col">
              {loading ? (
                <div className="flex w-full justify-center p-20">
                  <Loading />
                </div>
              ) : (
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("id")}
                      >
                        <div className="flex items-center">
                          #
                          {sortColumn === "id" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronDown className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("client")}
                      >
                        <div className="flex items-center">
                          Client
                          {sortColumn === "client" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("unit")}
                      >
                        <div className="flex items-center">
                          Unit
                          {sortColumn === "unit" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("street_number")}
                      >
                        <div className="flex items-center">
                          Street Number
                          {sortColumn === "street_number" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("street_name")}
                      >
                        <div className="flex items-center">
                          Street Name
                          {sortColumn === "street_name" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("suburb")}
                      >
                        <div className="flex items-center">
                          Suburb
                          {sortColumn === "suburb" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("state")}
                      >
                        <div className="flex items-center">
                          State
                          {sortColumn === "state" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-6 py-3"
                        onClick={() => handleSortChange("postcode")}
                      >
                        <div className="flex items-center">
                          Postcode
                          {sortColumn === "postcode" ? (
                            <span className="ml-1">
                              {sortDirection === "asc" ? (
                                <FaChevronUp className="ml-2" size={10} />
                              ) : (
                                <FaChevronUp className="ml-2" size={10} />
                              )}
                            </span>
                          ) : (
                            <FaChevronUp className="ml-2" size={10} />
                          )}
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedPropertyList.map((property) => (
                      <tr className="border-b text-gray-800">
                        <td className="whitespace-nowrap px-6 py-3 font-medium">
                          {property.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3"></td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.unit}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.street_number}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.street_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.suburb}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.state}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3">
                          {property.postcode}
                        </td>
                        <td className="flex whitespace-nowrap px-6 py-3">
                          <span className="hidden sm:block">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                              </svg>
                              Edit
                            </button>
                          </span>

                          <span className="ml-3 hidden sm:block">
                            <button
                              type="button"
                              className="inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                              <svg
                                className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                                <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                              </svg>
                              View
                            </button>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
