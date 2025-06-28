import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Badge} from "@/components/ui/badge.tsx";
import {CircleDollarSignIcon, MapPinHouseIcon, MoreHorizontalIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

function ExpenseCard() {

    const moreActionClickHandler = () => {}

    return (
        <div
            className={"bg-background w-full p-6 flex flex-col md:flex-row gap-3 md:gap-6 rounded justify-between md:items-center"}>
            <div className={"flex flex-row justify-between items-center"}>
                <div className="flex items-center gap-3">
                    <Checkbox id="terms"/>
                    <Label htmlFor="terms">Fix for kitchen cabinet</Label>
                </div>
                <Button onClick={moreActionClickHandler} variant={"ghost"} className={"md:hidden"}><MoreHorizontalIcon/></Button>
            </div>
            <Badge className={"bg-green-100/50 text-green-500 font-bold rounded-full"}>Today 10pm</Badge>
            <div className={"flex flex-col md:flex-row gap-3 md:gap-6"}>
                <div className={"flex flex-row items-center gap-2"}>
                    <CircleDollarSignIcon size={16}/>
                        <span className={"text-sm"}>CAD $800</span>
                    </div>
                    <div className={"flex flex-row items-center gap-2"}>
                        <MapPinHouseIcon size={16}/>
                        <span className={"text-sm"}>Rosalind Street</span>
                    </div>
                    <Button onClick={moreActionClickHandler} variant={"ghost"} className={"hidden md:block"}><MoreHorizontalIcon/></Button>
                </div>
        </div>
    )
}

export default ExpenseCard;