
// import { categories } from '../Categories/categoriesData'
const UpdateCoffeeForm = ({ handleSubmit, handleImage, setCoffeeData, coffeeData }) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10'>
          <div className='space-y-1 text-sm'>
            <label htmlFor='location' className='block text-gray-600'>
              Coffee Name
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='name'
              id='location'
              type='text'
              value={coffeeData?.name}
              onChange={(e) => setCoffeeData({ ...coffeeData, name: e.target.value })}
              placeholder='Coffee Name'
              required
            />
          </div>
          <div className='space-y-1 text-sm'>
            <label htmlFor='title' className='block text-gray-600'>
              Supplier
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='supplier'
              id='supplier'
              type='text'
              value={coffeeData?.supplier}
              onChange={(e) => setCoffeeData({ ...coffeeData, supplier: e.target.value })}
              placeholder='Supplier'
              required
            />
          </div>

          <div className='space-y-1 text-sm'>
            <label htmlFor='category' className='block text-gray-600'>
              Category
            </label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
              name='category'
              id='category'
              type='text'
              value={coffeeData?.category}
              onChange={(e) => setCoffeeData({ ...coffeeData, category: e.target.value })}
              placeholder='Category'
              required
            />
          </div>

          <div className='space-y-1'>
            <label htmlFor='location' className='block text-gray-600'>
              Select Availability Range
            </label>
            <div className='flex justify-center pt-2'>{/* Calender */}</div>
          </div>

          <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
            <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
              <div className='flex flex-col w-max mx-auto text-center'>
                <label>
                  <input
                    className='text-sm cursor-pointer w-36 hidden'
                    type='file'
                    name='image'
                    id='image'
                    onChange={e => handleImage(e.target.files[0])}
                    accept='image/*'
                    hidden
                  />
                  <div className='bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500'>
                    Upload Image
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='price' className='block text-gray-600'>
                Price
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='price'
                id='price'
                type='number'
                value={coffeeData?.price}
                onChange={(e) => setCoffeeData({ ...coffeeData, price: e.target.value })}
                placeholder='Price'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='guest' className='block text-gray-600'>
                Quantity
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='quantity'
                id='quantity'
                type='number'
                value={coffeeData?.quantity}
                onChange={(e) => setCoffeeData({ ...coffeeData, quantity: e.target.value })}
                placeholder='Quantity'
                required
              />
            </div>
          </div>

          <div className=' gap-2'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='bedrooms' className='block text-gray-600'>
                Taste
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                name='taste'
                id='taste'
                type='text'
                value={coffeeData?.taste}
                onChange={(e) => setCoffeeData({ ...coffeeData, taste: e.target.value })}
                placeholder='Taste'
                required
              />
            </div>

          </div>
        </div>

        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default UpdateCoffeeForm