import { useState } from "react";
import Card from "./IntroCalDetails/MonthCard";
import { MonthData,YearData } from "./MonthYearData";
import MonthYearBtn from "./IntroCalDetails/MonthYearBtn";
export default function IntroPlan(){
    const [dateCheck,setDateCheck] = useState(1);

    function onMonth(){
        setDateCheck(1);
    }
    function onYear(){
        setDateCheck(2);
    }
    return(
        <div className="w-full flex justify-center pb-20">
            <div className="w-[70%] h-full flex items-center flex-col">
                <h3 className="text-6xl font-bold my-10">
                    Choose your plan
                </h3>
                <p className="text-[#868E96] mb-14 min-w-[600px]">
                    Choose a plan that’s right for your growing team. Simple pricing. No hidden charges.
                </p>
                <MonthYearBtn onMonth={onMonth} onYear={onYear} dateCheck={dateCheck}/>
                <div className="w-full flex justify-between">
                    {dateCheck === 1 ? 
                        MonthData.map((data) =>(
                            <Card 
                            title={data.title} 
                            price={data.price} 
                            details={data.details}
                            color={data.color}
                            />
                        )) : 
                        YearData.map((data)=>(
                            <Card 
                            title={data.title} 
                            price={data.price} 
                            details={data.details}
                            color={data.color}
                            />
                        ))
                    }
                </div>
            </div>
    </div>
    )
}