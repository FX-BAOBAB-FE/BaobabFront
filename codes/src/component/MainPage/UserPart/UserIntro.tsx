import ProfileDate from "./ProfileDate";
import UserContext from "./UserContent";

export default function UserIntro(){
    return(
        <div className="flex flex-col w-[60%] h-[70rem] mt-10">
            <ProfileDate />
            <hr className="w-full h-1 mt-2 mb-3"/>
            <UserContext />

            
        </div>
    )
}