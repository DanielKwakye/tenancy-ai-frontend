import {Button} from "@/components/ui/button.tsx";
import {MoreHorizontalIcon} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";
import {manProfilePicImg} from "@/assets";
import {Progress} from "@/components/ui/progress.tsx";

function TenantCard() {
    return (
        <div className={"bg-background w-full p-6 flex flex-col gap-6 rounded"}>
            <div className={"flex flex-row  gap-1 justify-between items-center"}>
                <h1 className={"font-bold text-md text-muted-foreground"}>Rosalind Street</h1>
                <Button variant={"ghost"}><MoreHorizontalIcon size={28}/></Button>
            </div>
            <div className={"space-y-1"}>
                <h2 className={"text-xl font-bold"}>John Freeman</h2>
                <Badge className={"bg-blue-500/10 text-blue-500 font-bold"}>Pending</Badge>
            </div>
            {/* Main status description */}
            <p className={"text-muted-foreground"}>Payment made on July 12</p>
            <div className={"flex flex-col gap-2"}>
                <div className="flex flex-row justify-between gap-6 items-center">
                    <h2 className={"text-muted-foreground font-bold text-sm"}>Payment</h2>
                    <p className={" text-muted-foreground text-sm"}>$500 / $1000</p>
                </div>
                <Progress value={33} progressColor={"bg-[#f97315]"}/>
            </div>
            <div className={"inline-flex items-center gap-2"}>
                <div className={"w-8 h-8 rounded-full overflow-clip  border-2 border-primary"}>
                    <img src={manProfilePicImg} alt="" className={"w-full h-full object-cover"}/>
                </div>
            </div>
            {/*<div className={"relative"}>*/}
            {/*    <div className={"absolute w-8 h-8 rounded-full overflow-clip  border-2 border-primary"}>*/}
            {/*        <img src={manProfilePicImg} alt="" className={"w-full h-full object-cover"}/>*/}
            {/*    </div>*/}
            {/*    <div className={"absolute left-6 w-8 h-8 rounded-full overflow-clip border-2 border-primary"}>*/}
            {/*        <img src={manProfilePicImg} alt="" className={"w-full h-full object-cover"}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    )
}

export default TenantCard;