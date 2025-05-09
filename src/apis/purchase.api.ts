import { Purchase, PurchaseListStatus } from '@/types/purchase.type'
import { SucessResponse } from '@/types/util.type'
import http from '@/utils/http'

const purChaseApi = {
  addToCart(body: { product_id: string; buy_count: number }) {
    return http.post<SucessResponse<Purchase>>(`purchases/add-to-cart`, body)
  },
  getPurChaseList(params: { status: PurchaseListStatus }) {
    return http.get<SucessResponse<Purchase[]>>(`purchases`, {
      params
    })
  }
}
export default purChaseApi
