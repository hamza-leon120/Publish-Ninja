import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import imgOne from '../img/image-1.WebP'
import imgTwo from '../img/image-2.WebP'
import imgThree from '../img/image-3.webp'
import imgFour from '../img/image-4.webp'
function Hero(){
    return (
        <section>
            <div className="container flex gap-y-[40px] flex-col items-center md:flex-col-reverse lg:flex-row lg:justify-between">
                <div className="text-center md:text-start lg:w-[562px]">
                    <h1 className="text-[39px] font-bold mb-[31px] md:text-6xl">Creative Idea Help to Grow Business</h1>
                    <p className="text-[17px] mb-[31px] md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    <div className="flex items-center gap-x-[17px] justify-center md:justify-start">
                        <button className="size-[154px] h-[52px] cursor-pointer bg-[#282826] text-[white] rounded-[200px]">Get Started</button>
                        <button className="flex cursor-pointer">
                            <div className="size-[25.67px] flex justify-center items-center border-[2px] border-solid border-[black] rounded-[50%] mr-[10px]">
                                <FontAwesomeIcon className="text-xs"  icon={faPlay} />
                            </div>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-[13px] lg:w-[442px]">
                    <img className="rounded-tl-[70px]" src= {imgOne} alt="" />
                    <img className="rounded-[50%]" src= {imgTwo} alt="" />
                    <img className="rounded-b-[70px]" src= {imgThree} alt="" />
                    <img className="rounded-tr-[70px] rounded-b-[70px]" src= {imgFour} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Hero