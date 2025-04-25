import * as yup from 'yup'

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
export const filterPrice = yup.object({
  price_min: yup.string().test({
    name: 'price-not-allow',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_min = value
      const { price_max } = this.parent as { price_min: string; price_max: string }
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  }),
  price_max: yup.string().test({
    name: 'price-not-allow',
    message: 'Giá không phù hợp',
    test: function (value) {
      const price_max = value
      const { price_min } = this.parent as { price_min: string; price_max: string }
      if (price_min !== '' && price_max !== '') {
        return Number(price_max) >= Number(price_min)
      }
      return price_min !== '' || price_max !== ''
    }
  })
})
export type LoginSchema = yup.InferType<typeof loginSchema>
export type RegisterSchema = yup.InferType<typeof registerSchema>
