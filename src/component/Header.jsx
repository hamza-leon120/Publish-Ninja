import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function Header(){
    let [height,setHeight] = useState(window.innerWidth <= 768 ? "0px" : "")
    function changerHeight() {
        if (height === "0px") {
            setHeight("300px")
        }else {
            setHeight("0px")
        }
    }
    let liList = ["Home","Services","About","Portfolio","Contact"]
    let liListjsx = liList.map(function(ele){
        return (
            <li key={ele}><a href="#" className="text-lg ">{ele}</a></li>
        )
    })
    return (
        <header>
            <div className="container flex justify-between items-center h-[60px]">
                <p className="text-xl lg:text-2xl ">Publish Ninja</p>
                <ul className="md:flex md:gap-x-[20px] lg:gap-x-[47px]
                +" style={{height: `${height}`}} >
                    {liListjsx}
                </ul>
                <div className="hidden md:flex items-center">
                    <button className="mr-[19px] text-lg cursor-pointer">Sign In</button>
                    <button className="w-[106px] h-[47px] bg-[#F9D783] rounded-[200px] text-lg cursor-pointer lg:w-[123px]">Sign Up</button>
                </div>
                <FontAwesomeIcon className='block cursor-pointer text-2xl md:hidden!' icon={faBars} onClick={changerHeight} />
            </div>
        </header>
    )
}
export default Header