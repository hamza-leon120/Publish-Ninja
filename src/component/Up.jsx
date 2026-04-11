import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
function Up (){
    let [show,setShow] = useState(false)
    useEffect(function(){
        window.addEventListener("scroll",function(){
            if(window.scrollY > 300){
                setShow(true)
            }else {
                setShow(false)
            }
        })
    })
    function TOTheTop () {
        window.scrollTo({
            top: 0 ,
            left: 0,
            behavior : "smooth"
        })
    }
    return (
        <button onClick={TOTheTop} className= {`up ${show ? "opacity-100 ": "opacity-0"} w-11 h-11 rounded-xl bg-[#E2BD62] cursor-pointer fixed bottom-4 right-3  `}><FontAwesomeIcon icon={faAngleUp} /></button>
    )
}
export default Up