import AsideFilter from '@/page/ProductList/AsideFilter'
import Product from '@/page/ProductList/Product/Product'

import SortProductList from '@/page/ProductList/SortProductList'

export default function ProductList() {
  return (
    <div className='max-w-[1440px] mx-auto px-4'>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-3'>
          <AsideFilter />
        </div>
        <div className='col-span-9'>
          <SortProductList />
          <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {Array(30)
              .fill(0)
              .map((_, index) => (
                <div className='col-span-1' key={index}>
                  <Product />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
