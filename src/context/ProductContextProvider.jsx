import React from 'react'
import ProductContext from './ProductContext'

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: 'Smartphone',
      price: 59999,
      category: 'Electronics',
      description:
        'Latest 5G smartphone with AMOLED display and flagship camera features, perfect for Indian users.',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    },
    {
      id: 2,
      name: 'Laptop',
      price: 99999,
      category: 'Electronics',
      description:
        'Powerful laptop for professionals and gamers, featuring Intel i7 processor and high-speed SSD.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    },
    {
      id: 3,
      name: 'Wireless Earbuds',
      price: 3999,
      category: 'Accessories',
      description:
        'Truly wireless earbuds with deep bass, long battery life, and sweat-resistant design for workouts.',
      image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947',
    },
    {
      id: 4,
      name: 'Smartwatch',
      price: 12999,
      category: 'Wearables',
      description:
        'Feature-packed smartwatch with SpO2 monitoring, step tracking, and Hindi language support.',
      image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b',
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      price: 4999,
      category: 'Audio',
      description:
        'Portable Bluetooth speaker with deep bass, IPX7 waterproof rating, and long battery life.',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1b',
    },
    {
      id: 6,
      name: 'DSLR Camera',
      price: 54999,
      category: 'Photography',
      description:
        'Professional DSLR camera with 24MP sensor, 4K video recording, and built-in WiFi.',
      image: 'https://images.unsplash.com/photo-1519183071298-a2962d048cb0',
    },
    {
      id: 7,
      name: 'Electric Toothbrush',
      price: 2999,
      category: 'Personal Care',
      description:
        'Rechargeable electric toothbrush with multiple cleaning modes and soft bristles.',
      image: 'https://images.unsplash.com/photo-1588776814546-1c87c6a8bb15',
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 4999,
      category: 'Footwear',
      description:
        'Lightweight running shoes with memory foam soles, perfect for Indian roads.',
      image: 'https://images.unsplash.com/photo-1528701800488-621f29e3c0f3',
    },
    {
      id: 9,
      name: 'Backpack',
      price: 1999,
      category: 'Accessories',
      description:
        'Spacious backpack with multiple compartments, ideal for college students and travelers.',
      image: 'https://images.unsplash.com/photo-1591035897812-31c3c9e8a1a7',
    },
    {
      id: 10,
      name: 'Coffee Maker',
      price: 4999,
      category: 'Kitchen Appliances',
      description:
        'Automatic coffee maker with frothing feature for making cappuccino and filter coffee.',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
    },
    {
      id: 11,
      name: 'Gaming Console',
      price: 44999,
      category: 'Electronics',
      description:
        'Next-gen gaming console with immersive graphics, high FPS, and multiplayer support.',
      image: 'https://images.unsplash.com/photo-1606813901444-6f6a7a6ef3f4',
    },
    {
      id: 12,
      name: 'E-Reader',
      price: 8999,
      category: 'Electronics',
      description:
        'Lightweight e-reader with adjustable warm lighting and support for Indian languages.',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c',
    },
    {
      id: 13,
      name: 'Fitness Band',
      price: 2499,
      category: 'Wearables',
      description:
        'Slim fitness tracker with step count, heart rate monitoring, and yoga tracking mode.',
      image: 'https://images.unsplash.com/photo-1519861531864-7e2c6b7c8a24',
    },
    {
      id: 14,
      name: 'Smart Thermostat',
      price: 9999,
      category: 'Home Automation',
      description:
        'Smart AC thermostat with remote control via mobile app, great for Indian summers.',
      image: 'https://images.unsplash.com/photo-1582719478250-1c4a2b9bda8e',
    },
    {
      id: 15,
      name: '4K Smart TV',
      price: 69999,
      category: 'Electronics',
      description:
        'Ultra HD 4K smart TV with OTT apps, voice control, and Dolby Atmos sound.',
      image: 'https://images.unsplash.com/photo-1587825140400-7ef467c5a9bf',
    },
    {
      id: 16,
      name: 'Electric Kettle',
      price: 1499,
      category: 'Kitchen Appliances',
      description:
        '1.5L stainless steel electric kettle with auto shut-off and fast boiling feature.',
      image: 'https://images.unsplash.com/photo-1582719478148-9f007689e2f4',
    },
    {
      id: 17,
      name: 'LED Desk Lamp',
      price: 1299,
      category: 'Home Office',
      description:
        'Adjustable LED desk lamp with three brightness levels, ideal for study and work.',
      image: 'https://images.unsplash.com/photo-1582719478250-1c4a2b9bda8e',
    },
  ])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
