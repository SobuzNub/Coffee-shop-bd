import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/axiosPublic";
import OrderNowCard from "./OrderNowCard";
import LoadingSpinner from "./shared/LoadingSpinner";
import Marquee from "react-fast-marquee";


const OrderNow = () => {

    const axiosPublic = useAxiosPublic();

    const { data: order = {}, isLoading } = useQuery({
        queryKey: ['order'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/menus')
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    // console.log(order);

    return (
        <div className="mt-10">
            <Marquee>
                <p className="text-red-600 text-4xl font-bold uppercase">Order Now</p>
            </Marquee>
            <div className="md:grid md:grid-cols-3 md:ml-16 mx-auto items-center gap-5 mt-10 my-10">
                {
                    order.map(item => <OrderNowCard key={item._id} item={item}></OrderNowCard>)
                }
            </div>
        </div>
    );
};

export default OrderNow;