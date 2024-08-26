import React from 'react'
import Header from '../HeaderList/Header';

const ErrorOccured:React.FC<{}> = ()=>{
    return(
        <div>
            <Header/>
            <h1>url 잘못 입력함</h1>
        </div>
    )
}


export default ErrorOccured;