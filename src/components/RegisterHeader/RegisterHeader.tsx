import { Link, useMatch } from 'react-router-dom'

export default function RegisterHeader() {
  const match = useMatch('/register')
  const isRegister = Boolean(match)
  return (
    <header className='py-5'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex items-end'>
          <Link to='/' className='h8 lg:h-11'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/2560px-Shopee.svg.png'
              alt='logo'
              className='h-8 lg:h-11'
            />
          </Link>
          <div className='ml-5 text-xl lg:text-2xl '>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}
