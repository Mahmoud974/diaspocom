import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt, FaPlusCircle } from "react-icons/fa";

const JobList: React.FC = () => {
  return (
    <div className="text-center container mx-auto px-6 mt-10">
      <div className="mb-12">
        <p className="text-orange-500">Choose Categories</p>
        <p className="text-3xl font-bold">Choose Categories</p>
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {[...Array(20)].map((_, index) => (
          <Link key={index} href="/profile">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-64 text-center relative cursor-pointer hover:bg-gray-50">
              {/* Badges */}
              <div className="absolute top-2 left-2">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  FEATURED
                </span>
              </div>
              <div className="absolute top-2 right-2">
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">
                  Part Time
                </span>
              </div>

              {/* Image */}
              <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4"></div>

              {/* Job Title & Author */}
              <h3 className="text-lg font-semibold">Developers Full Stack</h3>
              <p className="text-green-500 font-medium">Oscar Wilde</p>

              {/* Tags */}
              <div className="flex justify-center space-x-2 my-3">
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  App Work
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  CSS3
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                  Php
                </span>
                <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                  <FaPlusCircle className="mr-1" /> +1
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-center text-gray-500 text-sm my-2">
                <FaMapMarkerAlt className="mr-1" />
                <span>30th Ave, Long Island, NY</span>
              </div>

              {/* Browse Job Link stylisé */}
              <p className="text-green-500 font-semibold hover:underline mt-2">
                Browse Job »
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default JobList;
