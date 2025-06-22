import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

function Signup() {
    const navigate = useNavigate();

    return (
        <form action="" className={"space-y-4 md:space-y-6"}>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="fullname">Full name</Label>
                <Input type="text" id="fullname" placeholder="Enter Full Name" required />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter Email" required />
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Enter your password"/>
            </div>
            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="confirm_password">Confirm password</Label>
                <Input type="password" id="confirm_password" placeholder="Re-enter your password"/>
            </div>
            <Button type={"button"} onClick={() => {
                navigate("/account-setup");
            }}>Continue</Button>
        </form>
    )
}

export default Signup