import {Input} from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

function SignIn() {

    const navigate = useNavigate();

    return (
        <form action="" className={"space-y-4 md:space-y-6"}>

            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Enter your email here"/>
            </div>

            <div className="grid w-full max-w-sm items-center gap-3">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Enter password here"/>
            </div>

            <Button type={"button"} onClick={() => {
                navigate("/account-setup");
            }}>Continue</Button>

        </form>
    )
}

export default SignIn;