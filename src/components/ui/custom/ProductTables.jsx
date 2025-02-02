import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { MoreVertical } from 'lucide-react'
import EditProduct from './EditProduct'
import DeleteProduct from './DeleteProduct'

const ProductTable = ({ products }) => {
  return (
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
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>₹{product.price.toFixed(2)}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>
                <img src={product.image?.trim() || 'default-image.png'} alt={product.name} className="h-10 w-10 object-cover" />
              </TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </button>
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
  )
}

export default ProductTable
