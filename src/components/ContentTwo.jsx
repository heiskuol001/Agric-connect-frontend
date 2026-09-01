// import React from 'react'
import pics from '../utils/photo'

const ContentTwo = () => {
  return (
<div className="w-full min-h-[calc(100vh-4rem)] bg-white px-6 py-10 md:px-12">

  <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* Left Section */}
    <div className="max-w-xl">

      <p className="text-sm font-semibold tracking-wide uppercase text-blue-600 mb-4">
        Agric Connect Marketplace
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
        Connecting farmers with
        <span className="block text-blue-600">
          better markets.
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        Discover agricultural products from farmers across the
        community. Browse available products, view pricing and
        connect directly with sellers.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg
          hover:bg-blue-700 transition duration-200 shadow-sm cursor-pointer"
        >
          Browse Products
        </button>

        <button
          className="px-6 py-3 border border-gray-300 text-gray-700
          font-medium rounded-lg hover:bg-gray-50 transition duration-200 cursor-pointer"
        >
          Learn More
        </button>

      </div>

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            500+
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Farmers
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            1K+
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Products
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900">
            20+
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Categories
          </p>
        </div>

      </div>

    </div>


    {/* Right Section */}
    <div className="relative">

      {/* Main Image */}
      <div
        className="h-[480px] w-full rounded-2xl bg-cover bg-center shadow-xl"
        style={{
          backgroundImage: `url(${pics[9]})`
        }}
      />

      {/* Information Card */}
      <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">

        <h2 className="text-xl font-bold text-gray-900">
          A marketplace built for agriculture
        </h2>

        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          Farmers can list their products and reach potential
          buyers, while buyers can discover agricultural products
          based on availability and location.
        </p>

        <div className="mt-5 flex items-center gap-6 text-sm">

          <div>
            <p className="font-semibold text-gray-900">
              Local
            </p>
            <p className="text-gray-500">
              Products
            </p>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div>
            <p className="font-semibold text-gray-900">
              Direct
            </p>
            <p className="text-gray-500">
              Connections
            </p>
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div>
            <p className="font-semibold text-gray-900">
              Simple
            </p>
            <p className="text-gray-500">
              Discovery
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>

  )
}

export default ContentTwo
