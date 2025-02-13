import { useSelector } from "react-redux"

export default function SuccessFinal(){
    const selector = useSelector((state:any) => state.user);
    return(
        <div className="w-full h-full flex justify-center">
            <div className="w-[80%] h-full flex flex-col justify-center items-center">
                <p className="text-8xl">환영합니다!</p>
                <p className="mt-10 font-bold">{selector.name}님, 회원가입을 축하드립니다.</p>
                <p className="font-bold">BaoBab의 새로운 아이디는 {selector.email}입니다.</p>
            </div>
        </div>
    )
}