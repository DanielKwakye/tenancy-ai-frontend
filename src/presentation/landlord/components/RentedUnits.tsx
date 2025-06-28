import {CircleCheckBigIcon} from "lucide-react";

function RentedUnits() {
    return (
        <div className={"flex flex-row w-full bg-background p-6 gap-4 rounded"}>
            <div className={"aspect-square bg-[#edfaef] p-3 rounded"}>
                <CircleCheckBigIcon className={"text-green-500"} />
            </div>
            <div className={"flex flex-col"}>
                <h1 className={"text-xl font-bold"}>21</h1>
                <p className={"text-muted-foreground"}>Rented units</p>
            </div>
        </div>
    )
}

export default RentedUnits