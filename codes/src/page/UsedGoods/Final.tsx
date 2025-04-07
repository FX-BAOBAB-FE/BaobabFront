import React from 'react'
import IntroImg from '../../component/UsedGoods/MainGoodsCompoent/IntroImg';
import BoxList from '../../component/UsedGoods/BoxList';
import Footer from '../../component/FooterInfo/Footer';

export default function Final(){
    return(
        <div className='bg'>
            <IntroImg/>
            <BoxList/>
            <Footer/>
        </div>
    )
}