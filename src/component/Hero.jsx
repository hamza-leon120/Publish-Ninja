import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import imgOne from '../img/image-1.WebP'
import imgTwo from '../img/image-2.WebP'
import imgThree from '../img/image-3.webp'
import imgFour from '../img/image-4.webp'
function Hero(){
    return (
        <section>
            <div className="container flex gap-y-10 flex-col items-center md:flex-col-reverse lg:flex-row lg:justify-between">
                <div className="text-center md:text-start lg:w-140.5">
                    <h1 className="text-[39px] font-bold mb-7.75 md:text-6xl">Creative Idea Help to Grow Business</h1>
                    <p className="text-[17px] mb-7.75 md:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                    <div className="flex items-center gap-x-4.25 justify-center md:justify-start">
                        <button className="size-38.5 h-13 cursor-pointer bg-[#282826] text-[white] rounded-[200px]">Get Started</button>
                        <button className="flex cursor-pointer">
                            <div className="size-[25.67px] flex justify-center items-center border-2 border-solid border-[black] rounded-[50%] mr-2.5">
                                <FontAwesomeIcon className="text-xs"  icon={faPlay} />
                            </div>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] gap-3.25 lg:w-110.5">
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