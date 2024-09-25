import { useState } from "react";
import { imageUpload } from "../../../api/utils";
import AddCoffeeForm from "../../../components/Form/AddCoffeeForm";
import UseAuth from "../../../hooks/UseAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



const AddCoffee = () => {
    const [imagePreview, setImagePreview] = useState();
    const [imageText, setImageText] = useState('Upload Image')
    const { user } = UseAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const {mutateAsync} = useMutation({
        mutationFn: async coffeeData =>{
            const {data} = await axiosSecure.post('/coffee', coffeeData)
            return data
        },
        onSuccess: () =>{
            console.log('Coffee Data Saved Successfully');
            navigate('/')
            toast.success('Coffee Added Successfully')
        }
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const image = form.image.files[0]
        const host = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        try {
            const image_url = await imageUpload(image)
            const coffeeData = {
                name, quantity, supplier, taste, category, price, host, image: image_url
            }
            console.table(coffeeData);
            // save a coffee data in db
            await mutateAsync(coffeeData)
        } catch (err) {
            console.log(err);
        }

    }

    // handle Image Change
    const handleImage = image =>{
        setImagePreview(URL.createObjectURL(image))
        setImageText(image?.name)
    } 

    return (
        <div>
            <AddCoffeeForm handleSubmit={handleSubmit} setImagePreview={setImagePreview} imagePreview={imagePreview} handleImage={handleImage} imageText={imageText}></AddCoffeeForm>
        </div>
    );
};

export default AddCoffee;