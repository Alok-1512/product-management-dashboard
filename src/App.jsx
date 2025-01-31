/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Search, MoreVertical, Pencil, Trash2 } from 'lucide-react'
import AddProduct from '@/components/ui/custom/addProduct'
import DeleteProduct from './components/ui/custom/DeleteProduct'
import EditProduct from './components/ui/custom/EditProduct'
import PaginationComponent from './components/ui/custom/PaginationComponent'

const ProductDashboard = () => {
  const products = [
    {
      id: 1,
      name: 'Smartphone',
      sku: 'SP789',
      price: 499.99,
      category: 'Electronics',
      status: 'published',
      quantity: 100,
      supplier: 'TechWorld',
    },
    {
      id: 2,
      name: 'Laptop',
      sku: 'LT101',
      price: 899.99,
      category: 'Electronics',
      status: 'inactive',
      quantity: 25,
      supplier: 'TechWorld',
    },
    {
      id: 3,
      name: 'Tablet',
      sku: 'TB505',
      price: 199.99,
      category: 'Electronics',
      status: 'draft',
      quantity: 60,
      supplier: 'TechWorld',
    },
    {
      id: 4,
      name: 'Table',
      sku: 'TB505',
      price: 199.99,
      category: 'Furniture',
      status: 'draft',
      quantity: 60,
      supplier: 'TechWorld',
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="p-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-7">
            <CardTitle>Products</CardTitle>

            <AddProduct />
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6 space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name..."
                  className="max-w-sm pl-8"
                />
              </div>
              <div className="flex space-x-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>${product.price}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.supplier}</TableCell>
                      <TableCell>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 p-0"
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-50 flex flex-col space-y-2">
                            <EditProduct />
                            <DeleteProduct />
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <PaginationComponent />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProductDashboard
