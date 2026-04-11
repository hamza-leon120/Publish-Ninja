import img10 from '../img/image-10.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function ElegantStylish(prop) {
    return (
        <section id='About' className='opacity-0 transform-[translateY(30px)]' ref={function(ele){return prop.data.current[1] = ele}}>
            <div className="container">
                <div className='bg-[#F5F5EF] p-10.25 rounded-lg'>
                    <h2 className='text-[27px] text-center font-bold mb-7.5 md:text-4xl md:text-start md:w-142.75'>We Are Here To Make Your Website Look more Elegant And Stylish!</h2>
                    <div className='flex flex-col-reverse justify-center gap-20 md:mb-6 md:flex-row'>
                        <img className='rounded-[20px] w-full h-71.75 md:w-[47.77%] md:h-112.5' src={img10} alt="" />
                        <div>
                            <p className='mb-8.75 text-xl text-center md:text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                            <div className='flex justify-center md:justify-start items-center gap-2.5 mb-8'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                            <div className='flex justify-center md:justify-start items-center gap-2.5 mb-8'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                            <div className='flex justify-center md:justify-start items-center gap-2.5'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative -top-7.5 bg-[#F9D783] w-[95%] h-26.5 flex justify-center items-center rounded-[15px] mx-auto md:top-0 md:h-46.25 lg:w-187.25'>
                        <div className='text-center'>
                            <p className='text-2xl font-bold mb-1.25 md:text-[46px]'>280+</p>
                            <p className='text-sm md:text-lg'>Project Complete</p>
                        </div>
                        <div className='w-px h-22 bg-[#E2BD62] mx-[6%]'></div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold mb-1.25 md:text-[46px]'>200+</p>
                            <p className='text-sm md:text-lg'>Happy Clients</p>
                        </div>
                        <div className='w-px h-22 bg-[#E2BD62] mx-[6%]'></div>
                        <div>
                            <p className='text-2xl font-bold mb-1.25 md:text-[46px] '>15+</p>
                            <p className='text-sm md:text-lg'>Team Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ElegantStylish
