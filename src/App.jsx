/* eslint-disable no-unused-vars */
import React from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'

// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from '@/components/ui/popover'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Plus, Search, MoreVertical, Pencil, Trash2 } from 'lucide-react'
// import AddProduct from '@/components/ui/custom/addProduct'
// import DeleteProduct from './components/ui/custom/DeleteProduct'
// import EditProduct from './components/ui/custom/EditProduct'
// import PaginationComponent from './components/ui/custom/PaginationComponent'
// import ProductContext from './context/ProductContext'
import ProductContextProvider from './context/ProductContextProvider'
import ProductDashboard from './ProductDashboard'

const App = () => {

  return (
    <ProductContextProvider>
     <ProductDashboard />
    </ProductContextProvider>
  )
}

export default App
