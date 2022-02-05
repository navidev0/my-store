import { Link } from 'react-router-dom';
const Item = ({producto }) => {
  return (
    <>
      <div className='flex flex-col items-center justify-center max-w-sm m-4'>
        <div
          className='w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md'
          style={{ backgroundImage: `url(${producto.image})` }}
        />
        <div className='w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800'>
          <h3 className='py-2 text-xs font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white'>
            {producto.title}
          </h3>
          <div className='flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700'>
            <span className='font-bold text-gray-800 dark:text-gray-200'>
              $ {producto.price}
            </span>
            <Link to={`/item/${producto.id}`} className='px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
              View details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Item
