import * as yup from 'yup'

export interface FormValues {
  email: string
  password: string
  confirm_password?: string
}

export const loginSchema = yup.object({
  email: yup
    .string()
    .email('Email not valid')
    .required('Email is required')
    .min(5, 'Length from 5 - 160 characters')
    .max(160, 'Length from 5 - 160 characters'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Length from 6 - 160 characters')
    .max(160, 'Length from 6 - 160 characters')
})

export const registerSchema = loginSchema.shape({
  confirm_password: yup
    .string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Confirm password not match')
})

export type LoginSchema = yup.InferType<typeof loginSchema>
export type RegisterSchema = yup.InferType<typeof registerSchema>
