import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import { getPropertyDetails } from "@/services/Api"; // Import your API function
import { PropertyPropsResponse } from "@/constant/types";
import Link from "next/link";
import { Loading } from "@/components/Loading";
import { FaArrowLeft } from "react-icons/fa";

export default function PropertyDetails() {
  const router = useRouter();
  const { propertyId } = router.query;

  const [loading, setLoading] = useState(false);
  const [propertyDetails, setPropertyDetails] =
    useState<PropertyPropsResponse | null>(null);

  useEffect(() => {
    if (propertyId) {
      onGetPropertyDetails();
    }
  }, [propertyId]);

  const onGetPropertyDetails = async () => {
    setLoading(true);
    const { data } = await getPropertyDetails(propertyId);
    if (data?.length > 0) {
      setPropertyDetails(data[0]);
    } else {
      setPropertyDetails(null);
    }
    setLoading(false);
  };

  // Render property details
  return (
    <Layout>
      {loading ? (
        <div className="flex w-full justify-center p-20">
          <Loading />
        </div>
      ) : (
        <div className="flex flex-col content-center px-20 pb-20 pt-10">
          <div className="hidden lg:flex lg:flex-1 lg:justify-start">
            <Link
              href="/properties"
              className="flex items-center text-sm font-semibold leading-6 text-gray-900"
            >
              <FaArrowLeft className="mr-1" size={10} /> Go Back
            </Link>
          </div>
          <p className="pt-10 text-base font-semibold leading-7 text-indigo-600">
            {propertyDetails?.unit} - {propertyDetails?.street_number} -{" "}
            {propertyDetails?.street_name}
          </p>

          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Description
          </h1>

          {propertyDetails?.description.map((des: any) => (
            <p
              className="mt-8 space-y-8 text-gray-900"
              style={{ whiteSpace: "pre-line" }}
            >
              {des}
            </p>
          ))}

          {/* <ul role="list" className="mt-8 space-y-8 text-gray-900">
          <li className="flex gap-x-3">
            <svg
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              <strong className="font-semibold text-gray-900">
                Push to deploy.
              </strong>{" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </span>
          </li>
          <li className="flex gap-x-3">
            <svg
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              <strong className="font-semibold text-gray-900">
                SSL certificates.
              </strong>{" "}
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo.
            </span>
          </li>
          <li className="flex gap-x-3">
            <svg
              className="mt-1 h-5 w-5 flex-none text-indigo-600"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
              <path
                fill-rule="evenodd"
                d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                clip-rule="evenodd"
              />
            </svg>
            <span>
              <strong className="font-semibold text-gray-900">
                Database backups.
              </strong>{" "}
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis.
            </span>
          </li>
        </ul> */}
          {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
          No server? No problem.
        </h2>
        <p className="mt-6">
          Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat
          in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum
          mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
          tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi.
          Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis
          diam.
        </p> */}
        </div>
      )}
    </Layout>
  );
}
