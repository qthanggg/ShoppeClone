import { AuthResponse } from '@/types/auth.type'
import http from '@/utils/http'

// export const registerAccount = (body: { email: string; password: string }) => {
//   return http.post<AuthResponse>('/register', body)
// }
// export const login = (body: { email: string; password: string }) => {
//   return http.post<AuthResponse>('/login', body)
// }
// export const logout = () => {
//   return http.post('/logout ')
// }

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  },
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  },
  logout() {
    return http.post('/logout ')
  }
}
export default authApi
