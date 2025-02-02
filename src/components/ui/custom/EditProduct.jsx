import React, { useState, useContext, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pencil } from 'lucide-react'
import ProductContext from '../../../context/ProductContext'

const EditProduct = ({ productId }) => {
  const { products, setProducts } = useContext(ProductContext)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    image: null,
  })

  useEffect(() => {
    if (open) {
      const product = products.find((p) => p.id === productId)
      if (product) {
        setFormData({
          name: product.name,
          price: product.price.toString(),
          category: product.category,
          description: product.description,
          image: product.image,
        })
      }
    }
  }, [open, productId, products])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5000000) {
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

    try {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === productId
            ? {
                ...product,
                ...formData,
                price: parseFloat(formData.price),
                image: formData.image || product.image,
              }
            : product
        )
      )

      setOpen(false)
    } catch (err) {
      setError('Failed to update product. Please try again.')
      console.error('Error updating product:', err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full justify-start">
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to the product here.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <div className="text-red-500 text-sm mt-2 mb-4">{error}</div>
          )}

          <div className="grid gap-4 py-4">
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
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price 
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
              />
            </div>

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
              />
            </div>

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
              />
            </div>

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
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditProduct
