import {NavLink} from "react-router";
import {brandLogoImg} from "@/assets";

function Logo() {
    return (
        <NavLink to="/">
            <div className='flex justify-center items-center space-x-2'>
                <img src={brandLogoImg} className='w-[50px] h-[50px]' alt="Company logo"/>
                <span className='text-white font-bold font-[Inter] text-xl'>PARK</span>
            </div>
        </NavLink>
    )
}
export default Logo