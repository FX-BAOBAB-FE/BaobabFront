import { Button } from "@mui/material";

type contentType={
    content:string,
}

export default function RegisterBtn({content}:contentType){

    return(
        <Button 
        variant="contained"
        className="w-[10rem] h-[3.5rem]"
        >
            <p className="text-xl">{content}</p>
        </Button>
    )
}