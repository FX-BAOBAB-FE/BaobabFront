export default function CollectDetail({ content }: { content: string }) {
    return (
        <div className="flex flex-col w-[30%] items-center mt-5">
            <p className="font-bold text-xl">BAOBAB 개인정보 수집 및 이용 동의</p>
            <div className="w-full h-[75%] border-2 mt-2 overflow-auto rounded-md p-2">
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