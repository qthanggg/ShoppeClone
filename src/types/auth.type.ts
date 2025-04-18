import { User } from '@/types/user.type'
import { Response } from '@/types/util.type'

export type AuthResponse = Response<{
  access_token: string
  expires: string
  refreshToken: string
  user: User
}>
