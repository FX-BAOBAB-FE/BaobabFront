
import eye from './Img/eye.png'
import wing from './Img/wing.png'
import lock from './Img/lock.png'
import { forwardRef, useRef, useState } from 'react'
import InsertColorChange from "./ChangeContext/InsertColorChange";

type passType ={
    onBlur:(e:React.FocusEvent<HTMLInputElement>) => void,
    state:boolean|undefined,
    bool:boolean
}

export default function PassInput({onBlur,state,bool}:passType){
    const [hidden, setHidden] = useState(false);
    const passRef = useRef<HTMLInputElement>(null);

    function Changed(){
        setHidden(!hidden);
    }
    
    return(
        <InsertColorChange state={state} bool={bool}>
            <div className='flex items-center'>
                <img src={lock} alt="비밀번호" className='w-6 h-6 mx-3'/>
                {hidden?
                    <input className={`w-[27rem] h-10 text-lg outline-none"`} 
                    type='text' placeholder='비밀번호' name="password" maxLength={23} ref={passRef} onBlur={onBlur} /> : 
                    <input className={`w-[27rem] h-10 text-lg outline-none`} 
                        type='password' placeholder='비밀번호' name="password" maxLength={23} ref={passRef} onBlur={onBlur}
                    />
                }
            </div>
            {hidden ? 
                <button className="mr-7 w-7 h-7" onClick={Changed}><img src={eye}/></button> : 
                <button className="mr-7 w-7 h-7" onClick={Changed}><img src={wing}/></button> 
            }
        </InsertColorChange>
    )
}