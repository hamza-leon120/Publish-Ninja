function Subscribe () {
    return (
        <section className="bg-[#F5F5EF] py-[29px_65px]">
            <div className="container">
                <div className="mb-[41px]">
                    <h2 className="text-3xl text-center mb-[30px] md:text-4xl">Subscribe To Our Newsletter</h2>
                    <p className="text-lg text-center md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="flex-col mx-[auto] flex gap-[13px] md:flex-row md:w-[fit-content]">
                    <input type="text" className=" h-[95px] rounded-[100px] pl-[32px] bg-white text-lg md:w-[419px]" placeholder="Enter Your Email Id" />
                    <button className="mx-[auto] rounded-[100px] bg-[#F9D783] flex justify-center items-center w-[100%] h-[95px] text-2xl cursor-pointer md:mx[intail] md:w-[228px]">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe