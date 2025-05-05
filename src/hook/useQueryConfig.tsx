import useQueryParams from '@/hook/useQueryParams'
import { ProductListConfig } from '@/types/product.type'
import { isUndefined, omitBy } from 'lodash'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function useQueryConfig() {
  const queryParams: QueryConfig = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      // cái nào không có thì không truyền
      page: queryParams.page || '1',
      limit: queryParams.limit || '8',
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
  return queryConfig
}
