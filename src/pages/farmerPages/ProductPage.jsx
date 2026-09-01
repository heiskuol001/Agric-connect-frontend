import {useState, useEffect} from 'react'

const ProductPage = () => {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [quantity, setQuantity] = useState('')
  const [category, setCategory] = useState('')
  const [file, setFile] = useState(null)
  const [location, setLocation] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const formData = new FormData();

      formData.append('name', productName)
      formData.append('description', description)
      formData.append('price', price)
      formData.append('quantity', quantity)
      formData.append('category', category)
      formData.append('image', file)
      formData.append('location', location)

      const response = await fetch('http://localhost:3000/product/api/add', {
        method: "POST",
        credentials: 'include',
        body: formData
      })
      if (!response.ok) {
        throw new Error('failed to add product')
      }
      const data = await response.json()
      console.log('Product successfully added', data)
    } catch (error) {
      console.log('Error adding product',error)
    }
 }

  return (
<div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-4 md:p-8">

  <form
    onSubmit={handleSubmit}
    className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8"
  >

    {/* Header */}
    <div className="mb-8">
      <p className="text-sm font-medium text-blue-600 mb-1">
        Product Management
      </p>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
        Add Product
      </h1>

      <p className="text-sm text-gray-500 mt-2">
        Add your agricultural product so buyers can discover it.
      </p>
    </div>

    {/* Product Information */}
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Product Information
      </h2>

      <div className="grid gap-5">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-gray-700"
          >
            Product Name
          </label>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="e.g. Fresh Maize"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            Description
          </label>

          <textarea
            id="description"
            name="description"
            rows="4"
            placeholder="Describe your product, quality, condition, and other important details..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none resize-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Price + Quantity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="flex flex-col gap-2">
            <label
              htmlFor="price"
              className="text-sm font-medium text-gray-700"
            >
              Price
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
                UGX
              </span>

              <input
                id="price"
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full border border-gray-300 rounded-lg pl-14 pr-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="quantity"
              className="text-sm font-medium text-gray-700"
            >
              Quantity
            </label>

            <input
              id="quantity"
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

        </div>

        {/* Category */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700"
          >
            Category
          </label>

          <select
            id="category"
            name="category"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm bg-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Vegetable">Vegetable</option>
            <option value="Fruits">Fruits</option>
            <option value="Grains">Grains</option>
            <option value="Livestock">Livestock</option>
            <option value="Dairy">Dairy</option>
            <option value="Poultry">Poultry</option>
            <option value="Seeds">Seeds</option>
            <option value="Others">Others</option>
          </select>
        </div>

      </div>
    </div>

    {/* Product Image */}
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Product Image
      </h2>

      <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition">

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-600 file:font-medium hover:file:bg-blue-100"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <p className="text-xs text-gray-400 mt-3">
          Upload a clear image of your product.
        </p>

      </div>
    </div>

    {/* Location */}
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Location
      </h2>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="location"
          className="text-sm font-medium text-gray-700"
        >
          Farm / Product Location
        </label>

        <input
          id="location"
          type="text"
          name="location"
          placeholder="e.g. Kampala, Uganda"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition duration-200 shadow-sm cursor-pointer"
    >
      Add Product
    </button>

    <p className="text-center text-xs text-gray-400 mt-4">
      Make sure all product information is accurate before submitting.
    </p>

  </form>
</div>

  )
}

export default ProductPage
