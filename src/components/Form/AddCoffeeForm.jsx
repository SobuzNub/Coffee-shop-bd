

const AddCoffeeForm = ({ handleSubmit, imagePreview, handleImage, imageText }) => {
    return (
        <div className="bg-[#F4F3F0] p-24 max-w-6xl mx-auto mt-24 rounded-lg">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold mb-4">Add New Coffee</h2>
                <p className="text-[#1B1A1AB3] sm:hidden">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleSubmit}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier taste row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type='number' name="price" id="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url row */}
                <div className=' p-4 bg-white w-full  m-auto rounded-lg flex justify-between items-center'>
                    <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                        <div className='flex flex-col w-max mx-auto text-center'>
                            <label>
                                <input
                                    className='text-sm cursor-pointer w-36 hidden'
                                    type='file'
                                    onChange={e=> handleImage(e.target.files[0])}
                                    name='image'
                                    id='image'
                                    accept='image/*'
                                    hidden
                                />
                                <div className='bg-[#D2B48C] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#D2B48C]'>
                                    {imageText.length > 20 ? imageText.split('.')[0].slice(0,15) + '...' + imageText.split('.')[1] : imageText}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="h-16 w-16 object-cover overflow-hidden flex justify-center">
                        {imagePreview && <img src={imagePreview} />}
                    </div>
                </div>

                <input type="submit" value="ADD COFFEE" className="btn btn-block bg-[#D2B48C] mt-3" />
            </form>
        </div>
    );
};

export default AddCoffeeForm;