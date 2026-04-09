import { faLinkedinIn , faXTwitter , faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Footer(prop) {
    return (
        <footer ref={function(ele){return prop.data.current[6] = ele}} className="pt-32.5 opacity-0 transform-[translateY(30px)]">
            <div className="container">
                <div className="flex justify-between mb-5 pb-13 border-b-2 border-solid border-[#DBDADA] flex-wrap gap-10">
                    <div className="w-59.75">
                        <h2 className="text-2xl mb-9">Publish Ninja</h2>
                        <p className="text-[#535353] text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <ul>
                        <li className="mb-3.25"><a className="text-xl" href="#">Our Services</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Help center</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">FAQ</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Transaction</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Investation</a></li>
                    </ul>
                    <ul>
                        <li className="mb-3.25"><a className="text-xl" href="#">Company</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">About Us</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Career</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Management</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Blog</a></li>
                    </ul>
                    <div>
                        <h2 className="text-2xl mb-9">Contact Info</h2>
                        <p className="text-[#535353] text-lg">info@publishninjagmail.com. </p>
                        <p className="text-[#535353] text-lg mb-7.5">(+088 1254 889 760)</p>
                        <div className="flex gap-3.5">
                            <div className="size-9 rounded-[50%] hover:bg-white flex justify-center items-center">
                                <FontAwesomeIcon className = "text-[#DBA41B] cursor-pointer" icon={faFacebookF} />
                            </div>
                            <div className="size-9 rounded-[50%] hover:bg-white flex justify-center items-center">
                                <FontAwesomeIcon className = "text-[#DBA41B] cursor-pointer" icon={faXTwitter} />
                            </div>
                            <div className="size-9 rounded-[50%] hover:bg-white flex justify-center items-center">
                                <FontAwesomeIcon className = "text-[#DBA41B] cursor-pointer" icon={faLinkedinIn} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </footer>
    )
}
export default Footer