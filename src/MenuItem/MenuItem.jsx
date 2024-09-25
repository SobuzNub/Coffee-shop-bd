
import SectionTitle from "../components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/axiosPublic";
import MenuCard from "./MenuCard";
import LoadingSpinner from "../page/shared/LoadingSpinner";
import Marquee from "react-fast-marquee";
import { useState } from "react";

const MenuItem = () => {

    const [asc, setAsc] = useState(true);
    const axiosPublic = useAxiosPublic();

    const { data: menu = {}, isLoading } = useQuery({
        queryKey: ['menus'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/menus?sort=${asc ? 'asc' : 'desc'}`)
            return data;

        }
    })

    // console.log(menu);

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className="">
            <SectionTitle
                subHeading='whats new'
                heading='order Here'
            ></SectionTitle>
            <Marquee>
                <p className="text-red-600 text-4xl font-bold uppercase">Friday Sales 20% Off</p>
            </Marquee>
            <div className="mt-5 ml-52">
                <button onClick={()=> setAsc(!asc)} className="btn btn-secondary">{ asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
            </div>
            <div className="md:grid md:grid-cols-3 gap-5 md:ml-40 p-10">
                {
                    menu?.map(item => <MenuCard key={item._id} item={item}></MenuCard>)
                }
            </div>
        </div>
    );
};

export default MenuItem;