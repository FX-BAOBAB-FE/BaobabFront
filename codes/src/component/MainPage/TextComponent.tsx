import Btn from '../UsedGoods/MainBtn';
import googleplay from '../../Img/googleplay.png'
import appstore from '../../Img/appstore.png'

export default function TextComponent(){
    return(
        <div className='w-[60%] h-96 mr-10'>
            <div className="font-bold text-5xl">
                <p>Find</p>
                <p>hidden area of</p>
                <p>your home.</p>
            </div>
            <p className="text-xs my-9">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis sit fuga nobis voluptatem laborum mollitia labore possimus quaerat alias 
                laudantium autem deleniti aspernatur, 
                voluptate libero tempora quae tempore totam repellendus!
            </p>
            <div className="flex">
                <Btn Src={googleplay}>Google Play</Btn>
                <Btn Src={appstore}>App Store</Btn>
            </div>
        </div>
    )
}