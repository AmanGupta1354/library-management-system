import { useState,useEffect } from "react";

export default function DateSet()
{
    const [time,setTime]=useState(new Date());

    useEffect(()=> {
        const timer = setInterval(()=>
        setTime(new Date()),1000);
        return ()=>
            clearInterval(timer);
        
    },[]);

    return(
        <div>
            <p>{time.toLocaleString()}</p>
        </div>
    );
}