import { Form } from "react-bootstrap";

interface description{
    title:string,
    content:string,
    name:string,
}

export default function InputData({title,content,name}:description){
    return(
        <>
            <Form.Group className="mb-3 flex flex-col" controlId={name}>
                <Form.Label className='font-bold text-xl'>{title}</Form.Label>
                <Form.Label>{content}</Form.Label>
                <Form.Control name={name} type="text" required className='w-[40rem]'/>
            </Form.Group>
        </>
    )
}