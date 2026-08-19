import React from 'react'
import pics from '../utils/photo'

const SubHero = () => {
    const cards = [
        {
            title: 'Market Insights',
            description: 'Get access to the latest market trends and insights to make informed decisions for your agricultural business.',
            image: pics[1]
        },
        {
            title: 'Networking Opportunities',
            description: 'Connect with other farmers, buyers, and agricultural businesses to expand your network and grow your business.',
            image: pics[4]
        },
        {
            title: 'Product Discovery',
            description: 'Discover new agricultural products and services that can help you improve your operations and increase your profits.',
            image: pics[3]
        },
    ]
  return (
    <div className='flex  flex-col items-center justify-center bg-slate-50'>
          <div className='flex items-center justify-around flex-col p-5'>
              <h2 className='font-semibold text-green-700'>WHAT WE OFFER</h2>
              <h1 className='font-extrabold font-mono text-lg'>BETTER MARKET OPPORTUNITIES</h1>
              <h2 className='text-center italic'>Discover new opportunities and expand your agricultural business</h2>
      </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
              {cards.map((card, index) => (
                  <div key={index} className='w-full h-64 bg-white shadow-md rounded-md flex items-center justify-center p-4'>
                      <div>
                            <img src={card.image} alt={card.title} className='w-20 h-20 object-cover rounded-md mb-4' />
                          <h3 className='font-bold text-lg'>{card.title}</h3>
                          <p className='text-gray-600'>{card.description}</p>
                      </div>
                  </div>
              ))}
          </div>
    </div>
  )
}

export default SubHero
