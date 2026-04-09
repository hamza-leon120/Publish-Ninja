import img11 from '../img/image-11.webp'
import img12 from '../img/image-12.webp'
import img13 from '../img/image-13.webp'
import img14 from '../img/image-14.webp'
function Photo(prop){
    return (
        <section className='opacity-0 transform-[translateY(30px)]' ref={function(ele){return prop.data.current[3] = ele}}>
            <div className="container">
                <div className='flex justify-center gap-3.75 flex-wrap'>
                    <img className='w-full h-117.75 rounded-[25px_25px_0_0] border-4 border-white md:w-75 md:rounded-[25px_0_0_25px]' src= {img11} alt="" />
                    <img className='w-full h-117.75 border-4 border-white md:w-75' src= {img12} alt="" />
                    <img className='w-full h-117.75 border-4 border-white md:w-75' src= {img13} alt="" />
                    <img className='w-full h-117.75 rounded-[0px_0px_25px_25px] border-4 border-white md:w-75 md:rounded-[0px_25px_25px_0px] ' src= {img14} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Photo