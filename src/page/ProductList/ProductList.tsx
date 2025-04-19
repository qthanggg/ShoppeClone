import productApi from '@/apis/product.api'
import useQueryParams from '@/hook/useQueryParams'
import AsideFilter from '@/page/ProductList/AsideFilter'
import Product from '@/page/ProductList/Product/Product'

import SortProductList from '@/page/ProductList/SortProductList'
import { useQuery } from '@tanstack/react-query'

export default function ProductList() {
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => {
      return productApi.getProducts(queryParams)
    }
  })
  return (
    <div className='max-w-[1440px] mx-auto px-4'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-3'>
          <AsideFilter />
        </div>
        <div className='col-span-9'>
          <SortProductList />
          <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {data &&
              data?.data.data.products.map((product) => (
                <div className='col-span-1' key={product._id}>
                  <Product product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
