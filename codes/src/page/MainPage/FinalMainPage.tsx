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
