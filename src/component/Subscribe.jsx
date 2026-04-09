function Subscribe (prop) {
    return (
        <section ref={function(ele){return prop.data.current[5] = ele}} className="bg-[#F5F5EF] p-[29px_0px_65px_0px] opacity-0 transform-[translateY(30px)]">
            <div className="container">
                <div className="mb-10.25">
                    <h2 className="text-3xl text-center mb-7.5 md:text-4xl">Subscribe To Our Newsletter</h2>
                    <p className="text-lg text-center md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="flex-col mx-auto flex gap-3.25 md:flex-row md:w-fit">
                    <input type="text" className=" h-23.75 rounded-[100px] pl-8 bg-white text-lg md:w-104.75" placeholder="Enter Your Email Id" />
                    <button className="mx-auto rounded-[100px] bg-[#F9D783] flex justify-center items-center w-full h-23.75 text-2xl cursor-pointer md:mx[intail] md:w-57">Subscribe</button>
                </div>
            </div>
        </section>
    )
}

export default Subscribe