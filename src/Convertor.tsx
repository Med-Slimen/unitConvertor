import { useRef, useState } from "react";

function Convertor(){
    const num=useRef<HTMLInputElement>(null);
    const [lres,setLres]=useState("");
    const [litRes,setLitRes]=useState("");
    const [kres,setKres]=useState("");
    function calc(){
        const nb : number=Number(num.current!.value)
        const lRes=`${nb} meters = ${(nb*3.281).toFixed(3)} feet | ${nb} feet = ${(nb / 3.281).toFixed(3)} meters`
        const litRes=`${nb} litres = ${(nb*0.264).toFixed(3) } gallons | ${nb} gallons = ${(nb / 0.264).toFixed(3) } litres`
        const kres=`${nb} kilos = ${(nb*2.204).toFixed(3)} pounds | ${nb} pounds = ${(nb / 2.204).toFixed(3)} kilos`
        setLres(lRes)
        setLitRes(litRes)
        setKres(kres)
       
    }
    return(
        <div className="box">
            <div className="inputs">
                <h2>Metric/Imperial Unit Conversion</h2>
                <input ref={num} type="text" name="" id="" />
                <button onClick={calc}>Convert</button>
            </div>
            <div className="outputs">
                <div className="out">
                    <h3>Length ( Meter/ Feet )</h3>
                    <p id="lres">{lres}</p>
                </div>
                <div className="out">
                    <h3>Volume (Liters/Gallons)</h3>
                    <p id="litRes">{litRes}</p>
                </div>
                <div className="out">
                    <h3>Mass (Kilograms/Pounds)</h3>
                    <p id="kres">{kres}</p>
                </div>
                
            </div>
        </div>
    );
}
export default Convertor