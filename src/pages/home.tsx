import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import LabelIcon from '@/components/icons/labelIcon'
import { Separator } from '@/components/ui/separator'
import { Card, CardTitle, CardHeader, CardContent } from '@/components/ui/card'

interface Product {
  id: number
  title: string
  price: number
  category: string
  image: string
  quantity: number
}

const initialCart: Product[] = [
  {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    quantity: 2,
  },
  {
    id: 13,
    title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
    price: 599,
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
    quantity: 1,
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    category: 'jewelery',
    quantity: 3,
  },
]

const HomePage = () => {
  const [contextProducts] = useState({
    products: initialCart,
    startedDate: null,
    startDate: () => {},
    resetDate: () => {},
    addProduct: (product: Product) => {},
    updateProduct: (product: Product) => {},
    deleteProduct: (productId: Product['id']) => {},
    clearProducts: () => {},
  })

  return (
    <div className="flex h-full w-full items-center justify-center space-x-2">
      <Card>
        <CardHeader>
          <CardTitle>My Cart</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-3">
          <section className="flex flex-col space-y-3 border-gray-200 dark:border-gray-800">
            {contextProducts.products.map((product) => (
              <article
                key={product.id}
                className="flex space-x-2 rounded-md border border-gray-200 px-3 py-2 dark:border-gray-800"
              >
                <div className="flex flex-row items-center space-x-5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-12 w-12 flex-shrink-0"
                  />
                  <div className="flex flex-col space-y-2">
                    <h3 className="inline-block w-96 truncate">{product.title}</h3>
                    <Badge className="bg-secondary text-primary hover:bg-secondary hover:text-primary w-fit space-x-2">
                      <LabelIcon width={10} className="mr-1" /> {product.category}
                    </Badge>
                    <Separator className="my-3" />
                    <div className="flex flex-row items-center justify-between">
                      <div className="flex flex-row items-center space-x-2">
                        <Button size="sm">Eliminar</Button>
                        <div className="border-secondary flex items-center space-x-2 rounded-lg border">
                          <Button size="sm" variant="ghost" className="rounded-none border-r">
                            -
                          </Button>
                          <p className="p-1 text-sm">{product.quantity}</p>
                          <Button size="sm" variant="ghost" className="rounded-none border-l">
                            +
                          </Button>
                        </div>
                      </div>
                      <p>${(product.price * product.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
          <Separator className="my-3" />
          <div className="flex flex-row items-center justify-between">
            <h3>Total:</h3>
            <p>
              $
              {contextProducts.products
                .reduce((acc, product) => acc + product.price * product.quantity, 0)
                .toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default HomePage
