import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
function Plan() {
    let arr = [
        { titel: "Basic", price: "29.99", time: "Per Month" },
        { titel: "Professional", price: "69.99", time: "3 Month" },
        { titel: "Ultimate", price: "99.99", time: "12 Month" },
    ]
    let arrJsx = arr.map(function (ele) {
        return (
            <div className="group w-[100%] bg-white rounded-[15px] text-center p-[58px_51px_33px_45px] lg:w-[initial] hover:bg-black">
                <h3 className="text-4xl text-[#121212] mb-[25px] group-hover:text-[#F9D783]">{ele.titel}</h3>
                <p className="text-5xl group-hover:text-white">{ele.price}</p>
                <p className="text-[#837E7E] text-lg mb-[13px]">{ele.time}</p>
                <hr className="my-[30px] w-[195px] mx-[auto]" />
                <div className='flex justify-center md:justify-start items-center gap-[10px] mb-[32px]'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className='flex justify-center md:justify-start items-center gap-[10px] mb-[32px]'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <div className='flex justify-center md:justify-start items-center gap-[10px] mb-[32px]'>
                    <FontAwesomeIcon icon={faCheck} className='text-lg group-hover:text-white' />
                    <p className=' group-hover:text-white'>Lorem Ipsum is simply dummy text</p>
                </div>
                <button className="flex justify-center items-center rounded-[500px] bg-black text-white text-xl w-[100%] h-[58px] cursor-pointer group-hover:bg-[#F9D783] group-hover:text-white">Choose Plan</button>
            </div>
        )
    })
    return (
        <section>
            <div className="container">
                <h2 className="text-4xl text-center w-[100%] mx-[auto] mb-[72px] leading-[46px] md:w-[400px]">Choose The Right Plan For Your Business</h2>
                <div className="flex justify-center gap-[15px] flex-wrap">
                    {arrJsx}
                </div>
            </div>
        </section>
    )
}
export default Plan