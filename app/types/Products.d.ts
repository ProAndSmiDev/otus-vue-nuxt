interface ProductsRate {
    rate: number
    count: number
}

interface Products {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: ProductsRate
}
