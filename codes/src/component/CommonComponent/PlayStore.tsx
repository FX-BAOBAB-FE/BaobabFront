import Btn from "../MainPage/MainBtn";
import googleplay from '../../Img/googleplay.png'
import appstore from '../../Img/appstore.png'

export default function PlayStore(){
    return(
        <div className='flex'>
            <Btn Src={googleplay} to={'/'}>Google Play</Btn>
            <Btn Src={appstore} to={'/'}>App Store</Btn>
            {/* <Btn Src={googleplay} >Google Play</Btn>
            <Btn Src={appstore} >App Store</Btn> */}
        </div>
    )
}