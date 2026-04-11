import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { use, useEffect, useState } from 'react'
function Header(prop){
    let [opne,setOpen] = useState(true)
    const liList = ["Home","Services","About","Portfolio","Contact"]
    const [postion,setPostion] = useState("")
    useEffect(function(){
        window.addEventListener("scroll",function(){
            setOpen(true)
            if(window.scrollY > prop.data.current.offsetTop - 150){
                setPostion(true)
            }else if (window.scrollY > 100) {
                setPostion(false)
            }else {
                setPostion("")
            }
        })
    },[])
    function changerHeight() {
        if (opne) {
            setOpen(false)
        }else {
            setOpen(true)
        }
    }
    function toSection (ev) {
        window.scrollTo({
            top: document.querySelector(`#${ev.target.innerHTML}`).offsetTop - 80,
            left: 0 ,
            behavior : "smooth" ,
        })
    }
    const liListjsx = liList.map(function(ele){
        return (
            <li key={ele}><a className="text-lg cursor-pointer" onClick={toSection}>{ele}</a></li>
        )
    })
    return (
        <header className= {`${postion === true ? "fixed bg-[#E2BD62] z-1000 top-0 opacity-100" : postion === false ? "opacity-0" : "opacity-100"} w-full`}>
            <div className="container flex justify-between items-center h-15">
                <p className="text-xl lg:text-2xl ">Publish Ninja</p>
                <ul className = {`${opne ? "h-0" : "h-75"} md:h-7 md:flex md:gap-x-5 lg:gap-x-11.75`} >
                    {liListjsx}
                </ul>
                <div className="hidden md:flex items-center">
                    <button className="mr-4.75 text-lg cursor-pointer">Sign In</button>
                    <button className="w-26.5 h-11.75 bg-[#F9D783] rounded-[200px] text-lg cursor-pointer lg:w-30.75">Sign Up</button>
                </div>
                <FontAwesomeIcon className='block cursor-pointer text-2xl md:hidden!' icon={faBars} onClick={changerHeight} />
            </div>
        </header>
    )
}
export default Header