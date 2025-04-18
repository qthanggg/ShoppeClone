import type { RegisterOptions, UseFormRegister } from 'react-hook-form'
interface InputProps {
  type?: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions | undefined
  autoComplete?: string
}
export default function ({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete
}: InputProps) {
  return (
    <div>
      <div className={className}>
        <input
          type={type}
          className='p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, rules)}
        />
        <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errorMessage}</div>
      </div>
    </div>
  )
}
