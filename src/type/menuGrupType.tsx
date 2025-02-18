import React from "react"

interface menuItems{
    icon? : React.JSX.Element
    label : string,
    route? : string,
    children? : {
        label : string,
        route : string,
        icon? : React.JSX.Element
    }[]
}
interface menuGroupType  {
    name: string,
    menuItems : menuItems []
}

export type {menuItems, menuGroupType}