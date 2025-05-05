// import { Link } from 'react-router-dom'

// export default function RatingStars() {
//   return (
//     <div>
//       <ul className='my-3'>
//         <li className='py-1 pl-2'>
//           <Link to='' className='flex items-center text-sm'>
//             {Array(5)
//               .fill(0)
//               .map((_, index) => {
//                 return (
//                   <svg viewBox='0 0 9.5 8' className='w-4 h-4 mr-1' key={index}>
//                     <defs>
//                       <linearGradient id='ratingStarGradient' x1='50%' x2='50%' y1='0%' y2='100%'>
//                         <stop offset={0} stopColor='#ffca11' />
//                         <stop offset={1} stopColor='#ffad27' />
//                       </linearGradient>
//                       <polygon
//                         id='ratingStar'
//                         points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
//                       />
//                     </defs>
//                     <g fill='url(#ratingStarGradient)' fillRule='evenodd' stroke='none' strokeWidth={1}>
//                       <g transform='translate(-876 -1270)'>
//                         <g transform='translate(155 992)'>
//                           <g transform='translate(600 29)'>
//                             <g transform='translate(10 239)'>
//                               <g transform='translate(101 10)'>
//                                 <use stroke='#ffa727' strokeWidth='.5' xlinkHref='#ratingStar' />
//                               </g>
//                             </g>
//                           </g>
//                         </g>
//                       </g>
//                     </g>
//                   </svg>
//                 )
//               })}
//             <span>Trở lên</span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )
// }
import path from '@/constants/path'
import { QueryConfig } from '@/page/ProductList/ProductList'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
interface Props {
  queryConfig: QueryConfig
}
export default function RatingStars({ queryConfig }: Props) {
  const navigate = useNavigate()
  const handleFilterStar = (rating_filter: number) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        rating_filter: String(rating_filter)
      }).toString()
    })
  }
  return (
    <div>
      <ul className='my-3'>
        {/* Lặp từ 5 đến 1 để tạo từng hàng sao */}
        {[5, 4, 3, 2, 1].map((rating) => (
          <li className='py-1 pl-2' key={rating} onClick={() => handleFilterStar(rating - 0)}>
            <Link to='' className='flex items-center text-sm'>
              {/* Hiển thị sao vàng hoặc xám tùy theo rating */}
              {Array(5)
                .fill(0)
                .map((_, index) => {
                  const isActive = index < rating
                  return (
                    <svg viewBox='0 0 9.5 8' className='w-4 h-4 mr-1' key={index}>
                      <defs>
                        <linearGradient
                          id={`ratingStarGradient-${rating}-${index}`}
                          x1='50%'
                          x2='50%'
                          y1='0%'
                          y2='100%'
                        >
                          <stop offset={0} stopColor={isActive ? '#ffca11' : '#d1d5db'} />
                          <stop offset={1} stopColor={isActive ? '#ffad27' : '#d1d5db'} />
                        </linearGradient>
                        <polygon
                          id={`ratingStar-${rating}-${index}`}
                          points='14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903'
                        />
                      </defs>
                      <g
                        fill={`url(#ratingStarGradient-${rating}-${index})`}
                        fillRule='evenodd'
                        stroke='none'
                        strokeWidth={1}
                      >
                        <g transform='translate(-876 -1270)'>
                          <g transform='translate(155 992)'>
                            <g transform='translate(600 29)'>
                              <g transform='translate(10 239)'>
                                <g transform='translate(101 10)'>
                                  <use stroke='#ffa727' strokeWidth='.5' xlinkHref={`#ratingStar-${rating}-${index}`} />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  )
                })}
              <span>Trở lên</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
