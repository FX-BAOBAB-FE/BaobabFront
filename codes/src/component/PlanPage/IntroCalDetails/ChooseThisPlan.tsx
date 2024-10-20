import BASIC from '../../../Img/check-circle-basic.png';
import PROFESSIONAL from '../../../Img/check-circle.png'
import ENTERPRISE from '../../../Img/check-circle-enterprise.png'
import styled from 'styled-components';
interface PlanBtnProps {
    color: string;
    keyword: string;
}

const PlanBtn = styled.button<PlanBtnProps>`
    border-color:${(props) => props.color};
    background-color:${(props) => props.keyword==='Professional' ? props.color : ''};
    border-radius:10px;
`
const Font = styled.p<{keyword:string}>`
  color:${(props) => props.keyword==='Professional' ? 'white':''}
`
export default function ChooseThisPlan({color,keyword}:PlanBtnProps){
    let image = PROFESSIONAL;
    if(keyword === 'Basic'){
        image = BASIC
    }else if(keyword === 'Professional'){
        image = PROFESSIONAL;
        
    }else{
        image = ENTERPRISE
    }
    return(
        <PlanBtn
        keyword={keyword}
        color={color}
        className={`border-2 w-2/3 flex p-3`}
        >
            <img src={image} alt='basic' className='size-8'/>
            <Font
            keyword={keyword}
            className='pl-4 font-bold text-lg'
            >Choose this plan</Font>
        </PlanBtn>
    )
}