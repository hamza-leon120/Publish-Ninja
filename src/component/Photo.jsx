import img11 from '../img/image-11.webp'
import img12 from '../img/image-12.webp'
import img13 from '../img/image-13.webp'
import img14 from '../img/image-14.webp'
function Photo(){
    return (
        <section>
            <div className="container">
                <div className='flex justify-center gap-[15px] flex-wrap'>
                    <img className='w-[100%] h-[471px] rounded-[25px_25px_0_0] border-[4px] border-white border-[solid] md:w-[300px] md:rounded-[25px_0_0_25px]' src= {img11} alt="" />
                    <img className='w-[100%] h-[471px] border-[4px] border-white border-solid] md:w-[300px]' src= {img12} alt="" />
                    <img className='w-[100%] h-[471px] border-[4px] border-white border-[solid] md:w-[300px]' src= {img13} alt="" />
                    <img className='w-[100%] h-[471px] rounded-[0px_0px_25px_25px] border-[4px] border-white border-[solid] md:w-[300px] md:rounded-[0px_25px_25px_0px] ' src= {img14} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Photo