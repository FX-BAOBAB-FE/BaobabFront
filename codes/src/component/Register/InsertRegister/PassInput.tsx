import { RefBtn } from '../../Types/BtnType';
import eye from './Img/eye.png'
import wing from './Img/wing.png'
import { forwardRef, useState } from 'react'

const PassInput = forwardRef<HTMLInputElement,RefBtn>(({Src,props=[], onClick},ref ) =>{
    const [hidden, setHidden] = useState(false);
    const [val, setVal] = useState('');

    function handle(event:React.ChangeEvent<HTMLInputElement>){
        setVal(event.target.value);
    }
    function Changed(){
        setHidden(!hidden);
    }
    
    return(
        <div onClick={onClick} className={`h-[4rem] w-full flex items-center ${props.join(' ')}`}>
            <img src={Src} alt="비밀번호" className='w-6 h-6 mx-3'/>
            {hidden?
                <input className="w-56 h-10 text-lg" type='text' placeholder='비밀번호' 
                onChange={handle} maxLength={23} ref={ref}/> : 
                <input className="w-56 h-10 text-lg" type='password' placeholder='비밀번호' 
                onChange={handle} maxLength={23} ref={ref}/>
            }
            {hidden ? 
                <button className="ml-56 w-7 h-7" onClick={Changed}><img src={eye}/></button> : 
                <button className="ml-56 w-7 h-7" onClick={Changed}><img src={wing}/></button> 
            }
        </div>
    )
})

export default PassInput;