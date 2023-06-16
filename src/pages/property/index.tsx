import React, { useEffect, useState } from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { FaBath, FaBed, FaCarAlt } from "react-icons/fa";
import axios from "axios";

interface ValuesProps {
  unit: string;
  street_number: string;
  street_name: string;
  suburb: string;
  state: string;
  country: string;
  postcode: string;
  include_address_in_copy: boolean;
  property_type: number;
  land_size: number;
  land_size_unit: number;
  target_market: string;
  features: string;
}

interface StatesProps {
  id: number;
  name: string;
  country: string;
  acronym: string;
}

const propertyTypes = [
  { title: "HOUSE", name: "House", value: 1 },
  { title: "UNIT", name: "Apartment/Unit", value: 2 },
  { title: "VILLA", name: "Villa", value: 3 },
  { title: "ACERAGE", name: "Acerage", value: 4 },
  { title: "BLOCK_OF_UNITS", name: "Block Of Units", value: 5 },
  { title: "TOWNHOUSE", name: "Townhouse", value: 6 },
  { title: "LAND", name: "Land", value: 7 },
  { title: "RURAL", name: "Rural", value: 8 },
  { title: "RETIREMENT_LIVING", name: "Retirement Living", value: 9 },
];

const landSizeUnits = [
  { title: "SQUARE_METERS", name: "Square Meters", value: 1 },
  { title: "ACRES", name: "Acres", value: 2 },
  { title: "HECTARES", name: "Hectares", value: 3 },
];


