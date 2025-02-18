export interface RoleType{
    name? : string,
    type? : string
}

export interface MemberType{
    id? : number,
    period? : number,
    name? : string,
    role? : string|RoleType,
    desc? : string
}
