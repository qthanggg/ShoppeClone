import { Category } from '@/types/category.type'
import { SucessResponse } from '@/types/util.type'
import http from '@/utils/http'

const categoryApi = {
  getCategories() {
    return http.get<SucessResponse<Category>>('/categories')
  }
}
export default categoryApi
