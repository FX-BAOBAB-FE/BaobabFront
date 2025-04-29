import TextComponent from '../../component/MainPage/TextComponent';
import MainImg from './Img/img.png'
import TextImgComponent from '../../component/MainPage/TextImgComponent';
import Footer from '../../component/FooterInfo/Footer';

export default function FinalMainPage(){
    return(
        <div className='h-full'>
            <div className='w-full flex flex-col items-center'>
                <TextImgComponent>
                    <TextComponent/>
                    <img className='w-full lg:w-[50%] h-[30rem]' src={MainImg} alt="MainPage이미지"/>
                </TextImgComponent>
                <TextImgComponent>
                    <img className='w-full lg:w-[50%] h-[30rem]' src={MainImg} alt="MainPage이미지"/>
                    <TextComponent/>
                </TextImgComponent>
            </div>
            <Footer/>
        </div>
    )
}
