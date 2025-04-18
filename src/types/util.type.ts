export interface ErrorResponse<Data> {
  message: string
  data?: Data
}
export interface SucessResponse<Data> {
  message: string
  data: Data
}
