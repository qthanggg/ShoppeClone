import { ProductList, ProductListConfig } from '@/types/product.type'
import { SucessResponse } from '@/types/util.type'
import http from '@/utils/http'

const productApi = {
  getProducts(params: ProductListConfig) {
    return http.get<SucessResponse<ProductList>>('/products', {
      params
    })
  },
  getProductDetails(id: string) {
    return http.get<SucessResponse<ProductList>>(`/products/${id}`)
  }
}
export default productApi
