import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function Header(){
    let [opne,setOpen] = useState(true)
    function changerHeight() {
        if (opne) {
            setOpen(false)
        }else {
            setOpen(true)
        }
    }
    const liList = ["Home","Services","About","Portfolio","Contact"]
    const liListjsx = liList.map(function(ele){
        return (
            <li key={ele}><a href="#" className="text-lg ">{ele}</a></li>
        )
    })
    return (
        <header>
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