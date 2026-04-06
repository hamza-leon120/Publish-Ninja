import img10 from '../img/image-10.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
function ElegantStylish() {
    return (
        <section>
            <div className="container">
                <div className='bg-[#F5F5EF] p-[41px] rounded-[8px]'>
                    <h2 className='text-[27px] text-center font-bold mb-[30px] md:text-4xl md:text-start md:w-[571px]'>We Are Here To Make Your Website Look more Elegant And Stylish!</h2>
                    <div className='flex flex-col-reverse justify-center gap-[80px] md:mb-[24px] md:flex-row'>
                        <img className='rounded-[20px] w-[100%] h-[287px] md:w-[47.77%] md:h-[450px]' src={img10} alt="" />
                        <div>
                            <p className='mb-[35px] text-xl text-center md:text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,</p>
                            <div className='flex justify-center md:justify-start items-center gap-[10px] mb-[32px]'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                            <div className='flex justify-center md:justify-start items-center gap-[10px] mb-[32px]'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                            <div className='flex justify-center md:justify-start items-center gap-[10px]'>
                                <FontAwesomeIcon icon={faCheck} className='text-lg' />
                                <p className='md:text-lg'>Lorem Ipsum is simply dummy text</p>
                            </div>
                        </div>
                    </div>
                    <div className='relative top-[-30px] bg-[#F9D783] w-[95%] h-[106px] flex justify-center items-center rounded-[15px] mx-[auto] md:top-[0px] md:h-[185px] lg:w-[749px]'>
                        <div className='text-center'>
                            <p className='text-2xl font-bold mb-[5px] md:text-[46px]'>280+</p>
                            <p className='text-sm md:text-lg'>Project Complete</p>
                        </div>
                        <div className='w-[1px] h-[88px] bg-[#E2BD62] mx-[6%]'></div>
                        <div className='text-center'>
                            <p className='text-2xl font-bold mb-[5px] md:text-[46px]'>200+</p>
                            <p className='text-sm md:text-lg'>Happy Clients</p>
                        </div>
                        <div className='w-[1px] h-[88px] bg-[#E2BD62] mx-[6%]'></div>
                        <div>
                            <p className='text-2xl font-bold mb-[5px] md:text-[46px] '>15+</p>
                            <p className='text-sm md:text-lg'>Team Member</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ElegantStylish