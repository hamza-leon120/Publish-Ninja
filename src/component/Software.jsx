import img5 from '../img/image-5.webp'
import img6 from '../img/image-6.webp'
import img7 from '../img/image-7.webp'
import img8 from '../img/image-8.webp'
import img9 from '../img/image-9.webp'
function Software(prop){
    return(
        <section ref = {function(ele){return prop.data.current = ele}}>
            <div className="container">
                <div className='p-[46px_10px_46px_10px] bg-[white] rounded-[15px]'>
                    <p className="text-2xl text-center mb-10.25 md:text-3xl">Over 32k+ Software Businesses Growing With Publish Ninja </p>
                    <div className='flex justify-center flex-wrap gap-12.75'>
                        <div>
                            <img src = {img5} alt="" />
                        </div>
                        <div>
                            <img src = {img6} alt="" />
                        </div>
                        <div>
                            <img src = {img7} alt="" />
                        </div>
                        <div>
                            <img src = {img8} alt="" />
                        </div>
                        <div>
                            <img src = {img9} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Software