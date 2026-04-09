import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
function Plan(prop) {
    const plan = [
        { titel: "Basic", price: "29.99", time: "Per Month" },
        { titel: "Professional", price: "69.99", time: "3 Month" },
        { titel: "Ultimate", price: "99.99", time: "12 Month" },
    ]
    const planJsx = plan.map(function (ele,i) {
        return (
            <div key = {i} className="group w-full bg-white rounded-[15px] text-center p-[58px_51px_33px_45px] lg:w-[initial] hover:bg-black">
                <h3 className="text-4xl text-[#121212] mb-6.25 group-hover:text-[#F9D783]">{ele.titel}</h3>
                <p className="text-5xl group-hover:text-white">{ele.price}</p>
                <p className="text-[#837E7E] text-lg mb-3.25">{ele.time}</p>
                <hr className="my-7.5 w-48.75 mx-auto" />
                <div className='flex justify-center md:justify-start items-center gap-2.5 mb-8'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className='flex justify-center md:justify-start items-center gap-2.5 mb-8'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className='flex justify-center md:justify-start items-center gap-2.5 mb-8'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <button className="flex justify-center items-center rounded-[500px] bg-black text-white text-xl w-full h-14.5 cursor-pointer group-hover:bg-[#F9D783] group-hover:text-white">Choose Plan</button>
            </div>
        )
    })
    return (
        <section className="opacity-0 transform-[translateY(30px)]" ref={function(ele){return prop.data.current[2] = ele}}>
            <div className="container">
                <h2 className="text-4xl text-center w-full mx-auto mb-18 leading-11.5 md:w-100">Choose The Right Plan For Your Business</h2>
                <div className="flex justify-center gap-3.75 flex-wrap">
                    {planJsx}
                </div>
            </div>
        </section>
    )
}
export default Plan