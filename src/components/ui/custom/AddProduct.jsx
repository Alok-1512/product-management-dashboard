import React, { useState, useContext } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'
import ProductContext from '../../../context/ProductContext'

const AddProduct = () => {
  const { products, setProducts } = useContext(ProductContext)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
  })
  

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5000000) {
        // 5MB limit
        setError('Image size should be less than 5MB')
        return
      }
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required'
    if (
      !formData.price ||
      isNaN(formData.price) ||
      parseFloat(formData.price) <= 0
    ) {
      return 'Please enter a valid price'
    }
    if (!formData.category.trim()) return 'Category is required'
    if (!formData.description.trim()) return 'Description is required'
    return ''
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
  
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }
  
    setProducts((prevProducts) => {
      const newId = prevProducts.length > 0 
        ? Math.max(...prevProducts.map(p => p.id)) + 1 
        : 1
      const newProduct = {
        id: newId,
        ...formData,
        price: parseFloat(formData.price),
        image: formData.image || 'placeholder-image-url.jpg',
        createdAt: new Date().toISOString()
      }
      return [...prevProducts, newProduct]
    })
  
    setFormData({
      name: '',
      price: '',
      category: '',
      description: '',
      image: null
    })
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill in the details for the new product.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="text-red-500 text-sm mt-2 mb-4">{error}</div>
          )}

          <div className="grid gap-4 py-4">
            {/* Name Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="col-span-3"
                required
              />
            </div>

            {/* Price Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price ($)
              </Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="col-span-3"
                required
                min="0.01"
              />
            </div>

            {/* Category Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Input
                id="category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="col-span-3"
                required
              />
            </div>

            {/* Description Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="col-span-3 border rounded-md p-2"
                rows="3"
                required
              />
            </div>

            {/* Image Upload Field */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input
                id="image"
                type="file"
                onChange={handleImageChange}
                className="col-span-3"
                accept="image/*"
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit" onClick={handleSubmit}>Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddProduct;
