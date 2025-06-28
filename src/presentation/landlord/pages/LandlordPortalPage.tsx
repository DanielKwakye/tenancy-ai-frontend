import LandlordPortalNavbar from "@/presentation/landlord/components/LandlordPortalNavbar.tsx";
import LandlordPortalFooter from "@/presentation/landlord/components/LandlordPortalFooter.tsx";
import LandlordOverviewSection from "@/presentation/landlord/components/LandlordOverviewSection.tsx";
import TenantsSection from "@/presentation/landlord/components/TenantsSection.tsx";


function LandlordPortalPage() {
    return (
        <div className={"bg-[#f1f5f9]"}>
            <LandlordPortalNavbar />

            {/* Body */}
            <div className={"md:max-w-6xl mx-auto py-6 space-y-6"}>

                <div className={"space-y-1"}>
                    <h1 className="text-xl font-bold">Hi Landlord</h1>
                    <p className={"text-muted-foreground"}>Welcome to properties park!</p>
                </div>
                <LandlordOverviewSection/>

                {/* Tenants section here*/}
                <TenantsSection/>
                {/*  End of tenants section   */}

            </div>

            {/* Footer */}
            <LandlordPortalFooter/>

        </div>
    )
}

export default LandlordPortalPage