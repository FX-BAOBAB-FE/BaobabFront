import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import Address from './Img/address.png'
import FInput from "./FInput";
import { useDispatch } from "react-redux";
import { userAction } from "../../reduxData/user-Slice";

type AddressType = {
    state:boolean|undefined,
    bool:boolean,
    postBlur: (e:React.FocusEvent<HTMLInputElement>) => void;
    AddressBlur: (e:React.FocusEvent<HTMLInputElement>) => void;
    DetailAddressBlur: (e:React.FocusEvent<HTMLInputElement>) => void;
}

export default function AddressInput({state,bool,postBlur,AddressBlur, DetailAddressBlur}:AddressType){
    const dispatch = useDispatch()
    const [post,setPost] = useState("");
    const [address,setAddress] = useState("");
    const [detailAddress,setDetailAddress] = useState("");
    const postcodeScriptUrl = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    const open = useDaumPostcodePopup(postcodeScriptUrl);
    
    const handlePopup = (data:any) =>{
        console.log(data)
        let fullAddress = data.address;
        let extraAddress = '';

        if(data.addressType === 'R'){
            if(data.bname !==''){
                extraAddress += data.bname;
            }
            if(data.buildingName !== ''){
                extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        setPost(data.zonecode);
        dispatch(userAction.setInputs({name:'post',value:data.zonecode}))
        setAddress(fullAddress);
        dispatch(userAction.setInputs({name:'address',value:fullAddress}))
    }
    const handleAddress = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
    }
    const handleDetailAddress = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDetailAddress(e.target.value);
    }
    const handlePost = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPost(e.target.value);
    }
    return(
        <div className="flex flex-col justify-center">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <input 
                        type="text"
                        placeholder="우편번호" 
                        name="post" 
                        onBlur={postBlur} 
                        value={post}
                        onChange={handlePost}
                        className={`border-2 h-12 outline-none pl-5 
                            ${state ?'border-[var(--logo-color)] ': bool || state !==undefined ? 'border-red-500' : 'border-[#dfdfdf]'}`}
                    />
                    <button
                        onClick={() => open({onComplete:handlePopup})}
                        className="border-2 h-12 w-[20%] m-1"
                    >
                        클릭
                    </button>
                </div>
                <div className={`flex items-center border-2
                    ${state ?'border-[var(--logo-color)] ': bool || state !==undefined ? 'border-red-500' : 'border-[#dfdfdf]'}`}>
                    <img src={Address} alt="주소 이미지" className="w-8 h-8 ml-2"/>
                    <input 
                        type="text"
                        placeholder="주소" 
                        name="address" 
                        onBlur={AddressBlur} 
                        value={address}
                        onChange={handleAddress}
                        className={`h-12 w-full outline-none pl-2`}
                    />
                </div>
            </div>
            <input 
                type="text" 
                placeholder="상세주소" 
                name="detailAddress" 
                onBlur={DetailAddressBlur} 
                onChange={handleDetailAddress}
                className={`h-12 w-full outline-none pl-2 border-2 mt-1
                    ${state ?'border-[var(--logo-color)] ': bool || state !==undefined ? 'border-red-500' : 'border-[#dfdfdf]'}`}
            />
        </div>
    )
}