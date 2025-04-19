import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <Link to='/'>
      <div className='overflow-hidden rounded-sm bg-white shadow transition-transform duration-100 hover:translate-y-[-0.04rem] hover:shadow-md'>
        <div className='relative w-full pt-[100%]'>
          <img
            src='https://via.placeholder.com/150'
            alt='Product name'
            className='absolute top-0 left-0 h-full w-full bg-white object-cover'
          />
        </div>
        <div className='overflow-hidden p-2'>
          <div className='min-h-[2rem] text-xs line-clamp-2'>Tên sản phẩm mẫu</div>
          <div className='mt-3 flex items-center'>
            <div className='max-w-[50%] truncate text-gray-500 line-through'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>999.000</span>
            </div>
            <div className='ml-1 truncate text-orange'>
              <span className='text-xs'>₫</span>
              <span className='text-sm'>499.000</span>
            </div>
          </div>
          <div className='mt-3 flex items-center justify-end'>
            <div className='flex items-center'>
              {/* Placeholder for stars */}
              <span className='text-yellow-400'>★★★★★</span>
            </div>
            <div className='ml-2 text-sm'>
              <span>1.2k</span>
              <span className='ml-1'>Đã bán</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
