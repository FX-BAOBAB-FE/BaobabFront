import { RefBtn } from '../../Types/BtnType';
import eye from './Img/eye.png'
import wing from './Img/wing.png'
import lock from './Img/lock.png'
import { forwardRef, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userAction } from '../../reduxData/user-Slice';

export default function PassInput(){
    const [hidden, setHidden] = useState(false);
    const passRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const focusPass = ()=>{
        passRef.current?.focus();
    }
    function onChange(){
        dispatch(userAction.setInputs({name:'password',value:passRef.current?.value}))
    }
    function Changed(){
        setHidden(!hidden);
    }
    
    return(
        <div onClick={focusPass} className={`h-[4rem] w-full flex items-center border-2`}>
            <img src={lock} alt="비밀번호" className='w-6 h-6 mx-3'/>
            {hidden?
                <input className="w-56 h-10 text-lg" type='text' placeholder='비밀번호' 
                name="password" onChange={onChange} maxLength={23} ref={passRef} /> : 
                <input className="w-56 h-10 text-lg" type='password' placeholder='비밀번호' 
                name="password" onChange={onChange} maxLength={23} ref={passRef} />
            }
            {hidden ? 
                <button className="ml-56 w-7 h-7" onClick={Changed}><img src={eye}/></button> : 
                <button className="ml-56 w-7 h-7" onClick={Changed}><img src={wing}/></button> 
            }
        </div>
    )
}