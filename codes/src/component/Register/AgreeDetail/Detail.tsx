import { useState } from "react";

type DetailType = {
    category: string[]; // ["SKT", "KT", "LG"]
    name: string;
    contentList: {
        [key:string]:string
    };
};

export default function Detail({ category, name, contentList }: DetailType) {
    const [num, setNum] = useState(category[0]); // Default to "SKT"
    let a = "";
    let b = "";
    let c = "";
    let content = "";

    // Use num to determine styles and content
    if (num === category[0]) {
        a = "border-y-[var(--logo-color)] border-l-[var(--logo-color)]";
        b = "border-l-[var(--logo-color)]";
        c = "";
        content = contentList[category[0]]; // Correctly access contentList
    } else if (num === category[1]) {
        a = "";
        b = "border-[var(--logo-color)]";
        c = "";
        content = contentList[category[1]]; // Correctly access contentList
    } else if (num === category[2]) {
        a = "";
        b = "border-r-[var(--logo-color)]";
        c = "border-y-[var(--logo-color)] border-r-[var(--logo-color)]";
        content = contentList[category[2]]; // Correctly access contentList
    }

    return (
        <div className="flex flex-col w-[30%] items-center mt-5">
            <p className="font-bold text-xl">{name}</p>
            <div className="grid grid-cols-3 w-full mt-5 ">
                <button className={`${a} border-l-2 border-y-2 h-14 rounded-l-md`} 
                onClick={() => setNum(category[0])}>
                    {category[0]}
                </button>
                <button className={`${b} border-2`} onClick={() => setNum(category[1])}>
                    {category[1]}
                </button>
                <button className={`${c} border-y-2 border-r-2 rounded-r-md`} onClick={() => setNum(category[2])}>
                    {category[2]}
                </button>
            </div>
            <div className="w-full h-[65%] border-2 mt-2 overflow-auto rounded-md p-2">
                <p className="whitespace-pre-wrap font-thin text-sm">{content}</p>
            </div>
            <button className="w-full h-[3rem] bg-[var(--logo-color)] mt-5 rounded-md 
            text-white font-bold text-xl" onClick={() => window.close()}>
                확인
            </button>
            <p className="mt-3 font-bold text-xl text-[var(--logo-color)]">BAOBAB</p>
        </div>
    );
}