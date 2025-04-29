import React from 'react';


export default function FooterAddr(){
    return(
        <div className='bg-[#495057] w-full h-[15rem] flex justify-evenly items-center flex-col text-white mt-5'>
            <ul className='flex w-[38%] justify-between'>
                <li>Features</li>
                <li>|</li>
                <li>About</li>
                <li>|</li>
                <li>Testimonials</li>
                <li>|</li>
                <li>Contact</li>
                <li>|</li>
                <li>Download</li>
            </ul>
            <div className='text-center'>
                <p>내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용</p>
                <p>Copyright ⓒ 2024 Your Company.  All rights reserved.</p>
            </div>
        </div>
    )
}