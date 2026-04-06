import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons"
function Services (){
    let cart = [
        {h3: 'UI/UX Design',p: 'Lorem Ipsum is simply dummy text of the printing and',button: 'Learn More'},
        {h3: 'UI/UX Design',p: 'Lorem Ipsum is simply dummy text of the printing and',button: 'Learn More'},
        {h3: 'UI/UX Design',p: 'Lorem Ipsum is simply dummy text of the printing and',button: 'Learn More'},
        {h3: 'UI/UX Design',p: 'Lorem Ipsum is simply dummy text of the printing and',button: 'Learn More'},
    ]
    let carstJsx = cart.map(function(ele,i){
        return(
            <div key = {`${ele.h3}${i}`} className="group p-[33px_10px_41px_21px] bg-[white] rounded-[15px] w-[100%] md:w-[290px] hover:bg-[#F9D783]">
                <div className="mb-[14px] size-[56px] rounded-[50%] bg-[#F9D783] flex justify-center items-center group-hover:bg-[#242424]">
                    <FontAwesomeIcon icon={faPaintBrush} className="text-2xl group-hover:text-[#F9D783]"/>
                </div>
                <h3 className="mb-[21px] text-xl">{ele.h3}</h3>
                <p className="mb-[56px] text-lg text-[#626262]">{ele.p}</p>
                <button className="text-lg  flex items-center cursor-pointer">
                    {ele.button}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-[5px] text-xs" />
                </button>
            </div>
        )
    })
    return(
        <section>
            <div className="container">
                <div className="flex flex-col gap-[24px] justify-between mb-[29px] text-center md:text-start lg:flex-row">
                    <h2 className="text-3xl font-bold md:text-4xl">Our Included Services</h2>
                    <p className="text-lgmd:text-xl md:w-[562px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                </div>
                <div className="flex gap-[15px] justify-center flex-wrap">
                    {carstJsx}
                </div>
            </div>
        </section>
    )
}
export default Services