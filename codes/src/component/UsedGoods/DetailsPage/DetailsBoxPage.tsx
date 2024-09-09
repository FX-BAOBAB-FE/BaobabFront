import React from 'react'
import Footer from '../../FooterInfo/Footer'
import DetailsBox from './DetailsBox'

const DetailsBoxPage:React.FC<{}> = ()=>{
    return(
        <div className='bg'>
            <DetailsBox/>
            <Footer/>
        </div>
    )
}

export default DetailsBoxPage 