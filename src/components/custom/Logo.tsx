import {NavLink} from "react-router";
import {brandLogoImg} from "@/assets";


// type Props = {
//     className?: string;
// }

function Logo() {
    return (
        <NavLink to="/">
            <div className='flex justify-center items-center'>
                <img src={brandLogoImg} className={"md:w-[50px] md:h-[50px] w-[30px] h-[30px]"} alt="Company logo"/>
                <span className='block text-primary font-bold text-lg md:text-sm'>roperties park</span>
            </div>
        </NavLink>
    )
}
export default Logo