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
      image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 6,
      name: 'DSLR Camera',
      price: 54999,
      category: 'Photography',
      description:
        'Professional DSLR camera with 24MP sensor, 4K video recording, and built-in WiFi.',
      image: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHNscnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 7,
      name: 'Electric Toothbrush',
      price: 2999,
      category: 'Personal Care',
      description:
        'Rechargeable electric toothbrush with multiple cleaning modes and soft bristles.',
      image: 'https://images.unsplash.com/photo-1559591937-abc5678da6ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWMlMjB0b290aGJydXNofGVufDB8fDB8fHww',
    },
    {
      id: 8,
      name: 'Running Shoes',
      price: 4999,
      category: 'Footwear',
      description:
        'Lightweight running shoes with memory foam soles, perfect for Indian roads.',
      image: 'https://images.unsplash.com/photo-1562183241-840b8af0721e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJ1bm5pbmclMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 9,
      name: 'Backpack',
      price: 1999,
      category: 'Accessories',
      description:
        'Spacious backpack with multiple compartments, ideal for college students and travelers.',
      image: 'https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D',
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
      image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwY29uc29sZXxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 12,
      name: 'E-Reader',
      price: 8999,
      category: 'Electronics',
      description:
        'Lightweight e-reader with adjustable warm lighting and support for Indian languages.',
      image: 'https://images.unsplash.com/photo-1456953180671-730de08edaa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGUlMjByZWFkZXJ8ZW58MHx8MHx8fDA%3D',
    },
    {
      id: 13,
      name: 'Fitness Band',
      price: 2499,
      category: 'Wearables',
      description:
        'Slim fitness tracker with step count, heart rate monitoring, and yoga tracking mode.',
      image: 'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMHdhdGNofGVufDB8fDB8fHww',
    },
    {
      id: 14,
      name: 'Smart Thermostat',
      price: 9999,
      category: 'Home Automation',
      description:
        'Smart AC thermostat with remote control via mobile app, great for Indian summers.',
      image: 'https://images.unsplash.com/photo-1596522681672-a5125bcb412a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhlcm1vc3RhdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 15,
      name: '4K Smart TV',
      price: 69999,
      category: 'Electronics',
      description:
        'Ultra HD 4K smart TV with OTT apps, voice control, and Dolby Atmos sound.',
      image: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnQlMjB0dnxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 16,
      name: 'Electric Kettle',
      price: 1499,
      category: 'Kitchen Appliances',
      description:
        '1.5L stainless steel electric kettle with auto shut-off and fast boiling feature.',
      image: 'https://images.unsplash.com/photo-1647619124290-10fb9273b4b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZWN0cmljJTIwa2V0dGxlfGVufDB8fDB8fHww',
    },
    {
      id: 17,
      name: 'LED Desk Lamp',
      price: 1299,
      category: 'Home Office',
      description:
        'Adjustable LED desk lamp with three brightness levels, ideal for study and work.',
      image: 'https://plus.unsplash.com/premium_photo-1672166939591-b2547bd18fca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fExFRCUyMGRlc2slMjBsYW1wfGVufDB8fDB8fHww',
    },
  ])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
