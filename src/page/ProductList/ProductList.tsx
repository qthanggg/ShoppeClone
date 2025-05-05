import categoryApi from '@/apis/category.api'
import productApi from '@/apis/product.api'
import Pagination from '@/components/Pagination'
import useQueryConfig from '@/hook/useQueryConfig'
import AsideFilter from '@/page/ProductList/components/AsideFilter'
import Product from '@/page/ProductList/components/Product/Product'
import SortProductList from '@/page/ProductList/components/SortProductList/SortProductList'
import { ProductListConfig } from '@/types/product.type'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function ProductList() {
  const queryConfig: QueryConfig = useQueryConfig()
  const { data: productDatas } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    placeholderData: keepPreviousData // hold data not re render
  })
  const { data: categoriesData } = useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })
  return (
    <div className='max-w-[1200px] mx-auto px-4  py-6'>
      <div className='max-w-[1200px]'>
        {productDatas && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter
                categoriesData={Array.isArray(categoriesData?.data.data) ? categoriesData.data.data : []}
                queryConfig={queryConfig}
              />
            </div>
            <div className='col-span-9'>
              <SortProductList queryConfig={queryConfig} pageSize={productDatas.data.data.pagination.page_size} />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
                {productDatas.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination queryConfig={queryConfig} pageSize={productDatas.data.data.pagination.page_size} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
