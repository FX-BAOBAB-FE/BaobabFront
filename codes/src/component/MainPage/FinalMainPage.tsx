import React from 'react';
import TextComponent from './TextComponent';
import MainImg from './Img/img.png'
import TextImgComponent from './TextImgComponent';
import Footer from '../FooterInfo/Footer';
const FinalMainPage:React.FC<{}> = () =>{
    return(
        <div className='h-full'>
            <div className='w-full flex flex-col items-center'>
                <TextImgComponent>
                    <TextComponent/>
                    <img src={MainImg} />
                </TextImgComponent>
                <TextImgComponent>
                    <img src={MainImg} />
                    <TextComponent/>
                </TextImgComponent>
            </div>
            <Footer/>
        </div>
    )
}

export default FinalMainPage;
