import { BtnType } from '../Types/BtnType';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function headerBtn({Src,to,children}:BtnType){
    return(
        <Button variant="contained" 
        sx={{ color: '#4C6EF5', backgroundColor: 'white' }} 
        component={Link} 
        to={to}
        className='mx-2'    
            >
            <img src={Src} alt="로그인 이미지"/>
            {children}
        </Button>
        
        // <button className={`flex justify-center items-center w-32 h-10 rounded-md mr-2 bg-white`} 
        //     >
        //     <img src={Src} alt="로그인 이미지"/>
        //     <p className='text-[#4C6EF5] ml-2 font-bold'>
        //         {children}
        //     </p>
        // </button>
     )
}