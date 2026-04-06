import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import img16 from "../img/image-15.webp"
import img17 from "../img/image-16.webp"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons/faQuoteLeft"
import { faStar } from "@fortawesome/free-solid-svg-icons"
function CommentQ () {
    let arr = ["","",""]
    let arrJsx = arr.map(function(){
        return (
            <div className="group bg-white rounded-[15px] p-[20px_20px_20px_22px] hover:bg-[#F9D783]">
                <div className="flex justify-between">
                    <img className="size-[58px] rounded-[50%]" src= {img17} alt="" />
                    <FontAwesomeIcon className="text-4xl text-[#F9D783] group-hover:text-black" icon={faQuoteLeft} />
                </div>
                <p className="text-lg m-[16px_0px_25px_0px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                <div className="flex justify-between flex-center">
                    <p className="text-lg">John Smith</p>
                    <div>
                        <FontAwesomeIcon className=" text-[#F9D783] group-hover:text-black md:text-lg" icon={faStar} />
                        <FontAwesomeIcon className=" text-[#F9D783] group-hover:text-black md:text-lg" icon={faStar} />
                        <FontAwesomeIcon className=" text-[#F9D783] group-hover:text-black md:text-lg" icon={faStar} />
                        <FontAwesomeIcon className=" text-[#F9D783] group-hover:text-black md:text-lg" icon={faStar} />
                        <FontAwesomeIcon className=" text-[#F9D783] group-hover:text-black md:text-lg" icon={faStar} />
                    </div>
                </div>
            </div>
        )
    })
    return(
        <section>
            <div className="container">
                <div className="flex-col-reverse flex justify-between lg:flex-row">
                    <img className="w-[100%] h-[337px] rounded-[15px] lg:w-[51.24%]" src={img16} alt="" />
                    <div className="mb-[55px] lg:w-[36.48%] ">
                        <h2 className="text-2xl text-center mb-[13px] md:text-start md:text-4xl">3500+ Happy Clients Said To Us They Are Satisfied</h2>
                        <p className="text-base text-center md:text-start md:text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className="mx-[auto] flex-col w-[85%] flex justify-center gap-[8px] relative top-[-113px] lg:w-[intail] lg:flex-row">
                    {arrJsx}
                </div>
            </div>
        </section>
    )
}
export default CommentQ