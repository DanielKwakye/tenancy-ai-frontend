import {Button} from "@/components/ui/button.tsx";
import {ArrowRightIcon} from "lucide-react";
import TenantCard from "@/presentation/landlord/components/TenantCard.tsx";

function TenantsSection() {
    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-row justify-between gap-6"}>
                <h1 className={"font-bold text-lg"}>Tenants</h1>
                <Button variant={"ghost"} className={"inline-flex items-center gap-1"}>
                    <span>View all</span>
                    <ArrowRightIcon />
                </Button>
            </div>
            <div className={"flex flex-col md:flex-row gap-6"}>
                {
                    Array.from({length: 3}).map((_, i) => {
                        return (
                            <TenantCard key={`tenant-${i}`}/>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TenantsSection;