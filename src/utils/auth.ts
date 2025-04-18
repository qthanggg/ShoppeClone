import { User } from '@/types/user.type'

export const setTokentoLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const clearLS = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}
export const getAccessToken = () => {
  return localStorage.getItem('access_token') || ''
}
export const getProfile = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}
export const setProfile = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile))
}
