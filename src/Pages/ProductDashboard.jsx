import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'
import AddProduct from '../components/ui/custom/AddProduct'
import ProductContext from '../context/ProductContext'
import PaginationComponent from '../components/ui/custom/PaginationComponent'
import ProductTable from '../components/ui/custom/ProductTables'
import { useMediaQuery } from 'react-responsive'
import ProductGrid from '../components/ui/custom/ProductGrid'

const ProductDashboard = () => {
  const { products } = React.useContext(ProductContext)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterTerm, setFilterTerm] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const uniqueCategories = [
    'All',
    ...new Set(products.map((product) => product.category)),
  ]

  const filteredProducts = products
    .filter((product) =>
      filterTerm === 'All'
        ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
        : product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          product.category === filterTerm
    )
    .reverse()

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
      <div className="">
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
            {isMobile ? (
              <ProductGrid products={displayedProducts} />
            ) : (
              <div className="rounded-md border">
                <ProductTable products={displayedProducts} />
              </div>
            )}

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
