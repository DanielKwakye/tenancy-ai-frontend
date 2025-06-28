import {manProfilePicImg} from "@/assets";
import {Button} from "@/components/ui/button.tsx";
import {MailIcon, MoreHorizontalIcon, PhoneIcon} from "lucide-react";
import {Separator} from "@/components/ui/separator.tsx";
import {Progress} from "@/components/ui/progress.tsx";

function LandlordInfoCard() {
    return (
        <div className={"bg-background w-full p-6 flex flex-col gap-6 rounded"}>
            <div className={"flex flex-row gap-2 justify-between"}>
                <div className={"flex flex-row gap-2"}>
                    <div className={"w-12 h-12 rounded overflow-clip"}>
                        <img src={manProfilePicImg} alt="landlord picture"/>
                    </div>
                    <div className={"flex flex-col"}>
                        <h1 className={"font-bold text-md"}>Ms. Greeva Navadiya</h1>
                        <p className={"text-muted-foreground text-md"}>Account info</p>
                    </div>
                </div>
                <Button variant={"ghost"}><MoreHorizontalIcon size={28}/></Button>
            </div>

            <div className={"flex flex-col gap-2 gap-6"}>
                <div className={"flex flex-row gap-8"}>
                    <div className={"inline-flex items-center gap-1"}>
                        <MailIcon size={20} className={"text-muted-foreground"}/>
                        <p className={"text-muted-foreground text-sm"}>bismark@gmail.com</p>
                    </div>
                    <div className={"inline-flex items-center gap-1"}>
                        <PhoneIcon size={20} className={"text-muted-foreground"}/>
                        <p className={"text-muted-foreground text-m"}>+00 709 327-6754</p>
                    </div>
                </div>
                <Separator className={""}></Separator>
            </div>

            <div className={"flex flex-row justify-between gap-6"}>
                <div className={"flex-1 flex flex-col gap-2"}>
                    <div className="flex flex-row justify-between gap-6 items-center">
                        <h2 className={"text-muted-foreground font-bold"}>Income</h2>
                        <p className={" text-muted-foreground text-sm"}>CAD $500</p>
                    </div>
                    <Progress value={33} progressColor={"bg-[#2563eb]"}/>
                </div>
                <div className={"flex-1 flex flex-col gap-2"}>
                    <div className="flex flex-row justify-between gap-6 items-center">
                        <h2 className={"text-muted-foreground font-bold"}>Expenses</h2>
                        <p className={" text-muted-foreground text-sm"}>CAD $500</p>
                    </div>
                    <Progress value={33} progressColor={"bg-[#f97315]"}/>
                </div>
            </div>

        </div>
    )
}

export default LandlordInfoCard