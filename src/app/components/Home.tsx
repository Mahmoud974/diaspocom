import React from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-green-700 to-green-600 text-white pb-40 rounded-3xl m-10">
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold text-orange-500">DIASPORACOM</h1>
          <ul className="flex space-x-6 items-center font-bold">
            <li>Login</li>
            <li>
              <button className="bg-orange-500 px-3 py-2 rounded-full">
                Sign Up
              </button>
            </li>
          </ul>
        </nav>

        <section className="container mx-auto text-center mt-10">
          <h1 className="text-3xl font-bold mb-8">
            Diasporama Comores : votre job, votre avenir,
            <br /> pour vous et les Comores.
          </h1>

          {/* Barre de recherche */}
          <div className="flex justify-center items-center bg-white p-4 rounded-md shadow-md max-w-4xl mx-auto">
            <input
              type="text"
              placeholder="Job Title or Keywords"
              className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 text-gray-700"
            />
            <select className="border border-gray-300 rounded-md px-3 py-2 mr-2 text-gray-700">
              <option>All Location</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 mr-2 text-gray-700">
              <option>All Category</option>
            </select>
            <button className="bg-orange-500 w-2/3 text-white px-4 py-2 rounded-md font-bold">
              Find Jobs
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
