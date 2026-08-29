import { useState, useEffect } from 'react'
import Clock from './Clock'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const StatusPanel = () => {
  const [productCount, setProductCount] = useState(0)

  const {user} = useContext(AuthContext)

  useEffect(() => {
    const getProductCount = async () => {
      try {
        const response = await fetch(
          'http://localhost:3000/product/api/product/count',
          {
            credentials: 'include',
          }
        )

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }

        const data = await response.json()

        console.log('Product count response:', data)

        setProductCount(data.totalProducts ?? 0)
      } catch (error) {
        console.error('Error fetching product count:', error)
      }
    }

    getProductCount()
  }, [])

  return (
<div className="m-4 w-full rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

    {/* Welcome section */}
    <div>
      <p className="text-sm font-medium text-gray-500">
        Farmer Dashboard
      </p>

      <h1 className="mt-1 text-2xl md:text-3xl font-bold text-gray-800">
        Welcome back, {user?.name}
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Here's what's happening with your farm today.
      </p>
    </div>

    {/* Right section */}
    <div className="flex items-center gap-4">

      {/* Product card */}
      <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-5 py-3 border border-blue-100">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500 text-white">
          📦
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500">
            Total Products
          </p>

          <h2 className="text-2xl font-bold text-gray-800">
            {productCount}
          </h2>
        </div>
      </div>

      {/* Clock */}
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
        <Clock />
      </div>

    </div>
  </div>
</div>
  )
}

export default StatusPanel