import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "@/components/ui/navigation-menu.tsx";
import {Link} from "react-router";
import Logo from "@/components/custom/Logo.tsx";
import {
    LucideSettings, MenuIcon,
} from "lucide-react";
import {manProfilePicImg} from "@/assets";
import {Button} from "@/components/ui/button.tsx";
import {landlordPortalMenuLinks} from "@/lib/constants.ts";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";


function LandlordPortalNavbar() {
    return (
        <div>
            <DesktopNavbar />
            <MobileNavbar />
            <div className={"h-16 md:h-20"}></div>
        </div>
    )
}

function DesktopNavbar() {
    return (
        <nav className="hidden md:block fixed shadow w-full z-20 bg-background">

            <div className={"py-4  max-w-6xl  flex flex-row justify-between items-center  mx-auto"}>

                <div className="flex-1 grid place-content-start">
                    <Logo/>
                </div>

                <div className="flex-1 grid place-content-center">
                    <NavigationMenu className={""}>
                        <NavigationMenuList className={"gap-4"}>

                            {
                                landlordPortalMenuLinks.map((link) => {
                                    const Icon = link.icon
                                    return (
                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild>
                                                <Link to={link.href} className="inline-flex flex-row gap-1 items-center">
                                                    { Icon && <Icon/> }
                                                    <span className={"text-sm"}>{ link.title }</span>
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    );
                                })
                            }

                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex-1 grid place-content-end">
                    <div className={"flex flex-row gap-2 items-center"}>
                        <div className={" w-10 h-10 rounded-full overflow-clip"}>
                            <img src={manProfilePicImg} alt="" className={"object-cover w-full h-full"}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <h1 className={"text-sm font-bold"}>John Frenchman</h1>
                            <p className={"text-xs text-muted-foreground"}>Landlord</p>
                        </div>
                    </div>
                </div>

            </div>

        </nav>
    )
}

function MobileNavbar() {
    return (
        <nav className={"md:hidden bg-background fixed z-10 w-full"}>
            <div className={"flex flex-row justify-between items-center mx-auto pl-2 pr-4 py-4"}>
                <div className={"flex flex-row items-center gap-2"}>
                    <Drawer direction={"left"}>
                        <DrawerTrigger><Button variant={"ghost"}><MenuIcon/></Button></DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle className={"text-left inline-flex items-center gap-2"}>
                                    <div className={"flex flex-row gap-2 items-center"}>
                                        <div className={" w-8 h-8 rounded-full overflow-clip"}>
                                            <img src={manProfilePicImg} alt=""
                                                 className={"object-cover w-full h-full"}/>
                                        </div>
                                        <div className={"flex flex-col"}>
                                            <h1 className={"text-sm font-bold"}>John Frenchman</h1>
                                            <p className={"text-xs text-muted-foreground"}>Landlord</p>
                                        </div>
                                    </div>
                                </DrawerTitle>
                            </DrawerHeader>
                            <div className={"divide-y flex flex-col"}>
                                {
                                    landlordPortalMenuLinks.map((link) => {
                                        const Icon = link.icon
                                        return (
                                            <Link to={link.href} className={"py-4 inline-flex items-center gap-2 px-4"}>
                                                {Icon && <Icon size={16}/>}
                                                <span className={"text-sm"}>{link.title}</span>
                                            </Link>

                                        )
                                    })
                                }
                            </div>
                        </DrawerContent>
                    </Drawer>
                    <Logo/>
                </div>
                <div className={"flex flex-row gap-2 items-center"}>
                    <Button variant={"ghost"}><LucideSettings/></Button>
                    <div className={" w-6 h-6 rounded-full overflow-clip"}>
                        <img src={manProfilePicImg} alt="" className={"object-cover w-full h-full"}/>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default LandlordPortalNavbar