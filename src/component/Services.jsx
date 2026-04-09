import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"
function Services(prop) {
    const services = [
        { h3: 'UI/UX Design', p: 'Lorem Ipsum is simply dummy text of the printing and', button: 'Learn More' },
        { h3: 'UI/UX Design', p: 'Lorem Ipsum is simply dummy text of the printing and', button: 'Learn More' },
        { h3: 'UI/UX Design', p: 'Lorem Ipsum is simply dummy text of the printing and', button: 'Learn More' },
        { h3: 'UI/UX Design', p: 'Lorem Ipsum is simply dummy text of the printing and', button: 'Learn More' },
    ]
    const servicesJsx = services.map(function (ele, i) {
        return (
            <div key={`${ele.h3}${i}`} className="group p-[33px_10px_41px_21px] bg-[white] rounded-[15px] w-full md:w-72.5 hover:bg-[#F9D783]">
                <div className="mb-3.5 size-14 rounded-[50%] bg-[#F9D783] flex justify-center items-center group-hover:bg-[#242424]">
                    <FontAwesomeIcon icon={faPaintBrush} className="text-2xl group-hover:text-[#F9D783]" />
                </div>
                <h3 className="mb-5.25 text-xl">{ele.h3}</h3>
                <p className="mb-14 text-lg text-[#626262]">{ele.p}</p>
                <button className="text-lg  flex items-center cursor-pointer">
                    {ele.button}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-1.25 text-xs" />
                </button>
            </div>
        )
    })
    return (
        <section className="opacity-0 transform-[translateY(30px)]" ref={function(ele){return prop.data.current[0] = ele}}>
            <div className="container">
                <div className="flex flex-col gap-6 justify-between mb-7.25 text-center md:text-start lg:flex-row">
                    <h2 className="text-3xl font-bold md:text-4xl">Our Included Services</h2>
                    <p className="text-lg md:text-xl md:w-140.5 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <div className="flex gap-3.75 justify-center flex-wrap">
                    {servicesJsx}
                </div>
            </div>
        </section>
    )
}
export default Services