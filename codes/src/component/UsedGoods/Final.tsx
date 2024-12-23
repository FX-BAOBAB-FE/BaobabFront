import React from 'react'
import IntroImg from './IntroImg';
import BoxList from './BoxList';
import Footer from '../FooterInfo/Footer';

export default function Final(){
    return(
        <div className='bg'>
            <IntroImg/>
            <BoxList/>
            <Footer/>
        </div>
    )
}