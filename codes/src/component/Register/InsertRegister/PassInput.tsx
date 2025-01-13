import { RefBtn } from '../../Types/BtnType';
import eye from './Img/eye.png'
import wing from './Img/wing.png'
import lock from './Img/lock.png'
import { forwardRef, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userAction } from '../../reduxData/user-Slice';

type passType ={
    onBlur:(e:React.FocusEvent<HTMLInputElement>) => void,
}

export default function PassInput({onBlur}:passType){
    const [hidden, setHidden] = useState(false);
    const passRef = useRef<HTMLInputElement>(null);

    function Changed(){
        setHidden(!hidden);
    }
    
    return(
        <div className={`h-[4rem] w-full flex items-center border-2 justify-between`}>
            <div className='flex items-center'>
                <img src={lock} alt="비밀번호" className='w-6 h-6 mx-3'/>
                {hidden?
                    <input className="w-[27rem] h-10 text-lg" type='text' placeholder='비밀번호' 
                    name="password" maxLength={23} ref={passRef} onBlur={onBlur} /> : 
                    <input className="w-[27rem] h-10 text-lg" type='password' placeholder='비밀번호' 
                    name="password" maxLength={23} ref={passRef} onBlur={onBlur}/>
                }
            </div>
            {hidden ? 
                <button className="mr-7 w-7 h-7" onClick={Changed}><img src={eye}/></button> : 
                <button className="mr-7 w-7 h-7" onClick={Changed}><img src={wing}/></button> 
            }
        </div>
    )
}