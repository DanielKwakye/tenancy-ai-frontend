import {Button} from "@/components/ui/button.tsx";
import {ArrowRightIcon} from "lucide-react";

function TenantsSection() {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between gap-6"}>
                <h1 className={"font-bold text-lg"}>Tenants</h1>
                <Button className={"inline-flex items-center gap-1"}>
                    <span>View all</span>
                    <ArrowRightIcon />
                </Button>
            </div>
            <div>
                Tenants list here
            </div>
        </div>
    )
}

export default TenantsSection;