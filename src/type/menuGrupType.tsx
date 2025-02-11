
interface menuItems{
    icon? : React.JSX.Element
    label : string,
    route? : string,
    children? : {
        label : string,
        route : string
    }[]
}
interface menuGroupType  {
    name: string,
    menuItems : menuItems []
}

export type {menuItems, menuGroupType}