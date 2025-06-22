import type {ElementType} from "react";

type MenuLinkItem = {
    href: string
    title: string
    icon?: ElementType,
    visibilityOnMobile: "hidden" | "visible"
    visibilityOnDesktop: "hidden" | "visible"
}