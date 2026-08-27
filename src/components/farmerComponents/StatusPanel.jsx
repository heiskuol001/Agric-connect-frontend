import { useState, useEffect } from 'react'
import Clock from './Clock'

const StatusPanel = () => {
  const [productCount, setProductCount] = useState(0)

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
    <div className="m-2 min-h-30 w-full grid grid-cols-2 md:grid-cols-3 items-center justify-around">
      <div>
        <h2 className="text-2xl font-bold">{productCount}</h2>
        <p>Total Products</p>
      </div>
      <div>
        <Clock />
      </div>
    </div>
  )
}

export default StatusPanel