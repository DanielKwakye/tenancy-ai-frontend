import LandlordInfoCard from "@/presentation/landlord/components/LandlordInfoCard.tsx";
import RentedUnits from "@/presentation/landlord/components/RentedUnits.tsx";

function LandlordOverviewSection() {
    return (
        <div className={"flex flex-col md:flex-row gap-4 md:gap-6"}>

            {/*  Landlord Info Card   */}
            <div className={"md:flex-3"}>
                <LandlordInfoCard />
            </div>

            <div className={"md:flex-2 flex flex-col gap-6"}>
                <RentedUnits />
                <RentedUnits />
            </div>

            <div className={"md:flex-3"}>
                <LandlordInfoCard />
            </div>

        </div>
    )
}

export default LandlordOverviewSection;