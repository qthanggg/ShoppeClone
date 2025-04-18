export const saveTokentoLocalStorage = (access_token: string) => {
  localStorage.setItem('access_token', access_token)
}
export const clearAccessToken = () => {
  localStorage.removeItem('access_token')
}
export const getAccessToken = () => {
  return localStorage.getItem('access_token') || ''
}
