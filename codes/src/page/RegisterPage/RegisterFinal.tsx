import FirstBox from "../../component/Register/InsertRegister/FirstBox"
import SecondBox from "../../component/Register/InsertRegister/SecondBox"

export default function RegisterFinal(){
    return(
        <div className="flex flex-col items-center">
            <FirstBox/>
            <SecondBox/>
        </div>
    )
}