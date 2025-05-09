type UserRole = 'User' | 'Admin'
export interface User {
  _id: string
  roles: UserRole[]
  email: string
  name: string
  date_of_birth: string | null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}
