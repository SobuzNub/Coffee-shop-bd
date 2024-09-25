import { Link } from "react-router-dom";


const OrderNowCard = ({item}) => {
    
    return (
        <Link to={`/item/${item?._id}`}>
            
            <div className="max-w-xs shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={item?.image} alt="" className="object-cover object-center w-full  h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Name: {item?.name}</h2>
                        <p className="dark:text-gray-800">Category: {item?.category}</p>
                        <p className="dark:text-gray-800">Price: ${item?.price}</p>
                    </div>
                    
                </div>
            </div>
        </Link>
    );
};

export default OrderNowCard;