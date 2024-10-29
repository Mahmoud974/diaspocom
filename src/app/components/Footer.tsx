// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-orange-500 text-2xl font-bold">DIASPORACOM</h2>
          <p className="mt-4 text-sm">
            Jobb is the largest talent platform in Southeast Asia and Taiwan for
            career development and recruitment.
          </p>
        </div>

        {/* Employer Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Employer</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Vacancy Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            Find Vacancy Based On
          </h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Job Location
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Company Name
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white font-semibold mb-4">Address</h3>
          <p className="mb-2">hello@jobbb.com</p>
          <p>bangalore India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
