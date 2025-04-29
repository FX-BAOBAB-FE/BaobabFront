import React from "react";
import { Form } from "react-bootstrap";

interface description{
    title:string,
    content:string,
    name:string,
    value?:string | number,
    onChange?:(e:React.ChangeEvent<HTMLInputElement>) => void
}

export default function InputData({title,content,name,value="",onChange}:description){
    return(
        <>
            <Form.Group className="w-full mb-3 flex flex-col" controlId={name}>
                <Form.Label className='font-bold text-xl'>{title}</Form.Label>
                <Form.Label>{content}</Form.Label>
                <Form.Control name={name} type="text" required className='w-full' value={value} onChange={onChange}/>
            </Form.Group>
        </>
    )
}