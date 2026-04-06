import { faLinkedinIn , faXTwitter , faFacebookF} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Footer() {
    return (
        <footer className="pt-[130px]">
            <div className="container">
                <div className="flex justify-between mb-[20px] pb-[52px] border-b-[2px] border-solid border-[#DBDADA] flex-wrap gap-[40px]">
                    <div className="w-[239px]">
                        <h2 className="text-2xl mb-[36px]">Publish Ninja</h2>
                        <p className="text-[#535353] text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <ul>
                        <li className="mb-[13px]"><a className="text-xl" href="#">Our Services</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Help center</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">FAQ</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Transaction</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Investation</a></li>
                    </ul>
                    <ul>
                        <li className="mb-[13px]"><a className="text-xl" href="#">Company</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">About Us</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Career</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Management</a></li>
                        <li><a className="text-[#535353] text-lg" href="#">Blog</a></li>
                    </ul>
                    <div>
                        <h2 className="text-2xl mb-[36px]">Contact Info</h2>
                        <p className="text-[#535353] text-lg">info@publishninjagmail.com. </p>
                        <p className="text-[#535353] text-lg mb-[30px]">(+088 1254 889 760)</p>
                        <div className="flex gap-[14px]">
                            <div className="size-[36px] rounded-[50%] hover:bg-white flex justify-center items-center">
                                <FontAwesomeIcon className = "text-[#DBA41B] cursor-pointer" icon={faFacebookF} />
                            </div>
                            <div className="size-[36px] rounded-[50%] hover:bg-white flex justify-center items-center">
                                <FontAwesomeIcon className = "text-[#DBA41B] cursor-pointer" icon={faXTwitter} />
                            </div>
                            <div className="size-[36px] rounded-[50%] hover:bg-white flex justify-center items-center">
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