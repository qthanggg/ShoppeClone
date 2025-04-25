import { InputHTMLAttributes } from 'react'
import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  classNameInput?: string
  classNameError?: string
  register?: UseFormRegister<any>
  rules?: RegisterOptions | undefined
}
export default function ({
  errorMessage,
  className,
  name,
  register,
  rules,
  classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm',
  classNameError = 'mt-1 text-red-600 min-h-[1rem] text-sm',
  ...rest
}: InputProps) {
  const registerResult = register && name ? register(name, rules) : {}
  return (
    <div>
      <div className={className}>
        <input className={classNameInput} {...registerResult} {...rest} />
        <div className={classNameError}>{errorMessage}</div>
      </div>
    </div>
  )
}
