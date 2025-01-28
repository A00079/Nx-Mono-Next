import { axiosInstance } from '@credence/api';
import { QueryClient } from '@tanstack/react-query';
import React from 'react'

const SingleUser = async ({ params }: any) => {

  const queryClient = new QueryClient();

    const fetchUser = async () => {
        const response = await axiosInstance.get(`users/${params.id}`, {});
        return response.data;
    };

    const userData = await queryClient.fetchQuery({
        queryKey: ['user'],
        queryFn: fetchUser,
    });

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">USER NAME</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{userData.name}</h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a> */}
                {/* <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a> */}
              </div>
              <p className="leading-relaxed mb-4">{userData.company.catchPhrase}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Email</span>
                <span className="ml-auto text-gray-900">{userData.email}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Phone</span>
                <span className="ml-auto text-gray-900">{userData.phone}</span>
              </div>
              <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                <span className="text-gray-500">Website</span>
                <span className="ml-auto text-gray-900">{userData.website}</span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:h-auto h-60 object-cover my-14 bg-gray-200 object-center rounded">

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SingleUser;
