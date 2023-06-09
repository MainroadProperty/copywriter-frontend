import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import { FaBath, FaBed, FaCarAlt } from 'react-icons/fa';

export default function Property() {
  return (
    <Layout>
      <Seo templateTitle='Property' />

      <div className='bg-gray-50 px-10 py-10'>
        <div className='mx-10 mx-auto mb-10 bg-white shadow'>
          <div className='mx-auto border'>
            <div className='border-b p-5'>
              <h5 className='text-1xl m-0 font-bold uppercase text-gray-900'>
                Property Address
              </h5>
            </div>
            <div className='p-5 pb-0'>
              <div className='mb-5 flex'>
                <div className='mr-5 w-80'>
                  <label
                    htmlFor='unit'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Unit
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='unit'
                      id='unit'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter Unit'
                    />
                  </div>
                </div>
                <div className='mr-5 w-80'>
                  <label
                    htmlFor='streetNumber'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Street Number
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='streetNumber'
                      id='streetNumber'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter Street Number'
                    />
                  </div>
                </div>
                <div className='mr-5 w-full'>
                  <label
                    htmlFor='streetName'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Street Name
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='streetName'
                      id='streetName'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter Street Name'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-5 flex'>
                <div className='mr-5 w-full'>
                  <label
                    htmlFor='suburb'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Suburb
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='suburb'
                      id='suburb'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter Suburb'
                    />
                  </div>
                </div>
                <div className='mr-5 w-full'>
                  <label
                    htmlFor='state'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    State
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='state'
                      id='state'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter State'
                    />
                  </div>
                </div>
                <div className='mr-5 w-full'>
                  <label
                    htmlFor='Postcode'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Postcode
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='Postcode'
                      id='Postcode'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Enter Postcode'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-5 flex'>
                <div className='mr-5 w-80'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Country
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <select
                      id='country'
                      name='country'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                      <option>India</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Brazil</option>
                      <option>China</option>
                      <option>Japan</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className='flex border-t py-5'>
                <div className='relative flex gap-x-3'>
                  <div className='flex h-6 items-center'>
                    <input
                      id='incudeAddressCheck'
                      name='incudeAddressCheck'
                      type='checkbox'
                      className='h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600'
                    />
                  </div>
                  <div className='text-sm leading-6'>
                    <label
                      htmlFor='incudeAddressCheck'
                      className='font-medium text-gray-900'
                    >
                      Include property address in copy
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-10 mx-auto mb-10 bg-white shadow'>
          <div className='mx-auto border'>
            <div className='border-b p-5'>
              <h5 className='text-1xl m-0 font-bold uppercase text-gray-900'>
                Property Details
              </h5>
            </div>
            <div className='flex p-5 pb-0'>
              <div className='flex w-3/6'>
                <div className='mr-5 flex w-80 w-full items-center justify-between border p-2'>
                  <div className='ml-2 flex'>
                    <FaBed size={20} />
                    <p className='m-0 px-3'>Bedrooms</p>
                  </div>
                  <div className='flex items-center justify-center bg-gray-200 p-2'>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      -
                    </div>
                    <div className='flex items-center justify-center px-3'>
                      0
                    </div>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      +
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex w-3/6'>
                <div className='mr-5 flex w-80 w-full items-center justify-between border p-2'>
                  <div className='ml-2 flex'>
                    <FaBath size={20} />
                    <p className='m-0 px-3'>Bathrooms</p>
                  </div>
                  <div className='flex items-center justify-center bg-gray-200 p-2'>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      -
                    </div>
                    <div className='flex items-center justify-center px-3'>
                      0
                    </div>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex p-5 pb-0'>
              <div className='mb-5 flex w-3/6'>
                <div className='mr-5 flex w-80 w-full items-center justify-between border p-2'>
                  <div className='ml-2 flex'>
                    <FaCarAlt size={20} />
                    <p className='m-0 px-3'>Parking Spaces</p>
                  </div>
                  <div className='flex items-center justify-center bg-gray-200 p-2'>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      -
                    </div>
                    <div className='flex items-center justify-center px-3'>
                      0
                    </div>
                    <div className='flex cursor-pointer items-center justify-center bg-gray-600 px-2 text-white'>
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex px-5 pb-0'>
              <div className='mb-5 flex w-3/6'>
                <div className='mr-5 w-full'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Property Type
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <select
                      id='country'
                      name='country'
                      className='block w-full border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                    >
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='mb-5 flex w-3/6'>
                <div className='w-full'>
                  <label
                    htmlFor='landSize'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Land Size
                    <span className='ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'>
                      Optional
                    </span>
                  </label>
                  <div className='relative mt-2 shadow-sm'>
                    <input
                      type='text'
                      name='landSize'
                      id='landSize'
                      className='block w-full  border-0 py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                    />
                    <div className='absolute inset-y-0 right-0 flex items-center'>
                      <label htmlFor='squareMeters' className='sr-only'>
                        Square meters
                      </label>
                      <select
                        id='squareMeters'
                        name='squareMeters'
                        className='h-full border-0 bg-gray-200 py-0 pl-4 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm'
                      >
                        <option> Square meters</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex px-5 pb-0'>
              <div className='mb-5 flex  w-full'>
                <div className='w-full'>
                  <label
                    htmlFor='targetMarket'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Target market for this property?
                  </label>
                  <div className='mt-2 shadow-sm'>
                    <input
                      id='targetMarket'
                      name='targetMarket'
                      className='block w-full border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='E.g. first home buyers, inverstors, families'
                    />
                  </div>
                  <span className='text-xs text-gray-400'>0/70</span>
                </div>
              </div>
            </div>

            <div className='flex px-5 pb-0'>
              <div className='mb-5 flex  w-full'>
                <div className='w-full'>
                  <label
                    htmlFor='targetMarket'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Property features, list as many as possible. Tell us about
                    the property, what makes it special, what is nearby
                  </label>
                  <div className='mt-2 shadow-sm'>
                    <textarea
                      id='targetMarket'
                      name='targetMarket'
                      className='block w-full border-0 px-3 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6'
                      placeholder='Sentences or bullet points are fine.&#10;The more you tell us, the better the output!'
                      rows={5}
                    />
                  </div>
                  <span className='text-xs text-gray-400'>
                    0/2000{' '}
                    <span className='text-red-400'>
                      (Minimum: 100 characters)
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='mx-10 mx-auto mb-10 bg-white shadow'>
          <div className='mx-auto'>
            <div className='flex justify-between p-5'>
              <h5 className='text-1xl m-0 font-bold uppercase text-gray-900'>
                Copy length
              </h5>

              <div className='flex'>
                <div className='ml-5 flex items-center gap-x-2'>
                  <input
                    id='push-everything'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600'
                  />
                  <label
                    htmlFor='push-everything'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    150 words
                  </label>
                </div>
                <div className='ml-5 flex items-center gap-x-2'>
                  <input
                    id='push-email'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600'
                  />
                  <label
                    htmlFor='push-email'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    200 words
                  </label>
                </div>
                <div className='ml-5 flex items-center gap-x-2'>
                  <input
                    id='push-nothing'
                    name='push-notifications'
                    type='radio'
                    className='h-4 w-4 border-gray-300 text-red-600 focus:ring-red-600'
                  />
                  <label
                    htmlFor='push-nothing'
                    className='block text-sm font-semibold leading-6 text-gray-900'
                  >
                    250 words
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-end'>
          <div className='cursor-pointer bg-red-600 px-5 py-2 uppercase text-white'>
            Generate Copy
          </div>
        </div>
      </div>
    </Layout>
  );
}
