import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { MoreVertical } from 'lucide-react'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'
import { Button } from '@/components/ui/button'

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => (
        <Card key={product.id} className="shadow-md border rounded-lg overflow-hidden">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover"
          />

          {/* Header with Title and Actions */}
          <CardHeader className="flex flex-row justify-between items-center p-3 pb-0">
            <CardTitle className="text-base font-semibold">{product.name}</CardTitle>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="p-1">
                  <MoreVertical className="h-4 w-4 text-gray-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 flex flex-col space-y-2">
                <EditProduct productId={product.id} />
                <DeleteProduct productId={product.id} />
              </PopoverContent>
            </Popover>
          </CardHeader>

          {/* Card Content */}
          <CardContent className="p-3 space-y-1">
            <p className="text-xs text-gray-500 font-medium">
              {product.category}
            </p>
            <p className="text-sm text-gray-600 line-clamp-4">
              {product.description}
            </p>
            <p className="text-lg font-semibold text-black mt-2">₹{product.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ProductGrid
