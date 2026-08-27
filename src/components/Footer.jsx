import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">

      <div className="grid grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 lg:grid-cols-4 lg:px-12">

        <div>
          <h1 className="text-2xl font-bold">LOGO</h1>
        </div>

        <div>
          <h1 className="mb-3 text-lg font-semibold">About Us</h1>
          <p className="text-sm leading-6 text-gray-300">
            Connecting farmers, buyers, and agricultural businesses in one
            platform. Agric-Connect makes it easier to discover agricultural
            products, connect with trusted people, and grow your agricultural
            opportunities.
          </p>
        </div>

        <div>
          <h1 className="mb-3 text-lg font-semibold">Information</h1>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <a href="#">More Search</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>

        <div>
          <h1 className="mb-3 text-lg font-semibold">Contact</h1>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <p>Kampala, Uganda</p>
            <p>info@agric-connect.com</p>
            <p>+256(0) 778-738-214</p>
          </div>

          <h1 className="mb-3 text-lg font-semibold">Follow Us</h1>
        </div>

      </div>

      <div className="border-t border-gray-700 px-6 py-4 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Agric-Connect. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;