export default function Property() {
  const [values, setValues] = useState<ValuesProps>({
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
  });

  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [parkingSpaces, setParkingSpaces] = useState(0);
  const [stateList, setStateList] = useState<[StatesProps]>([]);

  useEffect(() => {
    getStateList();
  }, []);

  const getStateList = async () => {
    const { data } = await axios.get(`http://localhost:8000/state/`);
    setStateList(data);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setValues({ ...values, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const incrementHandler = (type: string) => {
    switch (type) {
      case "bedrooms":
        setBedrooms(bedrooms + 1);
        break;
      case "bathrooms":
        setBathrooms(bathrooms + 1);
        break;
      case "parkingSpaces":
        setParkingSpaces(parkingSpaces + 1);
        break;
      default:
        break;
    }
  };

  const decrementHandler = (type: string) => {
    switch (type) {
      case "bedrooms":
        if (bedrooms > 0) {
          setBedrooms(bedrooms - 1);
        }
        break;
      case "bathrooms":
        if (bathrooms > 0) {
          setBathrooms(bathrooms - 1);
        }
        break;
      case "parkingSpaces":
        if (parkingSpaces > 0) {
          setParkingSpaces(parkingSpaces - 1);
        }
        break;
      default:
        break;
    }
  };

  const handleStateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = stateList.find(
      (state) => state.id === parseInt(e.target.value)
    );
    setValues({
      ...values,
      state: e.target.value,
      country: selectedState?.country || "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      ...values,
      beds: bedrooms,
      baths: bathrooms,
      parking_spaces: parkingSpaces,
    };

    const response = await axios.post(
      `http://localhost:8000/property`,
      data
    );

    alert(`Success: ${JSON.stringify(response.data)}`);
  };

  return (
    <Layout>
      <Seo templateTitle="Property" />

      <form onSubmit={handleSubmit}>
        <div className="bg-gray-50 px-5 py-5 lg:px-10 lg:py-10 ">
          <div className="mx-10 mx-auto mb-10 bg-white shadow">
            <div className="mx-auto border">
              <div className="border-b p-5">
                <h5 className="text-1xl m-0 font-bold uppercase text-gray-900">
                  Property Address
                </h5>
              </div>
              <div className="p-5 pb-0">
                <div className="flex flex-col lg:flex-row">
                  <div className="mb-5 mr-5 w-full lg:w-80">
                    <label
                      htmlFor="unit"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Unit
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="unit"
                        id="unit"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Unit"
                        onChange={handleInputChange}
                        value={values.unit}
                      />
                    </div>
                  </div>
                  <div className="mb-5 mr-5 w-full lg:w-80">
                    <label
                      htmlFor="street_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street Number
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="street_number"
                        id="street_number"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Street Number"
                        onChange={handleInputChange}
                        value={values.street_number}
                      />
                    </div>
                  </div>
                  <div className="mb-5 mr-5 w-full">
                    <label
                      htmlFor="street_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Street Name
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="street_name"
                        id="street_name"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Street Name"
                        onChange={handleInputChange}
                        value={values.street_name}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                  <div className="mb-5 mr-5 w-full">
                    <label
                      htmlFor="suburb"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Suburb
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="suburb"
                        id="suburb"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Suburb"
                        onChange={handleInputChange}
                        value={values.suburb}
                      />
                    </div>
                  </div>
                  <div className="mb-5 mr-5 w-full">
                    <label
                      htmlFor="state"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <select
                        id="state"
                        name="state"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        onChange={handleStateSelect}
                        value={values.state}
                      >
                        <option>Select</option>
                        {stateList.map((state, key) => (
                          <option key={key} value={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="mb-5 mr-5 w-full">
                    <label
                      htmlFor="postcode"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Postcode
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="postcode"
                        id="postcode"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Postcode"
                        onChange={handleInputChange}
                        value={values.postcode}
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex">
                  <div className="w-full lg:mr-5 lg:w-80">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Country
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        id="country"
                        name="country"
                        className="block w-full border-0 px-3 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={values.country}
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="flex border-t py-5">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="include_address_in_copy"
                        name="include_address_in_copy"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"
                        onChange={handleInputChange}
                        checked={values.include_address_in_copy}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="include_address_in_copy"
                        className="font-medium text-gray-900"
                      >
                        Include property address in copy
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mx-auto mb-10 bg-white shadow">
            <div className="mx-auto border">
              <div className="border-b p-5">
                <h5 className="text-1xl m-0 font-bold uppercase text-gray-900">
                  Property Details
                </h5>
              </div>
              <div className="flex  flex-col p-5 pb-0 lg:flex-row">
                <div className="mb-5 flex w-full lg:mb-0 lg:w-3/6">
                  <div className="flex w-80 w-full items-center justify-between border p-2  lg:mr-5">
                    <div className="ml-2 flex">
                      <FaBed size={20} />
                      <p className="m-0 px-3">Bedrooms</p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-200 p-2">
                      <div
                        onClick={() => decrementHandler("bedrooms")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        -
                      </div>
                      <div className="flex w-10 items-center justify-center px-3">
                        {bedrooms}
                      </div>
                      <div
                        onClick={() => incrementHandler("bedrooms")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:mb-0 lg:w-3/6">
                  <div className="flex w-80 w-full items-center justify-between border p-2 lg:mr-5">
                    <div className="ml-2 flex">
                      <FaBath size={20} />
                      <p className="m-0 px-3">Bathrooms</p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-200 p-2">
                      <div
                        onClick={() => decrementHandler("bathrooms")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        -
                      </div>
                      <div className="flex w-10 items-center justify-center px-3">
                        {bathrooms}
                      </div>
                      <div
                        onClick={() => incrementHandler("bathrooms")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-5 pb-0">
                <div className="mb-5 flex w-full lg:w-3/6">
                  <div className="flex w-full items-center justify-between border p-2 lg:mr-5">
                    <div className="ml-2 flex">
                      <FaCarAlt size={20} />
                      <p className="m-0 px-3">Parking Spaces</p>
                    </div>
                    <div className="flex items-center justify-center bg-gray-200 p-2">
                      <div
                        onClick={() => decrementHandler("parkingSpaces")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        -
                      </div>
                      <div className="flex w-10 items-center justify-center px-3">
                        {parkingSpaces}
                      </div>
                      <div
                        onClick={() => incrementHandler("parkingSpaces")}
                        className="flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white"
                      >
                        +
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col px-5 pb-0 lg:flex-row">
                <div className="mb-5 flex w-full lg:w-3/6">
                  <div className="w-full lg:mr-5">
                    <label
                      htmlFor="property_type"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Property Type
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <select
                        id="property_type"
                        name="property_type"
                        className="block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={values.property_type}
                      >
                        {propertyTypes.map((type, key) => (
                          <option key={key} value={type.value}>
                            {type.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-5 flex w-full lg:w-3/6">
                  <div className="w-full">
                    <label
                      htmlFor="land_size"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Land Size
                      <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        Optional
                      </span>
                    </label>
                    <div className="relative mt-2 shadow-sm">
                      <input
                        type="text"
                        name="land_size"
                        id="land_size"
                        className="block w-full  border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={values.land_size}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <label htmlFor="land_size_unit" className="sr-only">
                          Square meters
                        </label>
                        <select
                          id="land_size_unit"
                          name="land_size_unit"
                          className="h-full border-0 bg-gray-200 py-0 pl-4 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm"
                          onChange={handleInputChange}
                          value={values.land_size_unit}
                        >
                          {landSizeUnits.map((type, key) => (
                            <option key={key} value={type.value}>
                              {type.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex px-5 pb-0">
                <div className="mb-5 flex  w-full">
                  <div className="w-full">
                    <label
                      htmlFor="target_market"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Target market for this property?
                    </label>
                    <div className="mt-2 shadow-sm">
                      <input
                        id="target_market"
                        name="target_market"
                        className="block w-full border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="E.g. first home buyers, inverstors, families"
                        onChange={handleInputChange}
                        value={values.target_market}
                      />
                    </div>
                    <span className="text-xs text-gray-400">0/70</span>
                  </div>
                </div>
              </div>

              <div className="flex px-5 pb-0">
                <div className="mb-5 flex  w-full">
                  <div className="w-full">
                    <label
                      htmlFor="features"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Property features, list as many as possible. Tell us about
                      the property, what makes it special, what is nearby
                    </label>
                    <div className="mt-2 shadow-sm">
                      <textarea
                        id="features"
                        name="features"
                        className="block w-full border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                        placeholder="Sentences or bullet points are fine.&#10;The more you tell us, the better the output!"
                        rows={5}
                        onChange={handleInputChange}
                        value={values.features}
                      />
                    </div>
                    <span className="text-xs text-gray-400">
                      0/2000{" "}
                      <span className="text-red-400">
                        (Minimum: 100 characters)
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-10 mx-auto mb-10 bg-white shadow">
            <div className="mx-auto">
              <div className="flex flex-col justify-between p-5 lg:flex-row">
                <h5 className="text-1xl m-0 font-bold uppercase text-gray-900">
                  Copy length
                </h5>

                <div className="mt-5 flex flex-col lg:mt-0 lg:flex-row">
                  <div className="flex items-center gap-x-2 lg:ml-5">
                    <input
                      id="150"
                      name="requested_copy_length"
                      type="radio"
                      value={150}
                      className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="150"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      150 words
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 lg:ml-5">
                    <input
                      id="200"
                      name="requested_copy_length"
                      type="radio"
                      value={200}
                      className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="200"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      200 words
                    </label>
                  </div>
                  <div className="flex items-center gap-x-2 lg:ml-5">
                    <input
                      id="250"
                      name="requested_copy_length"
                      type="radio"
                      value={250}
                      className="h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="250"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      250 words
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="cursor-pointer bg-red-600 px-5 py-2 uppercase text-white"
            >
              Generate Copy
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
