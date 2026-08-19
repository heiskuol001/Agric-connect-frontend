import React from "react";
import pics from "../utils/photo";
import Button from "./Button";

const ContentOne = () => {
  return (
    <section className="grid grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2 md:px-10 lg:px-16">

      <div className="group overflow-hidden rounded-2xl">
        <img
          src={pics[5]}
          alt="Farmer working with a tractor"
          className="h-[320px] w-full object-cover transition-transform duration-500 group-hover:scale-110 md:h-[420px]"
        />
      </div>

      <div className="flex flex-col items-start">

        <span className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
          Agriculture • Innovation • Growth
        </span>

        <h1 className="font-poppins text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
          Empowering Farmers.{" "}
          <span className="text-green-700">Connecting Markets.</span>{" "}
          Growing Communities.
        </h1>

        <p className="mt-5 max-w-2xl font-inter text-base leading-7 text-gray-600 md:text-lg">
          Agric-Connect connects farmers with buyers while providing practical
          agricultural knowledge, expert advice, market information, and useful
          tools to help farmers make informed decisions, improve their farming
          practices, access better market opportunities, increase productivity,
          and grow sustainable agricultural businesses.
        </p>

        <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button buttonName="Learn More" />
          <Button buttonName="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default ContentOne;