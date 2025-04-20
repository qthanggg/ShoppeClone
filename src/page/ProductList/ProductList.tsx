import categoryApi from '@/apis/category.api'
import productApi from '@/apis/product.api'
import Pagination from '@/components/Pagination'
import useQueryParams from '@/hook/useQueryParams'
import AsideFilter from '@/page/ProductList/AsideFilter'
import Product from '@/page/ProductList/Product/Product'
import SortProductList from '@/page/ProductList/SortProductList'
import { ProductListConfig } from '@/types/product.type'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { omitBy, isUndefined } from 'lodash'
export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

export default function ProductList() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      // cái nào không có thì không truyền
      page: queryParams.page || '1',
      limit: queryParams.limit || '4',
      exclude: queryParams.exclude,
      name: queryParams.name,
      order: queryParams.order,
      sort_by: queryParams.sort_by,
      price_max: queryParams.price_max,
      price_min: queryParams.price_min,
      rating_filter: queryParams.rating_filter,
      category: queryParams.category
    },
    isUndefined
  )
  const { data: productDatas } = useQuery({
    queryKey: ['products', queryParams],
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
    <div className='max-w-[1440px] mx-auto px-4  py-6'>
      <div className='max-w-[1440px]'>
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
