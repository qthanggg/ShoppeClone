import HttpStatusCode from '@/constants/httpStatusCode.enum'
import axios, { AxiosError } from 'axios'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}
export function isAxiosUnprocessableEntityError<FromError>(error: unknown): error is AxiosError<FromError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}
