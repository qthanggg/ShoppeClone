import { User } from '@/types/user.type'
import { SucessResponse } from '@/types/util.type'

export type AuthResponse = SucessResponse<{
  access_token: string
  expires: string
  refreshToken: string
  user: User
}>
