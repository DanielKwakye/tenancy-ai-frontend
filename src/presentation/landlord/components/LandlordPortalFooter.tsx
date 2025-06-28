import {Link} from "react-router";

function LandlordPortalFooter() {
    return (
        <div className={"bg-background w-full"}>
            <div className={"py-4 max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-4 px-5 md:px-0"}>
                <div className={"flex flex-col md:flex-row gap-4"}>
                    <Link to="/" className={"text-sm text-muted-foreground"}>About</Link>
                    <Link to="/" className={"text-sm text-muted-foreground"}>Privacy</Link>
                    <Link to="/" className={"text-sm text-muted-foreground"}>Terms</Link>
                    <Link to="/" className={"text-sm text-muted-foreground"}>Support</Link>
                </div>
                <div className={"text-sm text-muted-foreground"}>
                    2025 © Prompt. All rights reserved. Crafted by Clickkapps
                </div>
            </div>
        </div>
    )
}

export default LandlordPortalFooter;