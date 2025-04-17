export default function Footer() {
  const year = new Date().getFullYear() // Get the current year
  return (
    <footer className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='text-center text-2xl font-semibold mb-5'>CHỈ DÀNH CHO MỤC ĐÍCH HỌC TẬP</div>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>© {year} Shopee. Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile Poland
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Shopee</div>
          <div className='mt-6'>
            Địa chỉ: Tầng X-Y-X, Tòa nhà ABC, số 1x đường Liễu Giai, Phường ABC, Quận XYZ, Thành phố AA, Việt Nam. Tổng
            đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Văn A - Điện thoại liên hệ: 024 xxxxxxxx</div>
          <div className='mt-2'>
            Mã số doanh nghiệp: xxxxxxxx do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}
