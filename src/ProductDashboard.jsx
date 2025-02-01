import React, { useState } from 'react'
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
import { Plus, Search, MoreVertical } from 'lucide-react'
import AddProduct from '@/components/ui/custom/addProduct'
import ProductContext from './context/ProductContext'
import PaginationComponent from './components/ui/custom/PaginationComponent'
import EditProduct from './components/ui/custom/EditProduct'
import DeleteProduct from './components/ui/custom/DeleteProduct'

const ProductDashboard = () => {
  const { products } = React.useContext(ProductContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const uniqueCategories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    filterTerm === 'All'
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        product.category === filterTerm
  )

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex space-x-2">
                <Select value={filterTerm} onValueChange={setFilterTerm}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {uniqueCategories.map((category, index) => (
                      <SelectItem key={index} value={category}>
                        {category}
                      </SelectItem>
                    ))}
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
                    <TableHead>Description</TableHead>
                    <TableHead>Image</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayedProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">
                        {product.name}
                      </TableCell>
                      <TableCell>₹{product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>
                        {product.image && (
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 object-cover"
                          />
                        )}
                      </TableCell>
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
                            <EditProduct productId={product.id} />
                            <DeleteProduct productId={product.id} />
                          </PopoverContent>
                        </Popover>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <PaginationComponent
              currentPage={currentPage}
              totalPages={totalPages}
              onNext={goToNextPage}
              onPrevious={goToPreviousPage}
              onPageChange={goToPage}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProductDashboard
