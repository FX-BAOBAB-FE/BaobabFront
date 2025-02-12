export type UserType ={
    email:string,
    password:string,
    nickName:string,
    name:string,
    carrierType:string,
    phoneNumber:string,
    genderType:string,
    isForeigner:boolean,
    birth:string,
    address:string,
    detailAddress:string,
    basicAddress:boolean,
    post:string,
}

export type UserProps = {
    user: UserType;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
};