export interface RoleType{
    name? : string,
    type? : string
}

export interface MemberType{
    id? : string,
    period? : number,
    image? : string,
    order? : number,
    name? : string,
    role? : string|RoleType,
    description? : string
}
