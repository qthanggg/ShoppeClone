import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white text-gray-700 text-sm border-t'>
      <div className='container mx-auto px-4 py-8'>
        {/* Main Footer Sections */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Customer Service Section */}
          <div>
            <h3 className='font-medium text-gray-800 mb-3'>DỊCH VỤ KHÁCH HÀNG</h3>
            <ul className='space-y-2'>
              {[
                'Trung Tâm Trợ Giúp Shopee',
                'Shopee Blog',
                'Shopee Mall',
                'Hướng Dẫn Mua Hàng/Đặt Hàng',
                'Hướng Dẫn Bán Hàng',
                'Ví ShopeePay',
                'Shopee Xu',
                'Đơn Hàng',
                'Trả Hàng/Hoàn Tiền',
                'Liên Hệ Shopee',
                'Chính Sách Bảo Hành'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href='#' className='hover:text-orange-500'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Shopee Section */}
          <div>
            <h3 className='font-medium text-gray-800 mb-3'>SHOPEE VIỆT NAM</h3>
            <ul className='space-y-2'>
              {[
                'Về Shopee',
                'Tuyển Dụng',
                'Điều Khoản Shopee',
                'Chính Sách Bảo Mật',
                'Shopee Mall',
                'Kênh Người Bán',
                'Flash Sale',
                'Tiếp Thị Liên Kết',
                'Liên Hệ Truyền Thông'
              ].map((item, idx) => (
                <li key={idx}>
                  <a href='#' className='hover:text-orange-500'>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment & Shipping */}
          <div>
            <h3 className='font-medium text-gray-800 mb-3'>THANH TOÁN</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[...Array(6)].map((_, i) => (
                <div key={i} className='border p-1 rounded flex items-center justify-center'>
                  <img src='https://via.placeholder.com/40x30' alt={`Payment ${i}`} className='h-[30px] w-[40px]' />
                </div>
              ))}
            </div>

            <h3 className='font-medium text-gray-800 mt-6 mb-3'>ĐƠN VỊ VẬN CHUYỂN</h3>
            <div className='grid grid-cols-3 gap-2'>
              {[...Array(9)].map((_, i) => (
                <div key={i} className='border p-1 rounded flex items-center justify-center'>
                  <img src='https://via.placeholder.com/40x30' alt={`Shipping ${i}`} className='h-[30px] w-[40px]' />
                </div>
              ))}
            </div>
          </div>

          {/* Follow Shopee */}
          <div>
            <h3 className='font-medium text-gray-800 mb-3'>THEO DÕI SHOPEE</h3>
            <ul className='space-y-2'>
              {['Facebook', 'Instagram', 'LinkedIn'].map((platform, idx) => (
                <li key={idx}>
                  <a href='#' className='flex items-center hover:text-orange-500'>
                    <div className='w-5 h-5 mr-2 flex items-center justify-center'>
                      <img src='https://via.placeholder.com/20x20' alt={platform} className='w-5 h-5' />
                    </div>
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className='font-medium text-gray-800 mb-3'>TẢI ỨNG DỤNG SHOPEE</h3>
            <div className='flex space-x-2 mb-2'>
              <div className='w-24 h-24'>
                <img src='https://via.placeholder.com/96x96' alt='QR Code' className='w-24 h-24 border' />
              </div>
              <div className='flex flex-col justify-between'>
                {['App Store', 'Google Play', 'AppGallery'].map((store, idx) => (
                  <a key={idx} href='#' className='border rounded p-1 flex items-center space-x-1'>
                    <img src='https://via.placeholder.com/20x20' alt={store} className='w-5 h-5' />
                    <span className='text-xs'>{store}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t my-8' />

        {/* Copyright */}
        <div className='text-center text-xs text-gray-600'>
          <p>© 2025 Shopee. Tất cả các quyền được bảo lưu.</p>

          <div className='mt-4 mb-6'>
            <p className='mb-2'>Quốc gia &amp; Khu vực:</p>
            <div className='flex flex-wrap justify-center gap-2'>
              {[
                'Singapore',
                'Indonesia',
                'Thái Lan',
                'Malaysia',
                'Việt Nam',
                'Philippines',
                'Brazil',
                'México',
                'Colombia',
                'Chile',
                'Đài Loan'
              ].map((country, idx) => (
                <span key={idx} className='inline-flex items-center'>
                  <a href='#' className='hover:text-orange-500'>
                    {country}
                  </a>
                  {idx !== 10 && <span className='mx-1 text-gray-400'>|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className='flex flex-wrap justify-center gap-4 text-xs mb-6'>
          {['CHÍNH SÁCH BẢO MẬT', 'QUY CHẾ HOẠT ĐỘNG', 'CHÍNH SÁCH VẬN CHUYỂN', 'CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN'].map(
            (policy, idx) => (
              <React.Fragment key={idx}>
                <a href='#' className='hover:text-orange-500'>
                  {policy}
                </a>
                {idx !== 3 && <span className='text-gray-300'>|</span>}
              </React.Fragment>
            )
          )}
        </div>

        {/* Certification Logos */}
        <div className='flex justify-center space-x-4 mb-6'>
          {[120, 120, 40].map((w, idx) => (
            <img
              key={idx}
              src={`https://via.placeholder.com/${w}x40`}
              alt={`Certification ${idx + 1}`}
              className={`h-10 ${w === 40 ? 'w-10' : ''}`}
            />
          ))}
        </div>

        {/* Company Info */}
        <div className='text-center text-xs text-gray-600 space-y-2'>
          <p>Công ty TNHH Shopee</p>
          <p className='max-w-4xl mx-auto'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Chăm sóc khách hàng: Gọi tổng đài Shopee (miễn phí) hoặc Trò chuyện với Shopee ngay
            trên Trung tâm trợ giúp
          </p>
          <p>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Bùi Anh Tuấn</p>
          <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
          <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </footer>
  )
}
