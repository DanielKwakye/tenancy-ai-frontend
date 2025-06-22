import type {MenuLinkItem} from "@/lib/types";
import {BadgeDollarSignIcon, BarChart4Icon, CogIcon, HomeIcon, UsersIcon} from "lucide-react";

export const landlordPortalMenuLinks: MenuLinkItem[] = [
    {
        title: "Home",
        href: "/",
        icon: HomeIcon,
        visibilityOnMobile: "visible",
        visibilityOnDesktop: "visible"
    },
    {
        title: "Tenants",
        href: "/",
        icon: UsersIcon,
        visibilityOnMobile: "visible",
        visibilityOnDesktop: "visible"
    },
    {
        title: "Expenses",
        href: "/",
        icon: BadgeDollarSignIcon,
        visibilityOnMobile: "visible",
        visibilityOnDesktop: "visible"
    },
    {
        title: "Reports",
        href: "/",
        icon: BarChart4Icon,
        visibilityOnMobile: "visible",
        visibilityOnDesktop: "visible"
    },
    {
        title: "Settings",
        href: "/",
        icon: CogIcon,
        visibilityOnMobile: "visible",
        visibilityOnDesktop: "visible"
    },
]