import {MoreHorizontalIcon, TrendingDownIcon, TrendingUpIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";

function RevenueSummaryCard() {
    return (
        <div className={"bg-background w-full p-6 flex flex-col gap-4 rounded"}>
            <div className={"flex flex-row  gap-1 justify-between items-center"}>
                <h1 className={"font-bold text-md"}>Revenue</h1>
                <Button variant={"ghost"}><MoreHorizontalIcon size={28}/></Button>
            </div>
            <div className={""}>
                <h1 className={"text-2xl font-bold"}>CAD $21,000.00</h1>
                <p className={"text-muted-foreground"}>Last month</p>
            </div>
            <Separator />
            <div className={"flex flex-row justify-between gap-6"}>
                <div className={"flex-1"}>
                    <div className={"flex flex-row gap-2"}>
                        <TrendingUpIcon className={"text-green-500"} />
                        <div className={"flex flex-col text-muted-foreground"}>
                            <h1>CAD $150.00</h1>
                            <p className={""}>Payments due</p>
                        </div>
                    </div>
                </div>
                <div className={"flex-1"}>
                    <div className={"flex flex-row gap-2 "}>
                        <TrendingDownIcon className={"text-red-500"}/>
                        <div className={"flex flex-col text-muted-foreground"}>
                            <h1>CAD $90.00</h1>
                            <p className={""}>Payments overdue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueSummaryCard;