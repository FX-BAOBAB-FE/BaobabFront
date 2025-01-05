export type BtnType = {
    Src:string,
    children:any
}

export type RegisterBtn = {
    Src:string,
    props:string[],
}

export type RefBtn={
    Src:string,
    props:string[],
    onClick:() => void;
}