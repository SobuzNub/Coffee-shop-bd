import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/axiosPublic";
import LoadingSpinner from "../shared/LoadingSpinner";
import BookingModal from "../../components/Modal/BookingModal";
import { useState } from "react";
import UseAuth from "../../hooks/UseAuth";


const CoffeeDetails = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false);
  const {user} = UseAuth();
    const closeModal = () =>{
      setIsOpen(false);
    }

    const axiosPublic = useAxiosPublic()

    const {data: coffee = {}, isLoading, refetch} = useQuery({
        queryKey: ['coffee', id],
        queryFn: async () =>{
            const {data} = await axiosPublic.get(`/menu/${id}`)
            return data;
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    console.log(coffee);

    return (
        <div className="max-w-2xl my-24 p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 mx-auto">
            <img src={coffee?.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div
                  className='
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
                mt-6
              '
                >
                  <div>Hosted by: {coffee?.host?.name}</div>

                  <img
                    className='rounded-full'
                    height='30'
                    width='30'
                    alt='Avatar'
                    referrerPolicy='no-referrer'
                    src={coffee?.host?.image}
                  />
                </div>
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"></span>
                <h2 className="text-xl font-semibold tracking-wide">Coffee Name: {coffee?.name}</h2>
            </div>
            <p className="dark:text-gray-800 font-semibold">Supplier: {coffee?.supplier}</p>
            <p className="dark:text-gray-800 font-semibold">Category: {coffee?.category}</p>
            <p className="dark:text-gray-800 font-semibold">Quantity: {coffee?.quantity}</p>
            <p className="dark:text-gray-800 font-semibold">Taste: {coffee?.taste}</p>
            <p className="dark:text-gray-800 font-semibold">Price: ${coffee?.price}</p>
            <button  onClick={()=> setIsOpen(true)} className="btn btn-outline w-full mt-3">Order Now</button>
            {/* booking modal */}
            <BookingModal isOpen={isOpen} refetch={refetch} closeModal={closeModal} bookingInfo={{...coffee, guest:{name: user?.displayName, email: user?.email, image: user?.photoURL}} }></BookingModal>
        </div>
    );
};

export default CoffeeDetails;