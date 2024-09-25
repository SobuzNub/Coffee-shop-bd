
// import { Helmet } from 'react-helmet-async'

import { useMutation, useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import UseAuth from "../../../hooks/UseAuth";
import CoffeeDataRow from "../../../components/TableRows/CoffeeDataRow";
import LoadingSpinner from "../../shared/LoadingSpinner";
import toast from 'react-hot-toast'


const MyListings = () => {

  const axiosSecure = useAxiosSecure();
  const {user} = UseAuth();

  const {data: coffees, isLoading, refetch} = useQuery({
    queryKey: ['coffee', user?.email],
    queryFn: async () =>{
      const {data} = await axiosSecure.get(`/my-listings/${user?.email}`)
      return data;
    }
  })

  

  const {mutateAsync} = useMutation({
    mutationFn: async (id) =>{
      const {data} = await axiosSecure.delete(`/coffee/${id}`)
      return data;
    },
    onSuccess: (data)=>{
      console.log(data);
      refetch()
      toast.success('Successfully Deleted')
    }
  })

  const handleDelete = async id =>{
    console.log(id);
    try{
      await mutateAsync(id)
    }catch(err){
      console.log(err);
      toast.error(err.message)
    }
  }

  if(isLoading) return <LoadingSpinner></LoadingSpinner>

  return (
    <>
      {/* <Helmet>
        <title>My Listings</title>
      </Helmet> */}

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Supplier
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Taste
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Room row data */}
                  {
                    coffees.map(coffee => <CoffeeDataRow key={coffee._id} coffee={coffee} handleDelete={handleDelete} refetch={refetch}></CoffeeDataRow>)
                  }
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyListings