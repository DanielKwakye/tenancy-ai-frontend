import LandlordPortalNavbar from "@/presentation/landlord/components/LandlordPortalNavbar.tsx";
import LandlordPortalFooter from "@/presentation/landlord/components/LandlordPortalFooter.tsx";
import LandlordOverviewSection from "@/presentation/landlord/components/LandlordOverviewSection.tsx";
import TenantsSection from "@/presentation/landlord/components/TenantsSection.tsx";
import ExpensesSection from "@/presentation/landlord/components/ExpensesSection.tsx";


function LandlordPortalPage() {
    return (
        // bg-[#f1f5f9]
        <div className={"bg-primary/10"}>
            <LandlordPortalNavbar />

            {/* Body */}
            <div className={"md:max-w-6xl md:mx-auto mx-5 py-6 space-y-6 "}>

                <div className={"space-y-1"}>
                    <h1 className="text-xl font-bold">Hi Landlord</h1>
                    <p className={"text-muted-foreground"}>Welcome to properties park!</p>
                </div>
                <LandlordOverviewSection/>

                {/* Tenants section here*/}
                <TenantsSection/>
                {/*  End of tenants section   */}

                <ExpensesSection/>

            </div>

            {/* Footer */}
            <LandlordPortalFooter/>

        </div>
    )
}

export default LandlordPortalPage