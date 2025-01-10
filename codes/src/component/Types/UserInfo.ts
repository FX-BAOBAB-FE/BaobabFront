export type UserType ={
    id:string,
    password:string,
    email:string,
    name:string,
    birth:string,
    wire:string,
    sex:string,
    foreigner:string,
    phone:string,
}

export type UserTypeMessage ={
    idM:string,
    passwordM:string,
    emailM:string,
    nameM:string,
    birthM:string,
    wireM:string,
    sexM:string,
    foreignerM:string,
    phoneM:string,
}

export type UserProps = {
    user: UserType;
    onChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
};